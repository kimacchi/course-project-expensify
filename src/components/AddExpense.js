import React from "react";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startAddExpense } from "../actions/expenses";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const AddExpense = (props) => {
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <h1>Add Expense</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          props.dispatch(startAddExpense(expense));
          navigate("/");
        }}
      />
    </div>
  );
};

export default connect()(AddExpense);
