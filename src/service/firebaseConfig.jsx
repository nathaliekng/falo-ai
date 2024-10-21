// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEVDLrHETyLX3JDhHXel53hR9x32yiCvQ",
  authDomain: "travelai-b0377.firebaseapp.com",
  projectId: "travelai-b0377",
  storageBucket: "travelai-b0377.appspot.com",
  messagingSenderId: "243810664483",
  appId: "1:243810664483:web:704077f10e864fe580b196",
  measurementId: "G-R8MG4WM5Q9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)
//const analytics = getAnalytics(app);