import moment from "moment";

const filterDefault = {
  text: "",
  sortBy: "date",
  startDate: moment().startOf("month"),
  endDate: moment().endOf("month"),
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

export default filterReducer;
