import React, { useState, useEffect, useContext } from "react";
import { Route, Redirect, Switch } from "react-router-dom";

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
import ComingSoon from "./coming-soon/ComingSoon";
import TimerCanvas from "./Timer/";
import TeamView from "./team-view/TeamView";
import AddMember from "./team-view/AddMember";
import CreateTMission from "./team-view/CreateTMission";
import Calendar from "./team-view/Calendar";
import TeamList from "./team-view/TeamList";
import StepStart from './firstLogin/StepStart'

const PrivateViewCanvas = () => {
  const [userMissions, setUserMissions] = useState([]);
  // state hooks
  // this hook becomes the global user context
  // will abstract out later after we get all logic working properly
  // do not touch, i repeat do not touch.... -JC
  const [user, setUser] = useState();

  // useEffect
  useEffect(() => {
    axiosWithAuth()
      .get(`/usermissions`)
      .then(res => {
        console.log("[server response]", res);
        let dailyMissions = [];
        let missionSubscriptions = res.data.user_missions.mission_subscriptions;
        let missionsInProgress = res.data.user_missions.missions_in_progress;

        dailyMissions = missionSubscriptions.map(mission => {
          let updatedMission = {};

          if (
            missionsInProgress === "No Missions Currently in progress for today"
          ) {
            updatedMission = { ...mission, point_current: 0 };
          } else {
            missionsInProgress.forEach(i => {
              if (mission.mission_id === i.mission_id) {
                console.log("found a match!");
                updatedMission = { ...i };
              } else {
                console.log("no match found!");
                updatedMission = { ...mission, point_current: 0 };
              }
            });
          }

          return updatedMission;
        });

        setUser(res.data.user_profile)
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
          <Route path="/firstlogin" component={StepStart}/>
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
          <Route path="/coming-soon" component={ComingSoon} />
          <Route path="/timer" component={TimerCanvas} />
      </UserMissionsContext.Provider>
    </UserContext.Provider>
  );
};

export default PrivateViewCanvas;
