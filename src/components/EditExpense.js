import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { startEditExpense } from "../actions/expenses";
import { useNavigate } from "react-router-dom";
import { setRemoveExpense } from "../actions/expenses";
import Header from "./Header";

const EditExpense = (props) => {
  const { id } = useParams();
  const selectedExpense = props.expenses.find((expense) => expense.id === id);
  const navigate = useNavigate();
  return (
    <div>
      <Header />
      <div className="page-header">
          <div className="content-container">
            <h1 className="page-header__title">Edit Expense</h1>
          </div>
      </div>
      <div className="content-container">
      <ExpenseForm
        expense={selectedExpense}
        onSubmit={(expense) => {
          props.dispatch(startEditExpense(selectedExpense.id, expense));
          navigate("/");
          console.log("updated", expense);
        }}
      />
      <button
        className="button button--secondary"
        onClick={() => {
          console.log(selectedExpense.id);
          props.dispatch(setRemoveExpense({ id: selectedExpense.id }));
          navigate("/");
        }}
      >
        Remove
      </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  };
};

export default connect(mapStateToProps)(EditExpense);
