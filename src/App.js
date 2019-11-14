// IMPORTS
// react
import React from "react";
import { Route } from "react-router-dom";
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
import Leaderboard from './views/leaderboard/Leaderboard';
import Sandbox from './views/sandbox/Sandbox';
import Timer from './views/Timer/Timer';
import TimerTwo from './views/Timer/TimerTwo';
import TimerThree from './views/Timer/TimerThree';
import TimerFour from './views/Timer/TimerFour';
import TimerBreak from './views/Timer/TimerBreak';

// COMPONENT
const App = props => {
  return (
    <>
      <Route path='/' component={MobileMenu} />
      <Route path='/firstlogin' component={StepStart} /> 
      <Route exact path="/" component={Landing} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/mission-complete" component={MissionComplete} />
      <Route path='/leaderboard' component={Leaderboard} />
      <Route path="/gauge" component={Gauge} />
      <Route path="/signup" component={CreateAccount} />
      <Route path="/login" component={Login} />
      <Route path="/atoms" component={Atoms} />
      <Route path='/sandbox' component={Sandbox} />
      <Route path='/timer' component={Timer} />
      <Route path='/break' component={TimerBreak} />
      <Route path='/timer-2' component={TimerTwo} />
      <Route path='/timer-3' component={TimerThree} />
      <Route path='/timer-4' component={TimerFour} />
    </>
    
  );
};

// STYLED COMPONENTS
// todo

export default App;
