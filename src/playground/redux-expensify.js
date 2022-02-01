import { createStore, combineReducers } from "redux";
import { v4 as uuid4 } from "uuid";
//add expense

const addExpense = ({
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

const removeExpense = (state) => {
  return {
    type: "REMOVE",
    id: state.id,
  };
};

const editExpense = (id, updates) => {
  return {
    type: "EDIT_EXPENSE",
    id,
    updates,
  };
};

const setTextFilter = (text = "") => {
  return {
    type: "FILTER_CHANGE",
    text,
  };
};

const sortByAmount = () => {
  return {
    type: "SORT",
    sortBy: { sortBy: "amount" },
  };
};

const sortByDate = () => {
  return {
    type: "SORT",
    sortBy: { sortBy: "date" },
  };
};

const setStartDate = (date = undefined) => {
  return {
    type: "START_DATE",
    date: { startDate: date },
  };
};

const setEndDate = (date = undefined) => {
  return {
    type: "END_DATE",
    date: { endDate: date },
  };
};

//expenses reducer
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return [...state, action.expense];
    case "REMOVE":
      return state.filter((element) => {
        return element.id !== action.id;
      });
    case "EDIT_EXPENSE":
      return state.map((expense) => {
        if (expense.id === action.id) {
          return { ...expense, ...action.updates };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

//filters reducer

const filterDefault = {
  text: "",
  sortBy: "date",
  startDate: undefined,
  endDate: undefined,
};

const filterReducer = (state = filterDefault, action) => {
  switch (action.type) {
    case "FILTER_CHANGE":
      return { ...state, text: action.text };
    case "SORT":
      return { ...state, ...action.sortBy };
    case "START_DATE":
      return {
        ...state,
        ...action.date,
      };
    case "END_DATE":
      return {
        ...state,
        ...action.date,
      };
    default:
      return state;
  }
};

//get visible expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter((expense) => {
      let startDateMatch =
        typeof startDate !== "number" || expense.createdAt >= startDate;
      let endDateMatch =
        typeof endDate !== "number" || expense.createdAt <= endDate;
      const re = new RegExp(text, "gi");
      let textMatch = re.test(expense.description);

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else {
        return a.amount <= b.amount ? 1 : -1;
      }
    });
};

//store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filterReducer,
  })
);

store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: "rent", amount: 500, createdAt: -1000 })
);

const expenseTwo = store.dispatch(
  addExpense({ description: "coffee", amount: 300, createdAt: 1000 })
);

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));

// store.dispatch(setTextFilter("rent"));
// store.dispatch(setTextFilter());

store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(125));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1250));

const demoState = {
  expenses: [
    {
      id: "jkhkjsdbnfkjh",
      description: "January Rent",
      note: "this was the final payment for that address",
      amount: 54500,
      createdAt: 0,
    },
  ],
  filters: {
    text: "rent",
    sortBy: "amount", //date or amount
    startDate: undefined,
    endDate: undefined,
  },
};

const user = {
  name: "jen",
  age: 24,
};
