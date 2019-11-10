import React from "react";


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
