// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDk_GIBHb_pH59WJT78d7YfO8pboOzTquY",
    authDomain: "dragon-news-authenticati-33468.firebaseapp.com",
    projectId: "dragon-news-authenticati-33468",
    storageBucket: "dragon-news-authenticati-33468.firebasestorage.app",
    messagingSenderId: "228476307192",
    appId: "1:228476307192:web:e8ea95163b16f163491d0d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);