import React from "react";
import styled from "styled-components";
import { BaseLayer } from "./BaseLayer";

export const ProgressLayer = ({ dashArray }) => {
  console.log(`[dashArray]`, dashArray);
  return (
    <>
      <StyledSvg
        width="61"
        height="61"
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <BaseLayer />
        <ProgressPathStyle strokeWidth="3" fill="none" cx="0" cy="0" r="29" />
        <ProgressLayerStyle
          cx="0"
          cy="0"
          r="29"
          fill="none"
          strokeWidth="3"
          strokeDasharray={dashArray}
          transform="rotate(-90)"
        />
      </StyledSvg>
    </>
  );
};

const StyledSvg = styled.svg`
  vertical-align: middle;
  position: absolute;
`;

const ProgressPathStyle = styled.circle`
  width: 60px;
  height: 60px;
  stroke: purple;
`;
const ProgressLayerStyle = styled.circle`
  width: 60px;
  height: 60px;
  stroke: green;
`;
