import {TokenPayload} from "google-auth-library/build/src/auth/loginticket";
import {OAuth2Client} from 'google-auth-library';
import {initFirebaseAdmin} from "./firebase-admin";

const admin = require("firebase-admin");

let client = new OAuth2Client(process.env.GOOGLE_AUTH_CLIENT_ID);

export async function findUser({username, password}) {

    try {
        //other db connections or api calls can take place here
    } catch (e) {
        console.log(e.message)
        return e.details;
    }
}

export async function findGoogleUser(tokenId): Promise<TokenPayload> {
    //verify client token
    let ticket = await client.verifyIdToken({
        idToken: tokenId,
        audience: process.env.GOOGLE_AUTH_CLIENT_ID,
    });
    let payload = ticket.getPayload();
    await initFirebaseAdmin();
    const db = admin.firestore();
    let snapshot = await db.collection("Users").where('email', '==', payload.email).get();
    if (snapshot.empty) {
        let res = await db.collection("Users").add(payload);
    }
    return payload;
}
