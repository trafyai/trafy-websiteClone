// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from 'firebase/database';

import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCqL7lnooyjmNGAOB5nc4yZcb6FKu8e-2A",
  authDomain: "trafyai-loginsignup.firebaseapp.com",
  projectId: "trafyai-loginsignup",
  storageBucket: "trafyai-loginsignup.appspot.com",
  messagingSenderId: "344792634329",
  appId: "1:344792634329:web:d343ac2461dd2a731dffc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const analytics = getAnalytics(app);

export { database };


export const auth = getAuth(app);