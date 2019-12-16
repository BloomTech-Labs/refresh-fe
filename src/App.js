// IMPORTS
// react
import React, { useState, useEffect, useContext } from "react";
import { Route } from "react-router-dom"
// contexts
import { UserContext } from "./contexts/UserContext";
import { UserMissionsContext } from "./contexts/UserMissionsContext";
// helpers
import { axiosWithAuth } from "./helpers/axiosWithAuth";
// components
import Landing from "./views/onboarding/Landing";
import CreateAccount from "./views/onboarding/CreateAccount";
import MobileMenu from "./views/mobile-menu/MobileMenu";
import Dashboard from "./views/dashboard/Dashboard";
import MissionComplete from "./views/mission-complete/MissionComplete";
import StepStart from "./views/onboarding/steps/StepStart";
import Login from "./views/onboarding/Login";
import Sandbox from './views/sandbox/Sandbox';
import ProfileOverview from './views/profileViews/ProfileOverview';
import Leaderboard from './views/leaderboard/Leaderboard';
import MissionStats from './views/mission-stats/MissionStats';
import ComingSoon from './views/coming-soon/ComingSoon';
import EmailSignUp from './views/onboarding/EmailSignUp';
import EmailLogIn from './views/onboarding/EmailLogin';
import TimerOne from './views/Timer/TimerOne';
import TimerShortBreakOne from './views/Timer/TimerShortBreakOne';
import TimerTwo from './views/Timer/TimerTwo';
import TimerShortBreakTwo from './views/Timer/TimerShortBreakTwo';
import TimerThree from './views/Timer/TimerThree';
import TimerShortBreakThree from './views/Timer/TimerShortBreakThree';
import TimerFour from './views/Timer/TimerFour';
import TimerLongBreak from './views/Timer/TimerLongBreak';

// dummy data
import { userMissionsDummy } from './contexts/DummyData';

//COMPONENT
const App = props => {
  // contexts
  const [userMissions, setUserMissions] = useState([]);
  // state hooks
  // this hook becomes the global user context
  // will abstract out later after we get all logic working properly
  // do not touch, i repeat do not touch.... -JC
  const [user, setUser] = useState({
    user_id: null,
    display_name: "",
    fname: "",
    lname: "",
    cohort: "",
    section_lead: "",
    avatar: "",
    bio: "",
    new_user: true,
    testing: false,
    hasLoggedIn: true // this true is a placeholder and will need to be removed after we finish logic
  });

  // useEffect
  useEffect(() => {
    axiosWithAuth()
      .get(`/usermissions`)
      .then(res => {
        console.log("[server response]", res);
        let dailyMissions = [];
        let missionSubscriptions = res.data.user_missions.mission_subscriptions;
        let missionsInProgress = res.data.user_missions.missions_in_progress;

        console.log("[mission subscriptions]", missionSubscriptions);
        console.log("[missions in progress]", missionsInProgress);

        dailyMissions = missionSubscriptions.map(mission => {
          let updatedMission = {};

          if (
            missionsInProgress === "No Missions Currently in progress for today"
          ) {
            updatedMission = { ...mission, point_current: 0 };
          } else {
            missionsInProgress.forEach(i => {
              if (mission.id === i.id) {
                console.log("found a match!");
                updatedMission = { ...mission, point_current: i.point_current };
              } else {
                console.log("no match found!");
                updatedMission = { ...mission, point_current: 0 };
              }
            });
          }

          return updatedMission;
        });

        console.log("[new dailyMissions]", dailyMissions);

        setUserMissions(dailyMissions);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

if(!localStorage.getItem("token")){ // temp setting for testing purposes
  return(
  <>
  <UserContext.Provider value={{...user, setUser: setUser}}>
    <Route path='/firstlogin' component={StepStart} /> 
    <Route path="/signup" component={CreateAccount} />
    <Route path="/emailsignup" component={EmailSignUp} />
    <Route path="/emaillogin" component={EmailLogIn} />
    <Route path="/login" component={Login} />
    <Route exact path="/" component={Landing} />
  </UserContext.Provider>
  </>);
} else {
  return (
    <>
    <UserContext.Provider value={{...user, setUser: setUser}}>
      <UserMissionsContext.Provider value={userMissions}>
        <Route path='/' component={MobileMenu} /> 
        <Route exact path="/login" component={Login} />
        <Route path="/" component={Dashboard} />
        <Route path="/mission-complete" component={MissionComplete} />
        <Route path='/sandbox' component={Sandbox} />
        <Route path='/profile-overview' component={ProfileOverview}/>
        <Route path='/leaderboard' component={Leaderboard} />
        <Route path='/mission-stats' component={MissionStats} />
        <Route path='/coming-soon' component={ComingSoon} />
        <Route path="/timer" component={TimerOne} />
        <Route path="/break-1" component={TimerShortBreakOne} />
        <Route path="/timer-2" component={TimerTwo} />
        <Route path="/break-2" component={TimerShortBreakTwo} />
        <Route path="/timer-3" component={TimerThree} />
        <Route path="/break-3" component={TimerShortBreakThree} />
        <Route path="/timer-4" component={TimerFour} />
        <Route path="/break-4" component={TimerLongBreak} />
      </UserMissionsContext.Provider>
    </UserContext.Provider>
    </>
  );
}
};
// STYLED COMPONENTS
// todo
export default App;
