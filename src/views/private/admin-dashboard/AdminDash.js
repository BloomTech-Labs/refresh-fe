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
import AdminNav from "../AdminNav"
// images
import waves from "../../../images/Onboarding/waves.svg";
// COMPONENT
const AdminDash = props => {
  // contexts


  return (
    <AdminNav />
  );
};

// STYLED COMPONENTS


// EXPORT
export default AdminDash;