// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZbsdco0AoJinRKIjxKFEQ4c3p3mIR2V4",
    authDomain: "roomsofpoland-b7f2b.firebaseapp.com",
    projectId: "roomsofpoland-b7f2b",
    storageBucket: "roomsofpoland-b7f2b.appspot.com",
    messagingSenderId: "871550935354",
    appId: "1:871550935354:web:3d60149fcf422c0578f003",
    measurementId: "G-G3452X079G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);