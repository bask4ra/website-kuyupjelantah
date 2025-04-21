import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase config Anda
const firebaseConfig = {
  apiKey: "AIzaSyCy99j62u1bpAuiegiZAIC1E7onLdgy9Tc",
  authDomain: "kuyup-jelantah.firebaseapp.com",
  projectId: "kuyup-jelantah",
  storageBucket: "kuyup-jelantah.appspot.com",
  messagingSenderId: "418883218460",
  appId: "1:418883218460:web:40def3119f1dfaed61c3d9",
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
