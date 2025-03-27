// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVOhcDIdJFCPLGr3JWxxWMVFcP4mqW93E",
  authDomain: "todo-app-50981.firebaseapp.com",
  projectId: "todo-app-50981",
  storageBucket: "todo-app-50981.firebasestorage.app",
  messagingSenderId: "1075234386366",
  appId: "1:1075234386366:web:1d88a93e458d2ff36309ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);