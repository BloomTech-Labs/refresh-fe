// IMPORTS
// react
import React, { useState } from "react";
// router
import { Link } from "react-router-dom";
// styled components
import styled from "styled-components";
// helpers
import { test, flex } from "../../styles/global/Mixins";
// images
import Rocket from "../../images/rocket.png";
// atoms
import Text from "../../components/atoms/text/text";
const congratText = "Congratulations";
// COMPONENT
const CongratsComplete = props => {
  return (
    <>
      <Text text={congratText} />
    </>
  );
};

// STYLED COMPONENTS

// EXPORT
export default CongratsComplete;
