// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYdaAk2Tut1RjJtmlAdLYU69BeALfpQ3I",
  authDomain: "todo-list-d8eac.firebaseapp.com",
  projectId: "todo-list-d8eac",
  storageBucket: "todo-list-d8eac.appspot.com",
  messagingSenderId: "683299832061",
  appId: "1:683299832061:web:0c067b4db49ce0e67c7e94",
  measurementId: "G-8RJXSBS9YX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);