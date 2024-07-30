// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchat-36fa3.firebaseapp.com",
  projectId: "reactchat-36fa3",
  storageBucket: "reactchat-36fa3.appspot.com",
  messagingSenderId: "249750068315",
  appId: "1:249750068315:web:cde12832d964922578337e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()

