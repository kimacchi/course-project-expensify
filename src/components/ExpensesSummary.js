import React from "react";
import getVisibleExpenses from "../selectors/expenses";
import total from "../selectors/expenses-total";
import { connect } from "react-redux";
import numeral from "numeral";
import { NavLink } from "react-router-dom";

const ExpensesSummary = (props) => {
  const size = props.expenses.length;
  const all = total(props.expenses);
  return (
    <div className="page-header">
      <div className="content-container">
      <h1 className="page-header__title">
        {`Viewing ${size} expense${size > 1 ? "s" : ""} totalling ${numeral(
          all / 100
        ).format("$0,0.00")}`}
      </h1>
      <div className="page-header__actions">
          <NavLink className="button" to="/create">Add Expense</NavLink>
        </div>
      </div>
    </div>
  );
};

const ConnectedExpensesSummary = (state) => {
  return {
    expenses: state.expenses,
  };
};

export default connect(ConnectedExpensesSummary)(ExpensesSummary);
