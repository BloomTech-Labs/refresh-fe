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
import { flex } from "../../../styles/global/Mixins";
// components
import AdminNav from "../AdminNav";
import TeamCard from '../../../components/molecules/team/teamCard';

// COMPONENT
const AdminDash = props => {
  // contexts


  return (
    
    <>
      <AdminNav />
      <TeamCard></TeamCard>
    </>
    
  );
};

// STYLED COMPONENTS


// EXPORT
export default AdminDash;

const Header = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
`;