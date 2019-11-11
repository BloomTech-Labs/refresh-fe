import React from "react";
import styled from "styled-components";
import Colors from "../../../styles/global/colors";

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

const StyledSpinner = styled.div.attrs(props => ({
  height: props.height,
  width: props.width,
  backgroundColor: props.backgroundColor
}))`
  height: ${props => (props.height ? `${props.height}rem` : "10rem")};
  width: ${props => (props.width ? `${props.width}%` : `100%`)};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : Colors.white};
`;

export default LoadingSpinner;
