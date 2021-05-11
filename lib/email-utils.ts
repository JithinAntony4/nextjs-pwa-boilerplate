const node_mailer = require('nodemailer');
let mailer = node_mailer.createTransport({
    service: 'SendGrid',
    auth: {
        user: 'apikey',
        pass: process.env.SENDGRID_API_KEY
    }
});

export async function sendEmail(email: string, subject: string, otp: string): Promise<String | Error> {
    return new Promise((resolve, reject) => {
        let content_data = `Welcome to NextJs-PWA-Boilerplate`;
        const data = {
            to: email,
            from: process.env.FROM_MAIL,
            subject: subject,
            html: content_data,
            context: {
                url: '',
            }
        };

        mailer.sendMail(data, function (err) {
            if (!err) {
                resolve("OTP has been successfully sent, Kindly check your email for further instructions")
            } else {
                if (err.responseCode === 535)
                    reject("Invalid API Key")
                else
                    reject(err)
            }
        });
    })
}
