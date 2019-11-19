// IMPORTS
// react
import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
// helpers
import jwtDecode from 'jwt-decode';
// components
import Landing from "./views/onboarding/Landing";
import CreateAccount from "./views/onboarding/CreateAccount";
import MobileMenu from "./views/mobile-menu/MobileMenu";
import Dashboard from "./views/dashboard/Dashboard";
import MissionComplete from "./views/mission-complete/MissionComplete";
import Gauge from "./components/molecules/gauge/gauge";
import Atoms from "./views/componentTesting/componentTesting";
import StepStart from "./views/onboarding/steps/StepStart";
import Login from "./views/onboarding/Login";
import Sandbox from './views/sandbox/Sandbox';
import ProfileOverview from './views/profileViews/ProfileOverview';
import Leaderboard from './views/leaderboard/Leaderboard';
import MissionStats from './views/mission-stats/MissionStats';
import ComingSoon from './views/coming-soon/ComingSoon';



//COMPONENT
const App = props => {
  // state hooks
  const [user, setUser] = useState({
    hasLoggedIn: true,
    userId: 1
  });

  // useEffect
  useEffect(() => {
    if (localStorage.getItem('token')) {
      let userId = jwtDecode(localStorage.getItem('token')).userId;
      localStorage.setItem('userId', userId);
    } else {
      localStorage.setItem('userId', 1)
    }
  }, []);

if(!user.hasLoggedIn){
  return(
  <>
  <Route path='/firstlogin' component={StepStart} /> 
  <Route path="/signup" component={CreateAccount} />
  <Route path="/login" component={Login} />
  <Route exact path="/" component={Landing} />
  </>);
} else {
  return (
    <>
      <Route path='/' component={MobileMenu} /> 
      <Route exact path="/login" component={Login} />
      <Route path={`/${user.userId}/dashboard`} component={Dashboard} />
      <Route path={`/${user.userId}/mission-control`} component={MissionComplete} />
      <Route path="/gauge" component={Gauge} />
      <Route path="/atoms" component={Atoms} />
      <Route path='/sandbox' component={Sandbox} />
      <Route path={`/${user.userId}/profile`} component={ProfileOverview}/>
      <Route path={`/${user.userId}/leaderboard`} component={Leaderboard} />
      <Route path={`/${user.userId}/mission-stats`} component={MissionStats} />
      <Route path='/coming-soon' component={ComingSoon} />
    </>
    
  );
}
};

// STYLED COMPONENTS
// todo  

export default App;
