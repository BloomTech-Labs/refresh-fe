// IMPORTS
// react
import React, { useState, useEffect, useContext } from "react";
import { Route } from "react-router-dom";
// contexts
import { UserContext } from './contexts/UserContext';
import { UserMissionsContext } from './contexts/UserMissionsContext';
// helpers
import { axiosWithAuth } from './helpers/axiosWithAuth';
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
// dummy data
import { userMissionsDummy } from './contexts/DummyData';


//COMPONENT
const App = props => {
  // contexts
  const [userMissions, setUserMissions] = useState(userMissionsDummy);
  
  // state hooks
  // this hook becomes the global user context
  // will abstract out later after we get all logic working properly
  // do not touch, i repeat do not touch.... -JC
  const [user, setUser] = useState({
    user_id: null,
    display_name: '',
    fname: '',
    lname: '',
    cohort: '',
    section_lead: '',
    avatar: '',
    bio: '',
    new_user: true,
    testing: false,
    hasLoggedIn: true // this true is a placeholder and will need to be removed after we finish logic
  });


  // // useEffect
  // useEffect(() => {
  //   axiosWithAuth().get(`/missions`)
  //   .then(res => {
  //     console.log('[server response]', res)
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }, []);

if(user.new_user){
  return(
  <>
  <UserContext.Provider value={{...user, setUser: setUser}}>
    <Route path='/firstlogin' component={StepStart} /> 
    <Route path="/signup" component={CreateAccount} />
    <Route path="/login" component={Login} />
    <Route exact path="/" component={Landing} />
  </UserContext.Provider>
  </>);
} else {
  return (
    <>
    <UserContext.Provider value={{...user, setUser: setUser}}>
      <UserMissionsContext.Provider value={}>
        <Route path='/' component={MobileMenu} /> 
        <Route exact path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/mission-complete" component={MissionComplete} />
        <Route path="/gauge" component={Gauge} />
        <Route path="/atoms" component={Atoms} />
        <Route path='/sandbox' component={Sandbox} />
        <Route path='/profile-overview' component={ProfileOverview}/>
        <Route path='/leaderboard' component={Leaderboard} />
        <Route path='/mission-stats' component={MissionStats} />
        <Route path='/coming-soon' component={ComingSoon} />
      </UserMissionsContext.Provider>
    </UserContext.Provider>
    </>
    
  );
}
};

// STYLED COMPONENTS
// todo  

export default App;
