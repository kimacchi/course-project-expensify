import React from "react";
import getVisibleExpenses from "../selectors/expenses";
import total from "../selectors/expenses-total";
import { connect } from "react-redux";
import numeral from "numeral";

const ExpensesSummary = (props) => {
  const size = props.expenses.length;
  const all = total(props.expenses);
  return (
    <div>
      <p>
        {`Viewing ${size} expense${size > 1 ? "s" : ""} totalling ${numeral(
          all / 100
        ).format("$0,0.00")}`}
      </p>
    </div>
  );
};

const ConnectedExpensesSummary = (state) => {
  return {
    expenses: state.expenses,
  };
};

export default connect(ConnectedExpensesSummary)(ExpensesSummary);
