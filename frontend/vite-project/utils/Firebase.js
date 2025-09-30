// Import the functions you need from the SDKs you need
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY 
,
  authDomain: "loginone2you-446b9.firebaseapp.com",
  projectId: "loginone2you-446b9",
  storageBucket: "loginone2you-446b9.firebasestorage.app",
  messagingSenderId: "994366520161",
  appId: "1:994366520161:web:fb1b677b7308419a4a2320"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export {auth , provider}