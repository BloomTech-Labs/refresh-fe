import React, { useState,useEffect } from "react";
import { Route } from "react-router-dom";
import { UserContext } from "./UserContext";
import { UserMissionsContext } from "./UserMissionsContext";
import { axiosWithAuth } from "../helpers/axiosWithAuth";
const ContextRouter = ({
  privateView: PrivateView,
  publicView: PublicView,
  userStatus,
  ...rest
}) => {
  const [userMissions, setUserMissions] = useState([]);
  const [user, setUser] = useState();
  const [context,setContext]=useState();
  useEffect(() => {
    localStorage.getItem("token") &&
      axiosWithAuth()
        .get(`/usermissions`)
        .then(res => {
          console.log("[server response]", res);
          let missionSubscriptions =
            res.data.user_missions.mission_subscriptions;
          let missionsInProgress = res.data.user_missions.missions_in_progress;
          if (!Array.isArray(missionsInProgress)) {
            console.log("not Array");
            setUser(res.data.user_profile);
            setUserMissions(missionSubscriptions);
          } else {
            missionSubscriptions.map((mission, i) => {
              missionsInProgress.forEach(missionInProgress => {
                if (mission.mission_id === missionInProgress.mission_id) {
                  missionSubscriptions[i] = missionInProgress;
                }
              });
            });
            setUser(res.data.user_profile);
            setUserMissions(missionSubscriptions);
          }
        })
        .catch(err => {
          console.log(err);
        });
  }, [context]);
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          // if token is in localstorage, render the given component
          return (
            <UserContext.Provider value={{ ...user, setUser: setUser }}>
              <UserMissionsContext.Provider value={userMissions}>
                <PrivateView />
              </UserMissionsContext.Provider>
            </UserContext.Provider>
          );
        } else {
          return <PublicView />;
        }
      }}
    />
  );
};
export default ContextRouter;
