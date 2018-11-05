import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore";
import { firebaseReducer } from "react-redux-firebase";

import authReducer from "./auth_reducer";
import quoteReducer from "./quote_reducer";

const rootReducer = combineReducers({
  auth: authReducer,
  quote: quoteReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export default rootReducer;
