// WELCOME TO THE SANDBOX
// There are a lot of people testing things in random places and adding random routes.
// Instead of doing that please use this sandbox for anything that you need to test.
// If I need to come back and add default page styling so that you guys can see things
// in line with what you would see on a normal page, just let me know and I will fix
// -JC

// IMPORTS

import React from "react";
import styled from "styled-components";
// import { Router } from "react-router-dom";
// import ImageDial from "../team-view/ImageDial";
// import MissionComplete from '../mission-complete/MissionComplete'
// helpers
// import { test, flex } from "../../styles/global/Mixins";
// Views to test
import CongratsComplete from '../mission-complete/CongratsComplete'
import Atoms from '../componentTesting/componentTesting'

// COMPONENT
const Sandbox = () => {
  return (
    <>
      <CongratsComplete />
      {/* <Atoms /> */}
    </>
  );
};

// STYLED COMPONENTS
// todo
const Container = styled.div`
  padding: 5rem;
`;

// EXPORT
export default Sandbox;
