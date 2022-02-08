import { push } from "firebase/database";
import { v4 as uuid4 } from "uuid";
import db from "../firebaseapp/firebase";
import {
  getDatabase,
  ref,
  set,
  update,
  remove,
  get,
  onValue,
  DataSnapshot,
  off,
  unsubscribe,
  onChildRemoved,
} from "firebase/database";

export const addExpense = (expense) => ({
  type: "ADD_EXPENSE",
  expense,
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = "",
      note = "",
      amount = 0,
      createdAt = 0,
    } = expenseData;
    const expense = { description, note, amount, createdAt };
    push(ref(db, "expenses"), expense).then((ref) => {
      dispatch(
        addExpense({
          id: ref.key,
          ...expense,
        })
      );
    });
  };
};

export const removeExpense = (state) => {
  return {
    type: "REMOVE",
    id: state.id,
  };
};

export const setRemoveExpense = ({ id } = {}) => {
  return (dispatch) => {
    return remove(ref(db, `expenses/${id}`)).then(() => {
      dispatch(removeExpense({ id }));
    });
  };
};

export const editExpense = (id, updates) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    updates,
  };
};

export const startEditExpense = (id, updates) => {
  return (dispatch) => {
    return update(ref(db, `expenses/${id}`), {
      ...updates,
    }).then(() => {
      dispatch(editExpense(id, updates));
    });
  };
};

export const setExpenses = (expenses) => ({
  type: "SET_EXPENSES",
  expenses,
});

export const startSetExpenses = () => {
  return (dispatch) => {
    onValue(ref(db, "expenses"), (snapshot) => {
      const expenses = [];
      snapshot.forEach((ele) => {
        expenses.push({
          id: ele.key,
          ...ele.val(),
        });
      });

      dispatch(setExpenses(expenses));
    });
  };
};
