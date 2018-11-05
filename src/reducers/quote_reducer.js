const quoteReducer = (state = {}, action) => {
  switch (action.type) {
    case "CREATE_QUOTE":
      console.log("Quote created", action.quote);
      return state;
    case "CREATE_QUOTE_ERROR":
      console.log("Quote error", action.err);
      return state;
    default:
      return state;
  }
};

export default quoteReducer;
