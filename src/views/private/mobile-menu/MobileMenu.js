// IMPORTS
// react
import React, { useState, useEffect, useContext } from "react";
// router
import { Link } from "react-router-dom";
// styled components
import styled from "styled-components";
// helpers
import { test, flex } from "../../../styles/global/Mixins"; // eslint-disable-line no-unused-vars
// contexts
import { UserContext } from "../../../contexts/UserContext";
import { UserMissionsContext } from "../../../contexts/UserMissionsContext";
// styled components
// DUMMY DATA
// hard coding some dummy data directly into the component to avoid too many unncessary files
// will come back and clean all of this up later when we wire up FE/BE - JC

const dummyUser = {
  username: "JohnDoe",
  first_name: "John",
  last_name: "Doe",
  email: "johndoe@gmail.com",
  cohort: "Labs 18",
  team_lead: "Dayton",
  section_lead: "Megan",
  points: 69
};

// COMPONENT
const MobileMenu = props => {
  // state hooks
  const activeUser = useContext(UserContext);
  const userMissions = useContext(UserMissionsContext); // eslint-disable-line no-unused-vars

  const [menu, setMenu] = useState({
    status: "closed",
    darken: "inactive"
  });

  // use effect
  useEffect(() => {
    setMenu({ ...menu, status: "closed", darken: "inactive" });
  }, [props.location]);

  // handlers
  const menuToggle = () => {
    menu.status === "closed"
      ? setMenu({ ...menu, status: "open", darken: "active" })
      : setMenu({ ...menu, status: "closed", darken: "inactive" });
  };

  // RENDER
  return (
    <Wrapper>
      <Darken className={menu.darken} onClick={menuToggle}></Darken>
      <DrawerContainer>
        <Drawer className={menu.status}>
          <Column>
            <UserHud>
              <Link to="/profile-overview">
                <Avatar>
                  {activeUser.avatar && <img src={activeUser.avatar} />}
                </Avatar>
              </Link>
              <UserInfo>
                <h2>{activeUser.display_name}</h2>
                <p>
                  {dummyUser.cohort} - {dummyUser.section_lead}
                </p>
                <p>{dummyUser.points} Points</p>
                <p className="activeText">Team Lead</p>
              </UserInfo>
            </UserHud>

            <Navigation>
              <NavButton>
                <Link to="/dashboard">
                  <i className="fas fa-home"></i>Home
                </Link>
              </NavButton>
              <NavButton>
                <Link to="/leaderboard">
                  <i className="fas fa-gamepad"></i>Leaderboard
                </Link>
              </NavButton>
              <NavButton>
                <Link to="/team-view">
                  <i className="fas fa-users"></i>Team
                </Link>
              </NavButton>
              <NavButton>
                <Link to="/coming-soon">
                  <i className="fas fa-calendar-alt"></i>Weekly Challenge
                </Link>
              </NavButton>
              <NavButton>
                <Link to="/timer">
                  <i className="fas fa-stopwatch"></i>Pomodoro Clock
                </Link>
              </NavButton>
              <NavButton>
                <Link to="/coming-soon">
                  <i className="fas fa-gem"></i>Rewards
                </Link>
              </NavButton>
            </Navigation>
          </Column>
        </Drawer>
      </DrawerContainer>
      <PlaceholderButton onClick={menuToggle}>
        <i className={`fas fa-bars ${menu.status}`}></i>
      </PlaceholderButton>
    </Wrapper>
  );
};

// STYLED COMPONENTS
const Wrapper = styled.div`
  position: fixed;
  z-index: 1000;

  .active {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: -5;
    transition: 0.5s ease;
  }
  .activeText {
    color: #e05cb3;
  }

  .inactive {
    background-color: rgba(0, 0, 0, 0);
    transition: 0.5s;
  }

  a {
    text-decoration: none;
    color: #fff;
  }
`;

// const Container = styled.div`
//   margin: 0 auto;
//   width: 100vw;
//   height: 5rem;
//   ${flex.flexRowNoWrapAround}
//   z-index: 1;

//   button:active {
//     border: none;
//     text-decoration: none;
//     outline: none;
//   }
// `;

const PlaceholderButton = styled.button`
  width: 3rem;
  height: 3rem;
  background-color: transparent;
  border: none;
  color: #fff;
  font-size: 2rem;
  margin: 2rem auto 2rem 2rem;
  outline: none;
  .open {
    display: none;
  }
`;

const DrawerContainer = styled.div`
  height: 90vh;
  position: fixed;
  z-index: -3;

  .closed {
    width: 70vw;
    height: 100vh;
    position: fixed;
    right: 100vw;
    background-color: rgb(100, 135, 255, 0.7);
    transition: 0.3s ease-in-out;
  }

  .open {
    width: 70vw;
    height: 100vh;
    position: fixed;

    background-color: #3d3b91;
    transition: 0.3s ease-in-out;
  }
`;

const Drawer = styled.div`
  position: relative;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

const Column = styled.div`
  margin-bottom: auto;
  width: 100%;
`;

const UserHud = styled.div`
  width: 100%;
  height: 20rem;

  padding: 1.2rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px solid rgba(255, 255, 255, 0.5);
`;

const Avatar = styled.div`
  width: 8rem;
  height: 8rem;
  background-image: url("https://i1.wp.com/grueneroadpharmacy.com/wp-content/uploads/2017/02/user-placeholder-1.jpg?ssl=1");
  background-size: cover;
  border-radius: 3px;
  border-radius: 50%;
  img {
    border-radius: 50%;
    width: 8rem;
  }
`;

const UserInfo = styled.div`
  padding: 1rem;
  color: #fff;
  margin: 1rem;
  margin-right: 0;

  h2 {
    font-size: calc(100% + 0.5rem);
    letter-spacing: 0.15rem;
  }

  p {
    font-family: "Catamaran", sans-serif;
    font-weight: 100;
    line-height: 104%;
    color: E6E6E6;
  }

  i {
    font-size: 1rem;
  }
`;

const Navigation = styled.div`
  width: 65%;
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
  margin: auto;
`;

const NavButton = styled.div`
  font-size: 1.5rem;
  color: #b8b7e1;
  display: flex;
  flex-flow: row nowrap;
  justify-content: left;
  align-items: center;
  border-radius: 2px;

  @media screen and (max-width: 330px) {
    font-size: 1.4rem;
  }

  i {
    color: rgba(204, 201, 255, 0.6);
    margin: 1.5rem;
    font-size: 1.5rem;
  }

  &:hover {
    background-color: #3a3699;
    box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
  }
`;

const Darken = styled.div``;

// EXPORT
export default MobileMenu;
