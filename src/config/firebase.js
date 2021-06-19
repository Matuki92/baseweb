import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB27LOx_5TKh6hl_lPQVBQUiYCg1pMUVtA',
  authDomain: 'base-web-a4308.firebaseapp.com',
  projectId: 'base-web-a4308',
  storageBucket: 'base-web-a4308.appspot.com',
  messagingSenderId: '462168277531',
  appId: '1:462168277531:web:6da8ba2229b895789deebe',
};

firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();

// collection references
const usersCollection = db.collection('users');

// export utils/refs
export {
  db,
  auth,
  usersCollection,
};
