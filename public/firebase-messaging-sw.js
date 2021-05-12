'use strict'
//Firebase Messaging
// import firebase from "firebase/app";

importScripts('https://www.gstatic.com/firebasejs/8.5.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.5.0/firebase-messaging.js');

if (!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: "AIzaSyDe2oLkWcbWuqqWGKSqqcaduc0O9W-3m-k",
        authDomain: "vaccine-booking.firebaseapp.com",
        projectId: "vaccine-booking",
        storageBucket: "vaccine-booking.appspot.com",
        messagingSenderId: "654614858619",
        appId: "1:654614858619:web:dc43cf94cf64454ba7cbde",
        measurementId: "G-WVSWNT194M"
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
