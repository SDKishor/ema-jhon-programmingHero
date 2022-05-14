// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiMAa2xKTHWaSl-SLYvIfcanld-JaBMcw",
  authDomain: "ema-jhon-programminghero.firebaseapp.com",
  projectId: "ema-jhon-programminghero",
  storageBucket: "ema-jhon-programminghero.appspot.com",
  messagingSenderId: "165399875113",
  appId: "1:165399875113:web:c84fe06afee4c25494d638",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export default auth;
