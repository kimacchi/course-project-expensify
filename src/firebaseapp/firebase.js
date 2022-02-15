// import * as firebase from 'firebase/compat';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/database"
import "firebase/compat/firestore"
import "firebase/compat/functions"
import "firebase/compat/app-check"
import "firebase/compat/storage"


const config = {
  apiKey: "AIzaSyCbRdslm5CyxV3UlTsg0Yx3Oep_mGQlu-o",

  authDomain: "expensify-8bb03.firebaseapp.com",

  databaseURL:
    "https://expensify-8bb03-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "expensify-8bb03",

  storageBucket: "expensify-8bb03.appspot.com",

  messagingSenderId: "472916991551",

  appId: "1:472916991551:web:2bec4272fbf98316d7228a",
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };


// import { initializeApp } from "firebase/app";
// import {
//   getDatabase,
//   ref,
//   set,
//   update,
//   remove,
//   get,
//   onValue,
//   DataSnapshot,
//   off,
//   unsubscribe,
//   push,
//   onChildRemoved,
// } from "firebase/database";
// import { GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyCbRdslm5CyxV3UlTsg0Yx3Oep_mGQlu-o",

//   authDomain: "expensify-8bb03.firebaseapp.com",

//   databaseURL:
//     "https://expensify-8bb03-default-rtdb.europe-west1.firebasedatabase.app",

//   projectId: "expensify-8bb03",

//   storageBucket: "expensify-8bb03.appspot.com",

//   messagingSenderId: "472916991551",

//   appId: "1:472916991551:web:2bec4272fbf98316d7228a",
// };

// const app = initializeApp(firebaseConfig);

// const db = getDatabase();

// const googleProvider = new GoogleAuthProvider();

// export { initializeApp, googleProvider, db as default };
