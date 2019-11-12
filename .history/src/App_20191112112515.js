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

// COMPONENT
const App = props => {
  return (
    <React.Fragment>
      {/* <MobileMenu /> */}
      <Route exact path="/" component={Landing} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/mission-complete" component={MissionComplete} />
      <Route path="/gauge" component={Gauge} />
      <Route path="/signup" component={CreateAccount} />
      <Route path="/atoms" component={Atoms} />
    </React.Fragment>
    
  );
};

// STYLED COMPONENTS
// todo

export default App;
