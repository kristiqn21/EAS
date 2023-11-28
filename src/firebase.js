// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl8HDaz-3STIZ5x0KpflD5bSM2K5kmcH8",
  authDomain: "eas-auth-7ec36.firebaseapp.com",
  projectId: "eas-auth-7ec36",
  storageBucket: "eas-auth-7ec36.appspot.com",
  messagingSenderId: "1085152622856",
  appId: "1:1085152622856:web:94cd065daeea4151a7d4bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);