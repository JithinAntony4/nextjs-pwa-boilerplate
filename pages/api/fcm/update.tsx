import {NextApiRequest, NextApiResponse} from "next";
import {TokenPayload} from "google-auth-library/build/src/auth/loginticket";
import {getSession} from "../../../lib/iron";
import {initFirebaseAdmin} from "../../../lib/firebase-admin";

const admin = require("firebase-admin");

export default async function updateUserFCM(req: NextApiRequest, res: NextApiResponse) {
    try {
        const session: TokenPayload = await getSession(req)
        if (!session) return res.status(401).send("Unauthorized Access")
        let email = session.email;
        let fcmToken = req.body.fcmToken;
        await initFirebaseAdmin();
        const db = admin.firestore();
        let snapshot = await db.collection("Users").where('email', '==', email).get();

        if (!snapshot.empty) {
            let documentSnapshot = snapshot.docs[0];
            await documentSnapshot.ref.update({
                fcmToken: fcmToken
            });
            res.send("Success")
        } else
            res.status(400).send("User is not found")

    } catch (error) {
        console.error(error)
        res.status(400).send(error.message ? error.message : error.detail)
    }
}
