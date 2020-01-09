import React, { useState, useEffect } from "react";
import { Route, Switch } from "react-router-dom";
import { UserContext } from "./UserContext";
import { UserMissionsContext } from "./UserMissionsContext";
import { TeamContext } from "./TeamContext"
import { axiosWithAuth } from "../helpers/axiosWithAuth";
import * as ctx from "../views/globalFunctions";
const ContextRouter = ({
  privateView: PrivateView,
  publicView: PublicView,
  userStatus,
  debug,
  ...rest
}) => {
  let [userMissions, setUserMissions] = useState([]);
  const [user, setUser] = useState();
  let [team, setTeam] = useState();

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

          const userRole = res.data.user_profile.user_roles;
          const roleTitle = userRole ? userRole[userRole.length - 1].role : "";

          mission_subscriptions = Array.isArray(missions_in_progress)
            ? ctx.missionMasher(mission_subscriptions, missions_in_progress)
            : mission_subscriptions;
          
          //Sets Default Context
          userMissions = mission_subscriptions;
          team = res.data.my_teams[0]
          //set last
          setUser({...res.data.user_profile,roleTitle}) 
        })
        .catch(err => {
          console.log(err);
        });
  }, []);
  return (
    <Route
      {...rest}
      render={props => {
        console.log('here')
        return (
          <UserContext.Provider value={{...user, setUser }}>
            <UserMissionsContext.Provider value={{missions:userMissions,setUserMissions}}>
             <TeamContext.Provider value={{...team,setTeam}} >
              {localStorage.getItem("token") ? <PrivateView {...props}/> : <PublicView />}
              </TeamContext.Provider>
            </UserMissionsContext.Provider>
          </UserContext.Provider>
        );
      }}
    />
  );
};
export default ContextRouter;
