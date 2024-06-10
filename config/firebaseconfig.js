const firebase = require("firebase/compat/app");
require("firebase/compat/storage");

const firebaseConfig = {
  apiKey: "AIzaSyCFtwQ4JFhHAEd9TNbsznUUnTo0z7-GT1U",
  authDomain: "gc-curtain.firebaseapp.com",
  projectId: "gc-curtain",
  storageBucket: "gc-curtain.appspot.com",
  messagingSenderId: "502392812206",
  appId: "1:502392812206:web:8bc4258b355eb0877f733f",
  measurementId: "G-FQP9XSTW8F",
};

firebase.initializeApp(firebaseConfig);
const storageInstance = firebase.storage();
const bucket = storageInstance.ref().bucket;

module.exports = storageInstance;

//   apiKey: "YOUR_API_KEY",
//   authDomain: "YOUR_AUTH_DOMAIN",
//   projectId: "YOUR_PROJECT_ID",
//   storageBucket: "YOUR_STORAGE_BUCKET",
//   messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
//   appId: "YOUR_APP_ID"
//   "type": "service_account",
//   "project_id": "gc-curtain",
//   "private_key_id": "37e816684c87da688d151e9512161990df345a0c",
//   "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCzQkK35hHkHWsW\nrRbY3Jp+AYtnkcIjAkhtrnoJXgTRFONx/XSeOT0QHJFwcXpe97uhbRm8VqbXRAB/\nyZBKUuftHQI68rGxr6aqgq6//7Y/vFTeFTz9govVICs3KvQVoicMLiZc3sRrDqom\nwHnY4kEV2EAaYOQVzgiH+2eTY6Aq6GNbmt6j7dh8i9XqW0NwBk0YdMnKK19gBjYX\nOcL7YV5fCiWpEJ7XMGybuIUTFmuOAdNSm8MF8XHtRin7wwd4cYdhLiUizxFkANcn\niOjec0P4r4nqee/u9jPrKz2Yx4Ywzu66l1yzKGqxe7MiAfgg9TsCIJ6q9DzStmLv\naFrsTPYNAgMBAAECggEADVCqrAZG5e7ZeYG55LneL+XlePf2t6r/vkXrgq6dJPqs\nOlddRjNyObQliXikYlF8em0kMD0vf2Xps5RBR4QI/i/dbouAb3ZgpuG2IUTZQLq4\ngxaIxTvhLx+Iljx2jPTSebEj4FobtOgN83rwkg+cTgcWG99+kbAQKimec/A+gXFJ\nnm07wBkCQ0TxXzE9ENyL1FVrnZ4JepdR2U8qhxzCj4zqPyon7r8aUKxq+aL628uw\n6BBqdezWxrJkwvVDM3sb68AZ/fJeEJLogF+InhC8R7vcvQgrxUEaI+7Aql0hJx2F\nSIocxa+FBLfmlGLyVsz480yNasYc1Z+gW+PsAakdAQKBgQDpmgMZrygi6YUgFhD8\n28MsQz4alf46ZnTJLF1hW29CHeYJ64AqlqHPR6cPQdE9OuErD48xEtSvhB4gGkuh\n02ABOvWl8kUm059OJDZcPPEeAgW8THPyGCOFfYZuMke+uDZ0Oahes3+b+mNB/L/S\naWAdnnLgtpHDEFd7eGOc+0GbsQKBgQDEclmZw4J7gI6QlvCmz39AwqME3kPo/buu\n729tSOWcjby6+UiPjPdQj6ox+cP/evXrKsn3N4OV1xwTsj2ljZkF5My0TSC9Lu+t\ncSADL6LXDmz8eqLfeSt7d+d18QcP0drt4RjIlF0l/9RTDMbygmY4FwfyKF3eUnBC\nXOuBRs9DHQKBgCUDUhpvtlxRw9YhqO9norUQsnZj7bQzJ634aZNTeX1wX1KTDeux\nklHVeJLiStT4z1STUozj/u8Qb/WGNRWe+Ec5oFJ64JoWTdeDxVk4DrxCdcYwFu71\nBCvSh8pODTAa4AXqXNMkfcOpGLEL6xjbuW73/Bu+0bmmjTXzDVWCOhMBAoGADMmM\nv4+UbMmffhX1MEaNd/+zcNuu+/mYP/jh/fEi0SAAywLzEDUS3DGd2IbzlSvB2j78\nypTYgeZws2+Ex8QB0/piwNHMccQeYeHdPZfaN7l+qqio9XcDt5PEg07fMM5uO9HN\nNTFDJvgSMB3CzYJjeP82yzKJebFQEWHPCqk7UJkCgYAG/qFKRvS4zKx+kHm2KZc4\nPhuX87Sg6fS0PmDJIMwl3UIgyfjKIi/BDIz3Jyx5tOyOpulY7hl892uTi8Olhxmb\nuvR0d9S3a1XiGEsBw0zmUZVR9OVH4jX98Hkc4Tgry4NA/PWFDKeZFrzTT1u+/np+\nG24weBG0SvfLPFiXLM2KdA==\n-----END PRIVATE KEY-----\n",
//   "client_email": "firebase-adminsdk-yu9gw@gc-curtain.iam.gserviceaccount.com",
//   "client_id": "116616833154442768317",
//   "auth_uri": "https://accounts.google.com/o/oauth2/auth",
//   "token_uri": "https://oauth2.googleapis.com/token",
//   "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
//   "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-yu9gw%40gc-curtain.iam.gserviceaccount.com",
//   "universe_domain": "googleapis.com"
