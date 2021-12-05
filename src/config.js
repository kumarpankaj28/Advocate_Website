
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYVweDkLsvh2vor0A6DAB6-MahXHGktv8",
  authDomain: "lawyer-28d12.firebaseapp.com",
  projectId: "lawyer-28d12",
  storageBucket: "lawyer-28d12.appspot.com",
  messagingSenderId: "939222523248",
  appId: "1:939222523248:web:e32e8b33a237dcc48343b5",
  measurementId: "G-4H0Y7P1SKX"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);


const storage = getStorage(firebase);
const db = getFirestore(firebase);

export {firebase,storage, db};