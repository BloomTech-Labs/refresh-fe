
// IMPORTS
// react
import React from "react";
import ReactDOM from "react-dom";
import './styles/css/main.css';
import history from '../src/helpers/history';

// redux
import { applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducer from './views/private/reducers/reducers';
import userReducer from './views/private/reducers/reducer-user';
import logger from 'redux-logger';

// router
import { Router } from "react-router-dom";

// themes and styles
import Reset from "./styles/global/Reset";
import GlobalStyle from "./styles/global/GlobalStyle";

// components
import App from './App';
import * as serviceWorker from './serviceworker'


function saveToLocalStorage(state) {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem('state', serializedState)
  } catch(error) {
    console.log(error)
  }
}

function loadFromLocalStorage() {
  try {
    const serializedState = localStorage.getItem('state')
    if (serializedState === null) {
      return undefined
    }
    else {
      return JSON.parse(serializedState)
    }
  } catch (error) {
    console.log(error)
    return undefined
  }
}

const rootReducer =  combineReducers({
  reducer,
  userReducer
});

//const persistedState = loadFromLocalStorage()

const store = createStore(rootReducer, applyMiddleware(thunk, logger))

//every time the store changes, update local storage
//store.subscribe(() => saveToLocalStorage(store.getState()))


// RENDER
ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Reset />
      <GlobalStyle />
      <App />
    </Router>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister()