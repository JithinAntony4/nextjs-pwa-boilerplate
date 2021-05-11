import type {AppProps} from 'next/app'
import '../styles/globals.css'
import React, {useEffect} from "react";
import {useFCMToken, useUser} from "../lib/hooks";
import {initFCM} from "../lib/fcmUtils";

function MyApp({Component, pageProps}: AppProps) {
    let user = useUser();
    let fcmToken = useFCMToken();

    async function saveFCMToken(token) {
        try {
            await fetch(`/api/fcm/update`, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'accept': 'application/json',
                },
                body: JSON.stringify({
                    fcmToken: token,
                })
            })
        } catch (e) {
            //console.log(e.message)
        }
    }

    useEffect(() => {
        if (!user) return;
        if (fcmToken) return;
        initFCM(saveFCMToken, () => {
        })
    }, [user, fcmToken])

    return <Component {...pageProps} />
}

export default MyApp
