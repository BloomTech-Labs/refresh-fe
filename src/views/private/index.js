import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import MobileMenu from "./mobile-menu/MobileMenu";
import Dashboard from "./dashboard/Dashboard";
import MissionComplete from "./mission-complete/MissionComplete";
import Gauge from "../../components/molecules/gauge/Gauge";
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
import StepStart from "./firstLogin/StepStart";
import SurveyCanvas from "./survey";
import ProfileEdit from "./profileViews/ProfileEdit";
import WeeklyChallenges from './weeklyChallenge/WeeklyChallenges';


const PrivateViewCanvas = props => {
  props.debug && console.log("Props From Mobile Menu", props);
  return (
    <>
      {/* Mobile Menu Will not work Globally if in Switch */}
      {props.location.pathname !== "/firstlogin" 
      && <Route match path="/" component={MobileMenu} />
      }

      <Switch>
        <Route path="/firstlogin" component={StepStart} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/mission-complete" component={MissionComplete} />
        <Route path="/gauge" component={Gauge} />
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
        <Route path="/survey" component={SurveyCanvas} />
        <Route path="/profile-edit" component={ProfileEdit} />
        <Route path="/weekly-challenges" component={WeeklyChallenges} />
        <Redirect to="/dashboard" />
      </Switch>
    </>
  );
};

export default PrivateViewCanvas;
