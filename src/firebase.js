import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyAJN_PwaeouZ3GT0nfTH6j3Hw4fybySZF8",
  authDomain: "web-festivali-2024.firebaseapp.com",
  databaseURL: "https://web-festivali-2024-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "web-festivali-2024",
  storageBucket: "web-festivali-2024.appspot.com",
  messagingSenderId: "590732872236",
  appId: "1:590732872236:web:9bd9d7f0ae260cb641df89",
  measurementId: "G-NBBWXNB2TX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db, app };