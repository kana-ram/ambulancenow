// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // ✅ Add this line

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdcQQZYGFc4Dr7s9QNv_AHBGs5kv0m_Dk",
  authDomain: "ambulance-now-b9d89.firebaseapp.com",
  projectId: "ambulance-now-b9d89",
  storageBucket: "ambulance-now-b9d89.firebasestorage.app",
  messagingSenderId: "687010510815",
  appId: "1:687010510815:web:fdad665372468a2272766a",
  measurementId: "G-XSVYHJZ36N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // ✅ Firestore instance

// ✅ Export db as named export
export { db };
