// IMPORTS
// react
import React, {useState} from "react";
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
import Sandbox from './views/sandbox/Sandbox';
import ProfileOverview from './views/profileViews/ProfileOverview';
//COMPONENT
const App = props => {
  const [user, setUser] = useState({hasLoggedIn: false});

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
      <Route path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/mission-complete" component={MissionComplete} />
      <Route path="/gauge" component={Gauge} />
      <Route path="/atoms" component={Atoms} />
      <Route path='/sandbox' component={Sandbox} />
      <Route path='/profile-overview' component={ProfileOverview}/>
    </>
    
  );
}
};

// STYLED COMPONENTS
// todo  

export default App;
