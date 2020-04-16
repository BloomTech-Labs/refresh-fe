import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Gauge from "../../components/molecules/gauge/Gauge";
import Leaderboard from './admin-leaderboard/leaderboard';
// import ComingSoon from "./coming-soon/ComingSoon";
import StepStart from "./firstLogin/StepStart";
import AdminDash from "./admin-dashboard/AdminDash";
import WithNavigation from './AdminNav';


const PrivateViewCanvas = props => {
  const { pathname } = props.location;
  props.debug && console.log("Props From Mobile Menu", props);
  return (
    <>
      {/* Mobile Menu Will not work Globally if in Switch */}
      {pathname !== "/firstlogin" &&
        pathname !== "/profile-edit" &&
        pathname !== "/survey" &&
        pathname !== "/team-list" &&
        pathname !== "/create-team" && (
          <div>
          <WithNavigation />
          <Route match path="/" component={AdminDash} />
          </div>
          
        )}

      <Switch>
        <Route path="/firstlogin" component={StepStart} />
        <Route path="/gauge" component={Gauge} />
      </Switch>
    </>
  );
};

export default PrivateViewCanvas;
