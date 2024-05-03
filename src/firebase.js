import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAGdREF3eDJRk-mQ5YgOTgNFM3LvYGk51I",
    authDomain: "blog-9479f.firebaseapp.com",
    projectId: "blog-9479f",
    storageBucket: "blog-9479f.appspot.com",
    messagingSenderId: "13410658991",
    appId: "1:13410658991:web:5282a04b42f723a83cc25a",
    measurementId: "G-2NFW55Z4LN"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();