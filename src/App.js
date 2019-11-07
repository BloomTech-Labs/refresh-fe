// IMPORTS
// react
import React from 'react';
import { Route } from 'react-router-dom';
// components
import Landing from './views/onboarding/Landing';
import CreateAccount from "./views/onboarding/CreateAccount";
import MobileMenu from './components/MobileMenu';


// COMPONENT
const App = props => {
  return (
    <React.Fragment>
      <MobileMenu />
      <Landing {...props}/>
    </React.Fragment>
  );
}

// STYLED COMPONENTS
// todo

export default App;