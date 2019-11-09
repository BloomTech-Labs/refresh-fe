import React from "react";
import StyledAtom from "../../../styles/global/components.css";

const Card = ({ ...props }) => {
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
    flexFlow,
    textAlign
  } = props;

  return (
    <StyledAtom
      className="baseCard"
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
      textAlign={textAlign}
    >
      {props.children}
    </StyledAtom>
  );
};

export default Card;
