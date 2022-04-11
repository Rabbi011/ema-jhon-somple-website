// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZqjUeCnX2Oy5elwyklgml1lt_t6np0P4",
  authDomain: "ema-john-simple-d204d.firebaseapp.com",
  projectId: "ema-john-simple-d204d",
  storageBucket: "ema-john-simple-d204d.appspot.com",
  messagingSenderId: "354452606297",
  appId: "1:354452606297:web:afb3ab2e1a5aa5286a5048"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;