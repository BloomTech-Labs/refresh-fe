import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { UserContext } from "./UserContext";
import { UserMissionsContext } from "./UserMissionsContext";
import { TeamContext } from "./TeamContext";
import { axiosWithAuth } from "../helpers/axiosWithAuth";
import * as ctx from "../views/globalFunctions";
import moment from 'moment'
const ContextRouter = ({
  privateView: PrivateView,
  publicView: PublicView,
  userStatus,
  debug,
  ...rest
}) => {
  const [userMissions, setUserMissions] = useState([]);
  const [user, setUser] = useState();
  const [team, setTeam] = useState([]);

  useEffect(() => {
    const start = moment().startOf('day').format()
    const end = moment().endOf('day').format()
    console.log(start,end)
    !user &&
      localStorage.getItem("token") &&
      axiosWithAuth()
        .get(`/usermissions/?start=${start}&end=${end}`)
        .then(res => {
          console.log("[server response]", res);

          let {
            mission_subscriptions,
            missions_in_progress
          } = res.data.user_missions;

          const userRole = res.data.user_profile.user_roles;
          const roleTitle = userRole ? userRole[userRole.length - 1].role : "";

          mission_subscriptions = Array.isArray(missions_in_progress)
            ? ctx.missionMasher(mission_subscriptions, missions_in_progress)
            : mission_subscriptions;

          setUser({ ...res.data.user_profile, roleTitle });
          setUserMissions(mission_subscriptions);
          setTeam(res.data.my_teams[0]);
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
              <TeamContext.Provider value={{ ...team, setTeam }}>
                {localStorage.getItem("token") ? (
                  <PrivateView {...props} />
                ) : (
                  <PublicView />
                )}
              </TeamContext.Provider>
            </UserMissionsContext.Provider>
          </UserContext.Provider>
        );
      }}
    />
  );
};
export default ContextRouter;
