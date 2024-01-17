// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBuR6tGovYuvKiNWVWf31Cn-LLnFLG0kVc",
    authDomain: "my-app-bff44.firebaseapp.com",
    projectId: "my-app-bff44",
    storageBucket: "my-app-bff44.appspot.com",
    messagingSenderId: "226972350455",
    appId: "1:226972350455:web:420f8d75993b1166c860f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;