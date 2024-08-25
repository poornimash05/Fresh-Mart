// src/firebase.config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAmmnmZ9SCzliciB3uK8Apm2zhRFrW2s4E",
  authDomain: "store-fruits.firebaseapp.com",
  projectId: "store-fruits",
  storageBucket: "store-fruits.appspot.com",
  messagingSenderId: "207256850738",
  appId: "1:207256850738:web:01880ec7824de8910a472b",
  //measurementId: "G-BVE5ZQTB2M"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth }; 