import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
import { useNavigate } from "react-router-dom";
import { firebase } from '../firebaseapp/firebase';

export const LoginPage = ({ startLogin }) => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={()=>{
        startLogin();
        firebase.auth().onAuthStateChanged((user) => {
          if (user) {
            console.log('log in');
            navigate("/home");
          }
        });
      }}>Login</button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
