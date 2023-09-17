// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4xcP4ZrVGoRGZyVbL6x2fhxhO6iPRlr4",
  authDomain: "netflixgpt-89f27.firebaseapp.com",
  projectId: "netflixgpt-89f27",
  storageBucket: "netflixgpt-89f27.appspot.com",
  messagingSenderId: "1069022030561",
  appId: "1:1069022030561:web:70fb812b6489dce8c925a0",
  measurementId: "G-SPS76X85FX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth= getAuth()