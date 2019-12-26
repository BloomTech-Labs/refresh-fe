import React, { useState, useEffect, useContext } from "react";
import { Route } from "react-router-dom";

// contexts
import { UserContext } from "../../contexts/UserContext";
import { UserMissionsContext } from "../../contexts/UserMissionsContext";

// helpers
import { axiosWithAuth } from "../../helpers/axiosWithAuth";
// components
import MobileMenu from "./mobile-menu/MobileMenu";
import Dashboard from "./dashboard/Dashboard";
import MissionComplete from "./mission-complete/MissionComplete";
import Gauge from "../../components/molecules/gauge/Gauge";
import Atoms from "./componentTesting/componentTesting";
import Sandbox from "./sandbox/Sandbox";
import ProfileOverview from "./profileViews/ProfileOverview";
import Leaderboard from "./leaderboard/Leaderboard";
import MissionStats from "./mission-stats/MissionStats";
//import ComingSoon from "./coming-soon/ComingSoon";
import TimerOne from "./Timer/TimerOne";
import TimerShortBreakOne from "./Timer/TimerShortBreakOne";
import TimerTwo from "./Timer/TimerTwo";
import TimerShortBreakTwo from "./Timer/TimerShortBreakTwo";
import TimerThree from "./Timer/TimerThree";
import TimerShortBreakThree from "./Timer/TimerShortBreakThree";
import TimerFour from "./Timer/TimerFour";
import TimerLongBreak from "./Timer/TimerLongBreak";
import TeamView from "./team-view/TeamView";
import AddMember from "./team-view/AddMember";
import CreateTMission from "./team-view/CreateTMission";
import Calendar from "./team-view/Calendar";
import TeamList from "./team-view/TeamList";

const PrivateViewCanvas = () => {
  const [userMissions, setUserMissions] = useState([]);
  // state hooks
  // this hook becomes the global user context
  // will abstract out later after we get all logic working properly
  // do not touch, i repeat do not touch.... -JC
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("activeUser")) || {
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
    }
  );
  console.log('here')
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
  return (
    <UserContext.Provider value={{ ...user, setUser: setUser }}>
      <UserMissionsContext.Provider value={userMissions}>
        <Route path="/" component={MobileMenu} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/mission-complete" component={MissionComplete} />
        <Route path="/gauge" component={Gauge} />
        <Route path="/atoms" component={Atoms} />
        <Route path="/sandbox" component={Sandbox} />
        <Route path="/profile-overview" component={ProfileOverview} />
        <Route path="/leaderboard" component={Leaderboard} />
        <Route path="/mission-stats" component={MissionStats} />
        <Route path="/team-view" component={TeamView} />
        <Route path="/teamList" component={TeamList} />
        <Route path="/invite" component={AddMember} />
        <Route path="/createtm" component={CreateTMission} />
        <Route path="/calendar" component={Calendar} />
        {/* <Route path="/coming-soon" component={ComingSoon} /> */}
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
  );
};

export default PrivateViewCanvas;
