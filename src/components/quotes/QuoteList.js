import React from "react";
import { Link } from "react-router-dom";

import QuoteSummary from "./QuoteSummary";

const QuoteList = ({ quotes }) => {
  return (
    <div className="section">
      {quotes &&
        quotes.map(quote => {
          return (
            <Link key={quote.id} to={"/quote/" + quote.id}>
              <QuoteSummary quote={quote} />
            </Link>
          );
        })}
    </div>
  );
};

export default QuoteList;
