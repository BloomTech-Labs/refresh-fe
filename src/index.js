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
import App from './App';




ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);