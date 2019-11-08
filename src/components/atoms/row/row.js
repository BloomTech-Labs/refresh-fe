import React from "react";
import styled from "styled-components";
import Colors from "../../../styles/global/colors";
import StyledAtom from "../../../styles/global/components.css";

const Row = ({ ...props }) => {
  const {
    display,
    width,
    height,
    border,
    borderLeft,
    borderRight,
    borderBottom,
    borderRadiusBottomLeft,
    borderRadiusTopLeft,
    borderRadiusTopRight,
    borderRadiusBottomRight,
    boxShadow,
    backgroundColor,
    color,
    fontSize,
    margin,
    padding,
    justifyContent,
    flex,
    flexFlow
  } = props;

  return (
    <StyledAtom
      className="baseRow"
      display={display}
      width={width}
      height={height}
      border={border}
      borderLeft={borderLeft}
      borderRight={borderRight}
      borderBottom={borderBottom}
      borderRadiusBottomLeft={borderRadiusBottomLeft}
      borderRadiusTopLeft={borderRadiusTopLeft}
      borderRadiusTopRight={borderRadiusTopRight}
      borderRadiusBottomRight={borderRadiusBottomRight}
      boxShadow={boxShadow}
      backgroundColor={backgroundColor}
      color={color}
      fontSize={fontSize}
      margin={margin}
      padding={padding}
      justifyContent={justifyContent}
      flex={flex}
      flexFlow={flexFlow}
    >
      {props.children}
    </StyledAtom>
  );
};

export default Row;
