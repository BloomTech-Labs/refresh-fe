// IMPORTS
// react
import React from "react";
import ReactDOM from "react-dom";
// router
import { BrowserRouter as Router, Route } from "react-router-dom";
// themes and styles
import Reset from "./styles/global/Reset";
import GlobalStyle from "./styles/global/GlobalStyle";
// components
import App from "./App";
import CreateAccount from "./views/onboarding/CreateAccount";
import StepStart from "./views/onboarding/steps/StepStart";

// RENDER
ReactDOM.render(
  <Router>
    <Reset />
    <GlobalStyle />
    <Route exact path="/" render={props => <App {...props} />} />
    <Route
      exact
      path="/signup"
      render={props => <CreateAccount {...props} />}
    />
    <Route
      exact
      path="/profileinfo"
      render={props => <StepStart {...props} />}
    />
  </Router>,
  document.getElementById("root")
);
