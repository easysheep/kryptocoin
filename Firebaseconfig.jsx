import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "crypautho.firebaseapp.com",
  projectId: "crypautho",
  storageBucket: "crypautho.appspot.com",
  messagingSenderId: "1000642384761",
  appId: import.meta.env.VITE_APP_ID,
  measurementId: "G-WLG60QZ3XV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
