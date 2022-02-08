import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, update, remove, once } from "firebase/database";

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

// ref(db)
//   .once("value")
//   .then((snapshot) => {
//     snapshot.val();
//   })
//   .catch((e) => {
//     console.log("error", e);
//   });
