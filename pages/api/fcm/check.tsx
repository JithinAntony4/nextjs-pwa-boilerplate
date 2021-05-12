import {NextApiRequest, NextApiResponse} from "next";
import {TokenPayload} from "google-auth-library/build/src/auth/loginticket";
import {getSession} from "../../../lib/iron";
import {initFirebaseAdmin} from "../../../lib/firebase-admin";

const admin = require("firebase-admin");

export default async function checkUserFCM(req: NextApiRequest, res: NextApiResponse) {
    try {
        const session: TokenPayload = await getSession(req)
        let email = session ? session.email : "";
        await initFirebaseAdmin();
        const db = admin.firestore();
        let snapshot = await db.collection("Users").where('email', '==', email)
            .where('fcmToken', '!=', "").get();

        if (!snapshot.empty) {
            res.send({
                isHave: true
            })
        } else
            res.status(400).send({
                errMsg: "token not found"
            })

    } catch (error) {
        console.error(error)
        res.status(400).send({
            errMsg: error.message ? error.message : error.detail
        })
    }
}
