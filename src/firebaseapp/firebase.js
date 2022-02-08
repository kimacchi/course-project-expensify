import { initializeApp } from "firebase/app";
import {
  getDatabase,
  ref,
  set,
  update,
  remove,
  get,
  onValue,
  DataSnapshot,
  off,
  unsubscribe,
  push,
  onChildRemoved,
} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCbRdslm5CyxV3UlTsg0Yx3Oep_mGQlu-o",

  authDomain: "expensify-8bb03.firebaseapp.com",

  databaseURL:
    "https://expensify-8bb03-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "expensify-8bb03",

  storageBucket: "expensify-8bb03.appspot.com",

  messagingSenderId: "472916991551",

  appId: "1:472916991551:web:2bec4272fbf98316d7228a",
};

const app = initializeApp(firebaseConfig);

const db = getDatabase();

export { initializeApp, db as default };

// onChildRemoved(ref(db, "expenses"), (snapshot) => {
//   console.log(snapshot.key);
// });

// onValue(ref(db, "expenses"), (snapshot) => {
//   const expenses = [];
//   snapshot.forEach((ele) => {
//     expenses.push({
//       id: ele.key,
//       ...ele.val(),
//     });
//   });
//   console.log(expenses);
// });

// push(ref(db, "expenses"), {
//   description: "water bill",
//   note: "",
//   amount: 5000,
//   createdAt: 1000,
// });
// push(ref(db, "expenses"), {
//   description: "gas bill",
//   note: "gas bill",
//   amount: 3000,
//   createdAt: 1500,
// });
// push(ref(db, "expenses"), {
//   description: "coffee",
//   note: "starbucks",
//   amount: 700,
//   createdAt: 2000,
// });

// onValue(
//   ref(db),
//   (snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   },
//   (err) => {
//     console.log("error", err);
//   },
//   { onlyOnce: false }
// );

// set(ref(db), {
//   name: "Ahmet",
//   age: 18,
//   isSingle: true,
//   stressLevel: 6,
//   job: {
//     title: "Software Developer",
//     company: "Google",
//   },
//   location: {
//     city: "Ankara",
//     country: "Turkey",
//   },
// }).then(
//   () => {
//     console.log("data is saved");
//   },
//   (e) => {
//     console.log("this failed", e);
//   }
// );

// update(ref(db), {
//   isSingle: null,
//   stressLevel: 9,
//   "job/company": "Amazon",
//   location: { city: "Seattle", country: "United States" },
// });

// onValue(
//   ref(db),
//   (snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   },
//   (err) => {
//     console.log("error", err);
//   },
//   {onlyOnce: true}
// );
