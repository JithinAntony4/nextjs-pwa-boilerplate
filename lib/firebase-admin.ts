const admin = require("firebase-admin");

export async function initFirebaseAdmin() {
    if (!admin.apps.length) {
        admin.initializeApp({
            credential: admin.credential.cert({
                    type: process.env.PRIVATE_FIREBASE_TYPE,
                    project_id: process.env.PUBLIC_FIREBASE_PROJECT_ID,
                    private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
                    private_key: process.env.FIREBASE_PRIVATE_KEY,
                    client_email: process.env.PRIVATE_FIREBASE_CLIENT_EMAIL,
                    client_id: process.env.PRIVATE_FIREBASE_CLIENT_ID,
                    auth_uri: process.env.PRIVATE_FIREBASE_AUTH_URI,
                    token_uri: process.env.PRIVATE_FIREBASE_TOKEN_URI,
                    auth_provider_x509_cert_url: process.env.PRIVATE_FIREBASE_AUTH_PROVIDER_x509_CERT_URL,
                    client_x509_cert_url: process.env.PRIVATE_FIREBASE_CLIENT_x509_CERT_URL
                }
            )
        });
    }
}
