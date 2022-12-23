// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkqkfp7ERSR8IEqmLWU341GpZYuJarc68",
  authDomain: "meleefighter-be37a.firebaseapp.com",
  projectId: "meleefighter-be37a",
  storageBucket: "meleefighter-be37a.appspot.com",
  messagingSenderId: "227757624831",
  appId: "1:227757624831:web:cc0aef97d5c7f4fd0aabca",
  measurementId: "G-C5L50K7RMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);