import React from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import ExpenseForm from "./ExpenseForm";
import { editExpense } from "../actions/expenses";
import { useNavigate } from "react-router-dom";
import { removeExpense } from "../actions/expenses";

const EditExpense = (props) => {
  const { id } = useParams();
  const selectedExpense = props.expenses.find((expense) => expense.id === id);
  const navigate = useNavigate();
  return (
    <div>
      <ExpenseForm
        expense={selectedExpense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(selectedExpense.id, expense));
          navigate("/");
          console.log("updated", expense);
        }}
      />
      <button
        onClick={() => {
          props.dispatch(removeExpense({ id: selectedExpense.id }));
          navigate("/");
        }}
      >
        Remove
      </button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses,
  };
};

export default connect(mapStateToProps)(EditExpense);
