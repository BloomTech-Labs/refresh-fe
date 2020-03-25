// IMPORTS
// react
import React, { useContext } from "react";
import { Route, Redirect, Switch } from "react-router-dom";
// router
import { Link } from "react-router-dom";
// contexts
import { UserContext } from "../../../contexts/UserContext";
import { UserMissionsContext } from "../../../contexts/UserMissionsContext";
// styled components
import styled from "styled-components";
// helpers
import { flex } from "../../../styles/global/Mixins";
// components
import WithNavigation from "../AdminNav";
import Leaderboard from "../admin-leaderboard/leaderboard";
import UserProfile from "../user-profile/user-profile";
import UserList from "../user-list/user-list";
// COMPONENT../team/modal
const AdminDash = props => {
  // contexts

  return (
    <div>
      <CardContainer>
        <WithNavigation />
        <Route exact path="/users" component={UserList} />
        <Route path="/users/:id" component={UserProfile} />
        <Route exact path="/leaderboard" component={Leaderboard} />
      </CardContainer>
    </div>
  );
};

// STYLED COMPONENTS

// EXPORT
export default AdminDash;

const NavContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const CardContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  flex-flow: row nowrap;
`;
