import React from "react";
import styled from "styled-components";
// import Colors from "../../../styles/global/colors";

const spinner = require("../../../images/two_cubes.gif");

const LoadingSpinner = ({ ...props }) => {
  const { height, width, backgroundColor, display } = props;
  return (
    <StyledSpinner
      className="loading-spinner"
      height={height}
      width={width}
      backgroundColor={backgroundColor}
      display={display}
    >
      <img src={spinner} alt="page loading" />
    </StyledSpinner>
  );
};

const StyledSpinner = styled.div.attrs(props => ({
  height: props.height,
  width: props.width,
  backgroundColor: props.backgroundColor,
  display: props.display
}))`
  height: ${props => (props.height ? `${props.height}%` : "100%")};
  width: ${props => (props.width ? `${props.width}%` : `100%`)};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default LoadingSpinner;
