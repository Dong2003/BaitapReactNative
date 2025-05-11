// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBLAWHMjUsRLbRXaD1zNZGvCP_FbRUuvmQ",
  authDomain: "btreacnative.firebaseapp.com",
  projectId: "btreacnative",
  storageBucket: "btreacnative.firebasestorage.app",
  messagingSenderId: "452593901689",
  appId: "1:452593901689:web:495561ff292bb3c2ebf4a8",
  measurementId: "G-5ZD2VS3REJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export { db };