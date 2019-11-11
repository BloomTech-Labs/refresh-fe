// IMPORTS
// react
import React from 'react';
import { Route } from 'react-router-dom';
import Landing from './views/onboarding/Landing';
import CreateAccount from "./views/onboarding/CreateAccount";
import Container from './views/profileViews/Container';


// COMPONENT
const App = props => {
  return (
    <React.Fragment>
      <Landing {...props}/>
      <Container {...props}/>
    </React.Fragment>
  );
}

// STYLED COMPONENTS
// todo

export default App;