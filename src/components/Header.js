import React from "react";
import { NavLink } from "react-router-dom";
import {connect} from "react-redux";
import { startLogout } from "../actions/auth";
import { useNavigate } from "react-router-dom";



export const Header = ({startLogout, uid}) => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="content-container">
      <div className="header__content">
        <NavLink className="header__title" to="/home">
          <h1>Expensify</h1>
        </NavLink>
        <button className="button button--link" onClick={()=>{
        startLogout();
        navigate("/");
      }}>Logout</button>
      </div>
    </div>

    </header>
  );
}

const mapDispatchToProps =(dispatch)=>({
  startLogout: ()=>dispatch(startLogout()),
});


export default connect(undefined, mapDispatchToProps)(Header);
