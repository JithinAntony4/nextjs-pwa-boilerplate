import 'firebase/messaging';
import firebase from 'firebase/app';
import localforage from 'localforage';


const firebaseCloudMessaging = {
//checking whether token is available in indexed DB
    tokenInlocalforage: async () => {
        return localforage.getItem('fcm_token');
    },
    //initializing firebase app
    init: async function () {
        if (!firebase.apps.length) {
            firebase.initializeApp({
                apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
                authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
                projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
                storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
                messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
                appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
                measurementId: process.env.NEXT_PUBLIC_FIREBASE_MESUREMENT_ID
            });
            try {
                const messaging = firebase.messaging();
                const tokenInLocalForage = await this.tokenInlocalforage();
                //if FCM token is already there just return the token
                if (tokenInLocalForage !== null) {
                    return tokenInLocalForage;
                }

                //requesting notification permission from browser
                const status = await Notification.requestPermission();
                if (status && status === 'granted') {
                    //getting token from FCM
                    const fcm_token = await messaging.getToken();
                    if (fcm_token) {
                        //setting FCM token in indexed db using localforage
                        await localforage.setItem('fcm_token', fcm_token);
                        //console.log('fcm token', fcm_token, 'userId', userId);
                        //return the FCM token after saving it
                        return fcm_token;
                    }
                }
            } catch (error) {
                console.error(error);
                return null;
            }
        }
    },
};
export {firebaseCloudMessaging};
