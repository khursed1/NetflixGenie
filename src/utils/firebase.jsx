// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Keys } from "../constant/Keys";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:Keys.aK,
  authDomain: Keys.aD,
  projectId: Keys.pI,
  storageBucket: Keys.sB,
  messagingSenderId:Keys.mSI,
  appId:Keys.aI,
  measurementId:Keys.mI
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
