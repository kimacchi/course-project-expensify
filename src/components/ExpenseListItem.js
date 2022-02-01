import React from "react";

import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const ExpenseListItem = ({ description, amount, createdAt, id, dispatch }) => {
  const navigate = useNavigate();
  return (
    <div>
      <h3>{description}</h3>
      <p>
        {amount}-{createdAt}
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
