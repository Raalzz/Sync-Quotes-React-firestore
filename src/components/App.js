import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Dashboard from "./dashboard/Dashboard";
import QuoteDetails from "./quotes/QuoteDetails";
import SignIn from "./auth/SignIn";
import SignUp from "./auth/SignUp";
import CreateQuote from "./quotes/CreateQuote";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/project/:id" component={QuoteDetails} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/create" component={CreateQuote} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default App;
