// Import Firebase and Firestore using named imports
import { initializeApp } from "firebase/app";
import { getFirestore, serverTimestamp } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCgQbB14a4IBRqf5w79qtwuE4htLzvHfXw",
  authDomain: "linkedin-3b1f0.firebaseapp.com",
  projectId: "linkedin-3b1f0",
  storageBucket: "linkedin-3b1f0.appspot.com", // Ensure correct URL
  messagingSenderId: "1085416460619",
  appId: "1:1085416460619:web:eb6beee51d4f33cee958ce",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(firebaseApp);

const auth = firebaseApp.auth();

// Export Firestore and serverTimestamp for use in other parts of the app
export { db, serverTimestamp, auth };
