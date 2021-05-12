const admin = require("firebase-admin");

export async function initFirebaseAdmin() {
    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert({
                    type: process.env.NEXT_FIREBASE_PRIVATE_TYPE,
                    project_id: process.env.NEXT_FIREBASE_PRIVATE_PROJECT_ID,
                    private_key_id: process.env.NEXT_FIREBASE_PRIVATE_PRIVATE_KEY_ID,
                    private_key: process.env.NEXT_FIREBASE_PRIVATE_PRIVATE_KEY.replace(/\\n/g, '\n'),
                    client_email: process.env.NEXT_FIREBASE_PRIVATE_CLIENT_EMAIL,
                    client_id: process.env.NEXT_FIREBASE_PRIVATE_CLIENT_ID,
                    auth_uri: process.env.NEXT_FIREBASE_PRIVATE_AUTH_URI,
                    token_uri: process.env.NEXT_FIREBASE_PRIVATE_TOKEN_URI,
                    auth_provider_x509_cert_url: process.env.NEXT_FIREBASE_PRIVATE_AUTH_PROVIDER_x509_CERT_URL,
                    client_x509_cert_url: process.env.NEXT_FIREBASE_PRIVATE_CLIENT_x509_CERT_URL
                }
            )
        });
    }
}
