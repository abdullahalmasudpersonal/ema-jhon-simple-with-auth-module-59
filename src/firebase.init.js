// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTko7tEHKztRyxGeMsM4b4HMQ7CVSJV4U",
  authDomain: "ema-john-simple-dfefd.firebaseapp.com",
  projectId: "ema-john-simple-dfefd",
  storageBucket: "ema-john-simple-dfefd.appspot.com",
  messagingSenderId: "308626682350",
  appId: "1:308626682350:web:0842e92c3244f46cc09eff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth =getAuth (app);

export default auth;