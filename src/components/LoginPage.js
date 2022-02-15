import React from "react";
import { connect } from "react-redux";
import { startLogin } from "../actions/auth";
import { useNavigate } from "react-router-dom";
import { firebase } from '../firebaseapp/firebase';

export const LoginPage = ({ startLogin }) => {
  const navigate = useNavigate();
  return (
    <div className="box-layout">
      <div className="box-layout__box">
        <h1 className="box-layout__title">Expensify App</h1>
        <p>Bababoey</p>
        <button 
        className="button"
        onClick={()=>{
          startLogin();
          firebase.auth().onAuthStateChanged((user) => {
            if (user) {
              console.log('log in');
              navigate("/home");
            }
          });
        }}>Login with Google</button>
      </div>
      
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin()),
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
