// firebase.ts (or firebase/config.ts depending on your structure)

import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBYZT0EfeqU2aZxOD5znd5TNDJa7a3MChw",
  authDomain: "prepwise-f2f59.firebaseapp.com",
  projectId: "prepwise-f2f59",
  storageBucket: "prepwise-f2f59.appspot.com", // ← small correction here
  messagingSenderId: "983587161136",
  appId: "1:983587161136:web:2bf35395f331379b6e19f5",
  measurementId: "G-EG54404Y9Q",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Export Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
