import {firebaseCloudMessaging} from "../webPush";
import firebase from "firebase/app";

export async function initFCM(onSuccess, onError) {
    if (typeof window !== 'undefined' && 'serviceWorker' in navigator && window.workbox !== undefined) {
        // run only in browser
        navigator.serviceWorker.ready.then(async reg => {
            await Notification.requestPermission()
        })
    }

    //Firebase Messaging Service
    async function setToken() {
        try {
            const token = await firebaseCloudMessaging.init();
            if (token) {
                getMessage();
                onSuccess(token);
            }
        } catch (error) {
            //console.log(error);
            onError(error)
        }
    }

    function getMessage() {
        const messaging = firebase.messaging();
        messaging.onMessage(async (message) => {
            if (Notification.permission === 'granted') {
                if (navigator.serviceWorker)
                    navigator.serviceWorker.getRegistration().then(async function (reg) {
                        if (reg)
                            await reg.showNotification(message.notification.title, {
                                body: message.notification.body
                            });
                    });
            } else {
                await Notification.requestPermission()
            }
        });
    }

    await setToken();
}
