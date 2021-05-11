'use strict'
//Firebase Messaging
// import firebase from "firebase/app";

importScripts('https://www.gstatic.com/firebasejs/8.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.5.0/firebase-messaging.js');

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "your_project_apiKey",
        authDomain: "your_project_authDomain",
        projectId: "your_project_projectId",
        storageBucket: "your_project_storageBucket",
        messagingSenderId: "your_project_messagingSenderId",
        appId: "your_project_appId",
        measurementId: "your_project_measurementId"
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
