// IMPORTS
// react
import React, { useContext } from "react";
// router
import { Link } from "react-router-dom";
// contexts
import { UserContext } from "../../../contexts/UserContext";
import { UserMissionsContext } from "../../../contexts/UserMissionsContext";
// styled components
import styled from "styled-components";
// helpers
import { test, flex } from "../../../styles/global/Mixins";
// components
import MissionCard from "./MissionCard";

// COMPONENT
const Dashboard = props => {
  // contexts
  const activeUser = useContext(UserContext);
  const userMissions = useContext(UserMissionsContext);
  console.log("[userMissionsContext]", userMissions);
  console.log("[activeUser]", activeUser);

  // state hooks
  // todo

  // useEffect
  // todo

  return (
    <DashboardView>
      <DashboardWrapper>
        <DashboardContainer>
          <Header>
            <Greeting>
              <h1>Hello {activeUser.fname}!</h1>
            </Greeting>

            <User>
              <Link to="/coming-soon">
                <i className="fas fa-bell"></i>
              </Link>
              <Link to="/profile-overview">
                <Avatar>
                  {activeUser.avatar && (
                    <img
                      src={activeUser.avatar}
                      alt="picture of your user profile"
                    />
                  )}
                </Avatar>
              </Link>
            </User>
          </Header>

          <h2 className="mission-message">Your missions today</h2>

          <ProgressComponent missions={userMissions} />

          <MissionHub>
            {userMissions.map((mission, i) => {
              return (
                <MissionCard
                  key={mission.mission_id}
                  color={mission.color}
                  description={mission.description}
                  points={mission.point_value}
                  goal={mission.goal}
                  actual={mission.point_current}
                  vertical={mission.vertical}
                  history={props.history}
                />
              );
            })}
          </MissionHub>

          <AddMission>
            <StartTimer>
              <p>
                Ready to work?<br></br>
                <Link to="/timer">Start Pomodoro</Link>
              </p>
            </StartTimer>
            <Link to="/mission-complete">
              <MissionButton>+</MissionButton>
            </Link>
          </AddMission>
        </DashboardContainer>
      </DashboardWrapper>
    </DashboardView>
  );
};

// STYLED COMPONENTS
const DashboardView = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  padding-top: 10rem;
  background-color: #3a3699;
`;

const DashboardWrapper = styled.div`
  width: 100%;
`;

const DashboardContainer = styled.div`
  width: 90%;
  height: 80vh;
  margin: 0 auto;

  .mission-message {
    color: #ccc9ff;
    font-size: 2.5rem;
    letter-spacing: 0.25rem;
    margin: 3rem 0;
  }
`;

const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;

const Greeting = styled.div`
  color: #fff;
  text-align: center;
  h1 {
    font-size: 4.5rem;
    letter-spacing: 0.25rem;
    font-weight: bold;
    width: 90vw;
    margin: auto;
  }
`;

const User = styled.div`
  width: 10rem;
  height: 5rem;
  position: absolute;
  top: 3rem;
  right: 3rem;
  ${flex.flexRowNoWrapAround}

  i {
    font-size: 2rem;
  }

  a {
    color: #ccc9ff;
  }
`;

const Avatar = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-image: url("https://i1.wp.com/grueneroadpharmacy.com/wp-content/uploads/2017/02/user-placeholder-1.jpg?ssl=1");
  background-size: cover;
  img {
    width: 100%;
    border-radius: 50%;
  }
`;

const MissionHub = styled.div`
  width: 100%;
  max-height: 42vh;
  overflow-y: scroll;
  ${flex.flexRowWrapAround}
`;

const AddMission = styled.div`
  width: 100%;
  height: 10rem;
  margin-top: 2rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;

  a {
    margin-left: auto;
  }
`;

const MissionButton = styled.button`
  width: 56px;
  height: 56px;
  margin-left: auto;
  background-color: #fc54eb;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
  font-size: 5rem;
  color: #fff;
`;

const StartTimer = styled.div`
  color: white;
  font-size: 1.6rem;
  line-height: 125.5%;
  a {
    text-decoration: none;
    color: #fff;
  }
`;

const ProgressComponent = props => {
  console.log(props.missions);
  const { missions } = props;
  function missionCount() {
    let currentPoints = 0;
    let goalCount = 0;
    missions.forEach((mission, i) => {
        mission.point_current = 5;
        goalCount = goalCount + mission.goal;
        currentPoints = currentPoints + mission.point_current;
    });
    console.log('current', currentPoints);
    console.log('goal', goalCount);
    let percentComplete = currentPoints / goalCount;
    return Math.round(percentComplete * 100);
  }
  const percentComplete = missionCount();
  return (
    <ProgressBar width={percentComplete}>
      <p>{percentComplete}% Complete</p>
      <div><div><div></div></div></div>
    </ProgressBar>
  );
};

const ProgressBar = styled.div`
  height: 10vh;
  width: 90vw;
  margin: auto;
  p {
    font-family: Catamaran;
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2.5rem;
    color: #E05CB3;
  }
  div {
      height: 1rem;
      width: 100%;
      border-radius: 5rem;
      background: #5E5CBD;
      div {
          width: ${props => props.width}%;
          height: 1rem;
          background: #E05CB3;
          position: relative;
          div {
            background: #E77EC3;
            border-radius: 50%;
            position: absolute;
            right: 0;
            width: 12px;
            height: 12px;
          }
      }
  }
`;

// EXPORT
export default Dashboard;
