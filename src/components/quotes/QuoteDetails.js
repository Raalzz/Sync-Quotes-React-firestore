import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import moment from "moment";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const QuoteDetails = props => {
  const { quote, auth } = props;
  if (!auth.uid) return <Redirect to="/signin" />;
  if (quote) {
    return (
      <div className="container section">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{quote.title}</span>
            <p>{quote.content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>
              Posted by {quote.authorFirstName} {quote.authorLastName}
            </div>
            <div>{moment(quote.createdAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container center">
        <p>Loding Quote...</p>
      </div>
    );
  }
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const quotes = state.firestore.data.quotes;
  const quote = quotes ? quotes[id] : null;
  return {
    quote: quote,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "quotes" }])
)(QuoteDetails);
