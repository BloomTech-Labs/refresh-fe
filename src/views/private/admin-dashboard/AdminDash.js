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
import AdminNav from "../AdminNav";
import TeamCard from '../../../components/molecules/team/teamCard';
import UserProfile from '../user-profile/user-profile'
import UserList from '../user-list/user-list';

// COMPONENT
const AdminDash = props => {
  // contexts


  return (
    
    <div>
      
      <CardContainer>
        <AdminNav />
        <Route path='/userprofile' component={UserProfile} />
        <Route path='/userlist' component={UserList} />
      </CardContainer>
    </div>
    
  );
};

// STYLED COMPONENTS


// EXPORT
export default AdminDash;


const CardContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  
  align-items: center;
`;