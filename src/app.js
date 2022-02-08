import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import { setTextFilter } from "./actions/filters";
import getVisibleExpenses from "./selectors/expenses";
import "./firebaseapp/firebase";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "../src/firebaseapp/firebase";
import { push } from "firebase/database";
import { v4 as uuid4 } from "uuid";
// import db from "../firebaseapp/firebase";
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
  onChildRemoved,
} from "firebase/database";
import { onAuthStateChanged } from "firebase/auth";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById("app"));
});

onAuthStateChanged((user) => {
  if (user) {
    console.log("log in");
  } else {
    console.log("log out");
  }
});
