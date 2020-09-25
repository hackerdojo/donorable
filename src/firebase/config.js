import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCnHMcqM1Vl6Brby_5RxPozmmy2VfueTPc',
  authDomain: 'donorable-7abef.firebaseapp.com',
  databaseURL: 'https://donorable-7abef.firebaseio.com',
  projectId: 'donorable-7abef',
  storageBucket: 'donorable-7abef.appspot.com',
  messagingSenderId: '785709551336',
  appId: '1:785709551336:web:196c328b1736030d55035d',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };