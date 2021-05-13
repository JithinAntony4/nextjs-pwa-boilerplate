'use strict'
//Firebase Messaging
// import firebase from "firebase/app";

importScripts('https://www.gstatic.com/firebasejs/8.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.5.0/firebase-messaging.js');

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyDOMpLkiFqfLg1Kiey8NmWpMmwV0z2D_tk",
        authDomain: "nextjs-pwa-boilerplate.firebaseapp.com",
        projectId: "nextjs-pwa-boilerplate",
        storageBucket: "nextjs-pwa-boilerplate.appspot.com",
        messagingSenderId: "581783546486",
        appId: "1:581783546486:web:50feaf7707ab14dd898d57",
        measurementId: "G-WECW0R28KE"
    });
}
firebase.messaging();
//background notifications will be received here
firebase.messaging().onBackgroundMessage(async message => {
    if (Notification.permission === 'granted') {
        if (navigator.serviceWorker)
            navigator.serviceWorker.getRegistration().then(async function (reg) {
                if (reg)
                    await reg.showNotification(message.notification.title, {
                        body: message.notification.body,
                    });
            });
    }
})
