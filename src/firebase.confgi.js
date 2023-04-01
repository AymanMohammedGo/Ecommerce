import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyALEeC3rXefDj4nr9N-jomzoXQK3Nrb7ss",
  authDomain: "store-1ae3a.firebaseapp.com",
  projectId: "store-1ae3a",
  storageBucket: "store-1ae3a.appspot.com",
  messagingSenderId: "337730184626",
  appId: "1:337730184626:web:a46910a09e446fa776f0ab",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
