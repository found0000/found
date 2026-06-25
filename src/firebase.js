import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDM_sVr2Oh2aRFPcVCFD5v3tMeE5gds6uU",
  authDomain: "found-7e6c7.firebaseapp.com",
  projectId: "found-7e6c7",
  storageBucket: "found-7e6c7.firebasestorage.app",
  messagingSenderId: "378569110224",
  appId: "1:378569110224:web:886105f9d7d52b4c6c64d5",
  measurementId: "G-5XV36E9536"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);