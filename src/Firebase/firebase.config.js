// firebase Initialization
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// FireBase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9yeopOdFvJX2BE8giJjYZd9VKrAvDui8",
  authDomain: "task-management-e36ae.firebaseapp.com",
  projectId: "task-management-e36ae",
  storageBucket: "task-management-e36ae.appspot.com",
  messagingSenderId: "46337640894",
  appId: "1:46337640894:web:0262df478d736785de11ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);