import { initializeApp } from "firebase/app";
import 'firebase/auth'

const firebaseConfig = {
   apiKey: process.env.REACT_APP_FIRBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIRBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIRBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIRBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIRBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIRBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIRBASE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
export const auth = app.auth;
export default app;