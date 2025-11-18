// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyALFe0Gc1uco_iNIsGlTF6b-Z-tKTNXsSw",
  authDomain: "dine-time-b7905.firebaseapp.com",
  projectId: "dine-time-b7905",
  storageBucket: "dine-time-b7905.firebasestorage.app",
  messagingSenderId: "1008833596221",
  appId: "1:1008833596221:web:49253a15253feea86e5354",
  measurementId: "G-9SPJQS06C8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
