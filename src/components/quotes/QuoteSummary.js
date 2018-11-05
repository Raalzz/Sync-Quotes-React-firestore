import React from "react";
import moment from "moment";

const QuoteSummary = ({ quote }) => {
  return (
    <div className="card z-depth-0">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title">{quote.title}</span>
        <p>
          Posted By {quote.authorFirstName} {quote.authorLastName}
        </p>
        <p className="grey-text">
          {moment(quote.createdAt.toDate()).calendar()}
        </p>
      </div>
    </div>
  );
};

export default QuoteSummary;
