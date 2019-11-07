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
// questions/data collection
import Weight from "./views/questionare/weight";
import Height from "./views/questionare/height";
import Water from "./views/questionare/water";
import Stretches from "./views/questionare/stretches";
import Sleep from "./views/questionare/sleep";
import Overwhelmed from "./views/questionare/overwhelmed";
import Game from "./views/questionare/game";
import Food from "./views/questionare/food";
import Exercise from "./views/questionare/exercise";
import Breaks from "./views/questionare/breaks";

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
    <Route exact path="/weight" render={props => <Weight {...props} />} />
    <Route exact path="/height" render={props => <Height {...props} />} />
    <Route exact path="/water" render={props => <Water {...props} />} />
    <Route exact path="/stretches" render={props => <Stretches {...props} />} />
    <Route exact path="/sleep" render={props => <Sleep {...props} />} />
    <Route exact path="/overwhelmed" render={props => <Overwhelmed {...props} />} />
    <Route exact path="/game" render={props => <Game {...props} />} />
    <Route exact path="/food" render={props => <Food {...props} />} />
    <Route exact path="/exercise" render={props => <Exercise {...props} />} />
    <Route exact path="/breaks" render={props => <Breaks {...props} />} />
  </Router>,
  document.getElementById("root")
);
