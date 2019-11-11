// IMPORTS
// react
import React from 'react';
import { Route } from 'react-router-dom';
// components
import Landing from './views/onboarding/Landing';
import Timer from './components/Timer';
import CreateAccount from "./views/onboarding/CreateAccount";
import MobileMenu from './views/mobile-menu/MobileMenu';
import Dashboard from './views/dashboard/Dashboard';
import MissionComplete from './views/mission-complete/MissionComplete';

// COMPONENT
const App = props => {
  return (
    <React.Fragment>
      <MobileMenu />
      <Route exact path='/' component={Landing} />
      <Route path='/dashboard' component={Dashboard} />
      <Route path='/mission-complete' component={MissionComplete} />
<<<<<<< HEAD
      <Route path ='/pomodoro-timer' component={Timer} />
=======
      <Route path='/signup' component={CreateAccount} />
>>>>>>> 4a52cc2b86de0113b3d1882cb47150d2ef6652b9
    </React.Fragment>
  );
};

// STYLED COMPONENTS
// todo

export default App;
