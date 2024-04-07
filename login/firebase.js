// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.10.0/firebase-firebase/firestore/lite.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIOUN0Lw4cLZ3O_gi0BcDZOxTSlNtng74",
  authDomain: "dasmachtnichts-3c256.firebaseapp.com",
  projectId: "dasmachtnichts-3c256",
  storageBucket: "dasmachtnichts-3c256.appspot.com",
  messagingSenderId: "846241821058",
  appId: "1:846241821058:web:242d8b073d41ad2b5e1f9b",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
