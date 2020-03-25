import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

//images
import logo from "./AdminNavImages/logo.png";
import leaderboard from "./AdminNavImages/leaderboard.png";
import user from "./AdminNavImages/user.png";
import settings from "./AdminNavImages/settings.png";
import logout from "./AdminNavImages/signout 1.png";

export const NavBar = styled.div`
  position: fixed;
  background-color: rgb(61, 162, 237);
  color: white;
  text-align: center;
  display: flex;
  flex-direction: column;
  width: 100px;
  height: 100vh;
  justify-content: space-between;
  .img {
    display: flex;
    justify-content: space-between;
    opacity: 70%;
    width: 5vh;
    height: 5vh;
    margin-left: 2.5vh;

    &:hover,
    .select--active {
      opacity: 100%;
    }
  }
`;

const activeLink = { opacity: "100%" };

export const Content = styled.div`
  background-color: white;
`;

export const Stars = styled.img`
  margin-top: 2vh;
  margin-bottom: 15vh;
`;

export const Leaderboard = styled.img``;

export const Users = styled.img``;

export const Settings = styled.img``;

export const Logout = styled.img`
  margin-top: 35vh;
  margin-bottom: 2vh;
`;
const activeClassName = "active";
const StyledNavLink = styled(NavLink).attrs({
  activeClassName: activeClassName
})`
  &.${activeClassName} .img {
    opacity: 100%;
  }
`;
export const Space = styled.div``;

// const clear = {localStorage.clear}

function WithNavigation(props) {
  function logoutClick() {
    localStorage.clear();
  }
  return (
    <div>
      <NavBar>
        <NavLink to="/">
          <Stars className="img" src={logo} alt="stars" />
        </NavLink>
        <Space></Space>
        <StyledNavLink to="/leaderboard">
          <Leaderboard className="img" src={leaderboard} alt="leaderboard" />
        </StyledNavLink>
        <StyledNavLink to="/users">
          <Users className="img" src={user} alt="user" />
        </StyledNavLink>
        <StyledNavLink to="/settings">
          <Settings className="img" src={settings} alt="settings" />
        </StyledNavLink>
        <Space></Space>
        <StyledNavLink to="/">
          <Logout
            className="img"
            src={logout}
            alt="logout"
            onClick={logoutClick}
          />
        </StyledNavLink>
      </NavBar>
      <Content>{props.children}</Content>
    </div>
  );
}

export default WithNavigation;
