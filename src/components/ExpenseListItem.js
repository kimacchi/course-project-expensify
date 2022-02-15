import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { Navigate } from "react-router-dom";
import numeral from "numeral";

const ExpenseListItem = ({ description, amount, createdAt, id }) => {
  return (
    <NavLink className="list-item" to={`/edit/${id}`}>
    <div>
      <h3 className="list-item__title">{description}</h3>
      <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
    </div>
    <h3 className="list-item__data">{numeral(amount / 100).format('$0,0.00')}</h3>
  </NavLink>
  );
};

export default connect()(ExpenseListItem);
// export default ExpenseListItem;
