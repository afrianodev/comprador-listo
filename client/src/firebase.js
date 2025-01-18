// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "comprador-listo.firebaseapp.com",
  projectId: "comprador-listo",
  storageBucket: "comprador-listo.firebasestorage.app",
  messagingSenderId: "430009063641",
  appId: "1:430009063641:web:c06b96afa043bdc75806c8",
  measurementId: "G-NXPMZB01Y1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);