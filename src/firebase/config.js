
// using Web Version 9 of firebase SDK

import {initializeApp} from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  connectAuthEmulator
} from 'firebase/auth';

import {
  getFirestore,
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  deleteDoc,
  updateDoc,
  connectFirestoreEmulator
} from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBcyIGQ5Bs9tVpLBqzoldYLw4oV_G_zFAQ",
  authDomain: "donorable-372023.firebaseapp.com",
  projectId: "donorable-372023",
  storageBucket: "donorable-372023.appspot.com",
  messagingSenderId: "227877002530",
  appId: "1:227877002530:web:5a0bdebf529c47a89c997b",
  measurementId: "G-8BWPR5ED9X"

  /* Pre-covid.

  apiKey: 'AIzaSyCnHMcqM1Vl6Brby_5RxPozmmy2VfueTPc',
  authDomain: 'donorable-7abef.firebaseapp.com',
  databaseURL: 'https://donorable-7abef.firebaseio.com',
  projectId: 'donorable-7abef',
  storageBucket: 'donorable-7abef.appspot.com',
  messagingSenderId: '785709551336',
  appId: '1:785709551336:web:196c328b1736030d55035d',

  */

};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

//connectAuthEmulator(auth, "http://localhost:9099");
//connectFirestoreEmulator(db, 'localhost', 8080);


export default {
  app,
  db,
  collection,
  getDocs,
  getDoc,
  setDoc,
  deleteDoc,
  updateDoc,
  doc,
  auth,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  createUserWithEmailAndPassword,
  onAuthStateChanged
};




