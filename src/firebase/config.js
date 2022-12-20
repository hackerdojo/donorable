
/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBcyIGQ5Bs9tVpLBqzoldYLw4oV_G_zFAQ",
  authDomain: "donorable-372023.firebaseapp.com",
  projectId: "donorable-372023",
  storageBucket: "donorable-372023.appspot.com",
  messagingSenderId: "227877002530",
  appId: "1:227877002530:web:5a0bdebf529c47a89c997b",
  measurementId: "G-8BWPR5ED9X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
*/


import * as firebase from 'firebase';

import '@firebase/auth';
import '@firebase/firestore';

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

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };




