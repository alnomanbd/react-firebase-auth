// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD0CIZUY5KoSWKap-wtfgxlyM0Xgjraj60",
  authDomain: "react-firebase-auth-eedf1.firebaseapp.com",
  projectId: "react-firebase-auth-eedf1",
  storageBucket: "react-firebase-auth-eedf1.firebasestorage.app",
  messagingSenderId: "789016741244",
  appId: "1:789016741244:web:16255fb353cb5d6077d0f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)