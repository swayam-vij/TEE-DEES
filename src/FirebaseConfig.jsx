// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FBApiKey,
  authDomain: "ecommerce-5117a.firebaseapp.com",
  projectId: "ecommerce-5117a",
  storageBucket: "ecommerce-5117a.appspot.com",
  messagingSenderId: import.meta.env.VITE_FBMessageId,
  appId: import.meta.env.VITE_AppId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
