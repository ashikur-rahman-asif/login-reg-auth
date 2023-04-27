// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEoZeWkPNLOX93fY_EWRW6VonSKe32BNU",
  authDomain: "email-password-auth-a51fc.firebaseapp.com",
  projectId: "email-password-auth-a51fc",
  storageBucket: "email-password-auth-a51fc.appspot.com",
  messagingSenderId: "967560886949",
  appId: "1:967560886949:web:f14e13ea4364dfbb42eb4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;