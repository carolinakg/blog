// firebase-config.js

import {initializeApp} from 'firebase/app';
import {getFirestore, } from 'firebase/firestore';

// Utilize as configs do seu projeto do
const firebaseConfig = {
  apiKey: "AIzaSyDaSgMfxh8U6DGoIKIu3DN-rLRGQAENpZQ",
  authDomain: "blogproject-748c4.firebaseapp.com",
  projectId: "blogproject-748c4",
  storageBucket: "blogproject-748c4.appspot.com",
  messagingSenderId: "1077023662947",
  appId: "1:1077023662947:web:4e1e2e950d76bbb198e956"
};

initializeApp(firebaseConfig);

const db = getFirestore();

export { db };
