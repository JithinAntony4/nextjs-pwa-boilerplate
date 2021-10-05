<img src="https://raw.githubusercontent.com/JithinAntony4/nextjs-pwa-boilerplate/main/public/examples/images/NextJS-PWA-Boilerplate-Banner.png" alt="NextJS-PWA-Boilerplate Banner" align="center" />

<br />

<div align="center"><strong>Start your NextJS PWA project in seconds.</strong></div>
<br>
<div align="center">
  <img src="https://img.shields.io/david/JithinAntony4/nextjs-pwa-boilerplate" alt="Dependency Status">  
  <img src="https://img.shields.io/github/repo-size/JithinAntony4/nextjs-pwa-boilerplate" alt="Repo Size">
  <img src="https://img.shields.io/opencollective/backers/redgoral" alt="Backers on Open Collective">
  <img src="https://img.shields.io/opencollective/sponsors/redgoral" alt="Sponsors on Open Collective">
  <img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/m/JithinAntony4/nextjs-pwa-boilerplate">
  <img src="https://ci.appveyor.com/api/projects/status/0nha6po02d1i5fjn?svg=true" alt="Build Status">
  <img src="https://img.shields.io/github/contributors/JithinAntony4/nextjs-pwa-boilerplate" alt="GitHub contributors">
  <img src="https://img.shields.io/github/stars/JithinAntony4/nextjs-pwa-boilerplate?style=social" alt="GitHub stars">
  <img src="https://img.shields.io/github/forks/JithinAntony4/nextjs-pwa-boilerplate?style=social" alt="GitHub forks">
  <img src="https://img.shields.io/twitter/follow/jithinantony333?style=social" alt="Twitter Follow">
</div>
<br />

<div align="center">
  <sub>Created by <a href="https://twitter.com/jithinantony333">Jithin Antony</a> and maintained with ❤.</sub>
</div>


## Features
* Material UI
* Firebase Cloud Messaging (with Push Notification)
* Typescript Support
* PWA Support
* Authentication (Google Sign-In)
* Cloud Firestore 
* Twilio
* SendGrid

## Prerequisites
* [Firebase](https://firebase.google.com/)
* OAuth client ID (from [Google Cloud Platform](https://console.cloud.google.com/))
* [Sendgrid](https://sendgrid.com/) (Optional, if you aren't use)
* [Twilio](https://twilio.com/) (Optional, if you aren't use)

## Installation
To install **NextJS-PWA-Boilerplate**, follow these steps:

Download Repo:
``` shell script
git clone https://github.com/JithinAntony4/nextjs-pwa-boilerplate your-project-name
```
Install Dependencies:
``` shell script
npm install
# or
yarn install
```
Add Firebase to your web app:

`Goto Firebase Console -> Project Settings -> General -> your apps`, Click **Add App** 
and download the config which will used in this project.
And update `public/firebase-messaging-sw.js` with these credentials.

Download Firebase Admin SDK Config:

`Goto Firebase Console -> Project Settings -> Service accounts -> Firebase Admin SDK`

Click **Generate new private key**, then copy that values and paste into `.env`

Create & Configure `.env`:
``` dotenv
NODE_ENV=[production||development]
TOKEN_SECRET=your_secret_key (which will used for encryt sessions)

SENDGRID_API_KEY=your_sendgrid_api_key
FROM_MAIL=from_email_from_sendgrid

TWILIO_FROM=phone_no
TWILIO_ACCOUNT_SID=your_twilio_account_sid
TWILIO_AUTH_TOKEN=your_twilio_auth_token

AUTH_COOKIE_TOKEN_NAME=cookie_name
AUTH_COOKIE_TOKEN_AGE=28800(in mileseconds)

# use the values from firebase-config.json
PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
PUBLIC_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
PUBLIC_FIREBASE_PROJECT_ID=your-project
PUBLIC_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
PUBLIC_FIREBASE_MESSAGING_SENDER_ID=0123456789
PUBLIC_FIREBASE_APP_ID=0123456789
PUBLIC_FIREBASE_MESUREMENT_ID=0123456789

PRIVATE_FIREBASE_TYPE=place_your_value
FIREBASE_PRIVATE_KEY_ID=place_your_value
FIREBASE_PRIVATE_KEY=place_your_value
PRIVATE_FIREBASE_CLIENT_EMAIL=place_your_value
PRIVATE_FIREBASE_CLIENT_ID=place_your_value
PRIVATE_FIREBASE_AUTH_URI=place_your_value
PRIVATE_FIREBASE_TOKEN_URI=place_your_value
PRIVATE_FIREBASE_AUTH_PROVIDER_x509_CERT_URL=place_your_value
PRIVATE_FIREBASE_CLIENT_x509_CERT_URL=place_your_value

GOOGLE_AUTH_CLIENT_ID=your_google_auth_client_id (from GCP Console)

```
## Usage

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Contributing to NextJS-PWA-Boilerplate
To contribute to NextJS-PWA-Boilerplate, follow these steps:

1. Fork this repository.
2. Create a branch: `git checkout -b <branch_name>`.
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request.

Alternatively see the GitHub documentation on [creating a pull request](https://help.github.com/en/github/collaborating-with-issues-and-pull-requests/creating-a-pull-request).
## Contributors

Thanks to the following people who have contributed to this project:

* [@JithinAntony4](https://github.com/JithinAntony4) 💻 📖 🎨

## Credits
* [create-next-app](https://www.npmjs.com/package/create-next-app)
* [next-pwa](https://www.npmjs.com/package/next-pwa)
* [@material-ui/icons](https://www.npmjs.com/package/@material-ui/icons)
* [@material-ui/core](https://www.npmjs.com/package/@material-ui/core)
* [@material-ui/lab](https://www.npmjs.com/package/@material-ui/lab)
* [firebase](https://www.npmjs.com/package/firebase)
* [firebase-admin](https://www.npmjs.com/package/firebase-admin)
* [localforage](https://www.npmjs.com/package/localforage)
* [passport](https://www.npmjs.com/package/passport)
* [twilio](https://www.npmjs.com/package/twilio)
* [nodemailer](https://www.npmjs.com/package/nodemailer)
* [@hapi/iron](https://www.npmjs.com/package/@hapi/iron)
* [next-connect](https://www.npmjs.com/package/next-connect)
* [swr](https://www.npmjs.com/package/swr)
* [react-google-login](https://www.npmjs.com/package/react-google-login)
## License
This project is licensed under the MIT license, Copyright (c) 2021 [Jithin Antony](https://jithin.co/). For more information see LICENSE.md.
