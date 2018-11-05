export const createQuote = quote => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("quotes")
      .add({
        ...quote,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_QUOTE", quote });
      })
      .catch(err => {
        dispatch({ type: "CREATE_QUOTE_ERROR", err });
      });
  };
};
