import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter, {history} from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { startSetExpenses } from "./actions/expenses";
import {login, logout} from "./actions/auth";
import "./firebaseapp/firebase";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import { firebase } from './firebaseapp/firebase';
import "firebase/compat/auth"
import "firebase/compat/database"
import "firebase/compat/firestore"
import "firebase/compat/functions"
import "firebase/compat/app-check"
import "firebase/compat/storage"

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));



firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('log in');
    store.dispatch(login(user.uid));
    store.dispatch(startSetExpenses()).then(() => {
      ReactDOM.render(jsx, document.getElementById('app'));
    });
  } else {
    console.log('log out');
    store.dispatch(logout());
    ReactDOM.render(jsx, document.getElementById('app'));
  }
});
