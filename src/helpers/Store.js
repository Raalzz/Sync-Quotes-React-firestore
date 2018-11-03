import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import { reduxFirestore } from "redux-firestore";

import firebase from "../config/FirebaseConfig";
import rootReducer from "../reducers/";

const createStoreWithFirebase = compose(
  applyMiddleware(thunk.withExtraArgument(getFirebase)),
  reactReduxFirebase(firebase, {
    userProfile: "wheelsbox_admin",
    useFirestoreForProfile: true
  }),
  reduxFirestore(firebase)
)(createStore);

const initialState = {};

const store = createStoreWithFirebase(rootReducer, initialState);

export default store;
