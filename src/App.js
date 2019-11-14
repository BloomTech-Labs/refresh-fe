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
import TimerShortBreakOne from './views/Timer/TimerShortBreakOne';
import TimerShortBreakTwo from './views/Timer/TimerShortBreakTwo';
import TimerShortBreakThree from './views/Timer/TimerShortBreakThree';
import TimerLongBreak from './views/Timer/TimerLongBreak';

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
      <Route path='/timer-1' component={Timer} />
      <Route path='/timer-2' component={TimerTwo} />
      <Route path='/timer-3' component={TimerThree} />
      <Route path='/timer-4' component={TimerFour} />
      <Route path='/break-1' component={TimerShortBreakOne} />
      <Route path='/break-2' component={TimerShortBreakTwo} />
      <Route path='/break-3' component={TimerShortBreakThree} />
      <Route path='/break-4' component={TimerLongBreak} />
    </>
    
  );
};

// STYLED COMPONENTS
// todo

export default App;
