const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);


export async function sendSMS(phone: string, otp: string): Promise<String | Error> {
    return new Promise((resolve, reject) => {
        client.messages
            .create({
                body: `Welcome to NextJs-PWA-Boilerplate`,
                from: process.env.TWILIO_FROM,
                to: phone
            })
            .then(message => {
                resolve(message)
                //console.log(message)
            })
            .catch(reason => {
                reject(reason)
                //console.log(reason)
            });
    })
}
