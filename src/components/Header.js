import React from "react";
import { NavLink } from "react-router-dom";
import {connect} from "react-redux";
import { startLogout } from "../actions/auth";
import { useNavigate } from "react-router-dom";



export const Header = ({startLogout}) => {
  const navigate = useNavigate();
  return (
    <header>
      <h1>Expensify</h1>
      <NavLink
        to="/home"
        className={({ isActive }) => {
          return isActive ? "is-active" : undefined;
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/create"
        className={({ isActive }) => {
          return isActive ? "is-active" : undefined;
        }}
      >
        Create Expense
      </NavLink>
      <button onClick={()=>{
        startLogout();
        navigate("/");
      }}>Logout</button>
    </header>
  );
}

const mapDispatchToProps =(dispatch)=>({
  startLogout: ()=>dispatch(startLogout())
});


export default connect(undefined, mapDispatchToProps)(Header);
