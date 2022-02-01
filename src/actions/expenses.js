import { v4 as uuid4 } from "uuid";

export const addExpense = ({
  description = "",
  note = "",
  amount = 0,
  createdAt = 0,
} = {}) => ({
  type: "ADD_EXPENSE",
  expense: {
    id: uuid4(),
    description,
    note,
    amount,
    createdAt,
  },
});

export const removeExpense = (state) => {
  return {
    type: "REMOVE",
    id: state.id,
  };
};

export const editExpense = (id, updates) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    updates,
  };
};
