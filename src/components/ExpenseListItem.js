import React from "react";
import moment from "moment";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import numeral from "numeral";

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>{description}</h3>
      <p>
        {numeral(amount / 100).format("$0,0.00")} -{" "}
        {moment(createdAt).format("MMMM Do, YYYY")}
      </p>
      <button
        onClick={() => {
          navigate(`/edit/${id}`);
        }}
      >
        Edit
      </button>
    </div>
  );
};

export default connect()(ExpenseListItem);
// export default ExpenseListItem;
