// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBQenlTg0HdLlOI2Lfhb9UNrWF4rfp63JM",
  authDomain: "geomed-843f1.firebaseapp.com",
  projectId: "geomed-843f1",
  storageBucket: "geomed-843f1.firebasestorage.app",
  messagingSenderId: "527956024109",
  appId: "1:527956024109:web:2f603e97c8003eeb9511a4",
  measurementId: "G-TSLTCGRRL7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const bb = getFirestore(app)
