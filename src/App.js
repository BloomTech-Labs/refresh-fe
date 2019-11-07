// IMPORTS
// react
import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './views/onboarding/Landing';
import CreateAccount from "./views/onboarding/CreateAccount";


// COMPONENT
const App = props => {
  return (
    <React.Fragment>
      <Landing {...props}/>
    </React.Fragment>
  );
}

// STYLED COMPONENTS
// todo

export default App;