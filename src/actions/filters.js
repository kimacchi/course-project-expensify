export const setTextFilter = (text = "") => {
  return {
    type: "FILTER_CHANGE",
    text,
  };
};

export const sortByAmount = () => {
  return {
    type: "SORT",
    sortBy: { sortBy: "amount" },
  };
};

export const sortByDate = () => {
  return {
    type: "SORT",
    sortBy: { sortBy: "date" },
  };
};

export const setStartDate = (date = undefined) => {
  return {
    type: "START_DATE",
    date: { startDate: date },
  };
};

export const setEndDate = (date = undefined) => {
  return {
    type: "END_DATE",
    date: { endDate: date },
  };
};
