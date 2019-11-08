import React from "react";
import styled from "styled-components";
import StyledRow from "../../../styles/global/components.css";
import Fonts from "../../../styles/global/fonts";
import Colors from "../../../styles/global/colors";
import { defaultCipherList } from "constants";

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
    color,
    fontSize,
    margin,
    padding,
    justifyContent
  } = props;

  return (
    <StyledRow
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
      color={color}
      fontSize={fontSize}
      margin={margin}
      padding={padding}
      justifyContent={justifyContent}
    >
      {/* stuff */}
    </StyledRow>
  );
};

export default Row;
