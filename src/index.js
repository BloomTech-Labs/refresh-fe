
// IMPORTS
// react
import React from "react";
import ReactDOM from "react-dom";
import './styles/css/main.css';

// redux
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './views/private/reducers/reducers';
import userReducer from './views/private/reducers/reducer-user';
import logger from 'redux-logger';

// router
import { BrowserRouter as Router } from "react-router-dom";

// themes and styles
import Reset from "./styles/global/Reset";
import GlobalStyle from "./styles/global/GlobalStyle";

// components
import App from './App';
import * as serviceWorker from './serviceworker'

const rootReducer =  combineReducers({
  reducer,
  userReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

// RENDER
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Reset />
      <GlobalStyle />
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister()