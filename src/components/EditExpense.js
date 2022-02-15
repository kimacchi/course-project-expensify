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
      <ExpenseForm
        expense={selectedExpense}
        onSubmit={(expense) => {
          props.dispatch(startEditExpense(selectedExpense.id, expense));
          navigate("/");
          console.log("updated", expense);
        }}
      />
      <button
        onClick={() => {
          console.log(selectedExpense.id);
          props.dispatch(setRemoveExpense({ id: selectedExpense.id }));
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
