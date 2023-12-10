// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getDatabase} from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDZ__3sYiYQeYsBqxcoPC8OLPtzut7SKvU",
    authDomain: "pizza-e1c7c.firebaseapp.com",
    databaseURL: "https://pizza-e1c7c-default-rtdb.firebaseio.com",
    projectId: "pizza-e1c7c",
    storageBucket: "pizza-e1c7c.appspot.com",
    messagingSenderId: "841867769070",
    appId: "1:841867769070:web:0f27dd2ac64103c863afff",
    measurementId: "G-53DTHYY4V1",
    databaseURL:"https://pizza-e1c7c-default-rtdb.firebaseio.com"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const Auth = getAuth(app)
export const firebaseDatabase =  getDatabase(app)

