import React from "react";

import StyledSpinner from "../../../styles/global/components.css";
const spinner = require("../../../images/two_cubes.gif");

const LoadingSpinner = ({ ...props }) => {
  const { height, width, backgroundColor } = props;
  return (
    <StyledSpinner
      className="loading-spinner"
      height={height}
      width={width}
      backgroundColor={backgroundColor}
    >
      <img src={spinner} alt="page loading" />
    </StyledSpinner>
  );
};

export default LoadingSpinner;
