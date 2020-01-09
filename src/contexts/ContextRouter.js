import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { UserContext } from "./UserContext";
import { UserMissionsContext } from "./UserMissionsContext";
import { axiosWithAuth } from "../helpers/axiosWithAuth";
import * as ctx from "../views/globalFunctions";
const ContextRouter = ({
  privateView: PrivateView,
  publicView: PublicView,
  userStatus,
  debug,
  ...rest
}) => {
  const [userMissions, setUserMissions] = useState([]);
  const [user, setUser] = useState();
  const [team, setTeam] = useState([])

  useEffect(() => {
    !user &&
      localStorage.getItem("token") &&
      axiosWithAuth()
        .get(`/usermissions`)
        .then(res => {
          debug && console.log("[server response]", res);
          let {
            mission_subscriptions,
            missions_in_progress
          } = res.data.user_missions;

          mission_subscriptions = Array.isArray(missions_in_progress)
            ? ctx.missionMasher(mission_subscriptions, missions_in_progress)
            : mission_subscriptions;

          setUser(res.data.user_profile);
          setUserMissions(mission_subscriptions);
          console.log(res.data);
          
        })
        .catch(err => {
          console.log(err);
        });
  }, []);
  return (
    <Route
      {...rest}
      render={props => {
        return (
          <UserContext.Provider value={{ ...user, setUser }}>
            <UserMissionsContext.Provider
              value={{ missions: userMissions, setUserMissions }}
            >
              {localStorage.getItem("token") ? (
                <PrivateView {...props} />
              ) : (
                <PublicView />
              )}
            </UserMissionsContext.Provider>
          </UserContext.Provider>
        );
      }}
    />
  );
};
export default ContextRouter;
