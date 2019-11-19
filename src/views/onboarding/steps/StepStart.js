// IMPORTS
// react
import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import styled from "styled-components";
import InfoIntro from "./InfoIntro"
import { axiosWithAuth } from "../../../helpers/axiosWithAuth";

// components
import Steps from "./Steps";

const StepStart = props => {

  return (
    <>
        <InfoIntro /> 
        <Steps />
    </>
  );
};

export default StepStart;
