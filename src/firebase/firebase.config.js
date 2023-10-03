// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCN7J71bSpuW_zu7nn0p2p2DaXz0rlJAMw",
  authDomain: "auth-project-c9baf.firebaseapp.com",
  projectId: "auth-project-c9baf",
  storageBucket: "auth-project-c9baf.appspot.com",
  messagingSenderId: "8093137100",
  appId: "1:8093137100:web:951b8f7a32d49ee53e2a69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;