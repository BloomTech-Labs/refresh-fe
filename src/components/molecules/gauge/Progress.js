import React from "react";
import styled from "styled-components";
export const ProgressLayer = ({ dashArray, dashOffset }) => {

  return (
    <>
      <StyledSvg
        width="61"
        height="61"
        viewBox="-30 -30 61 61"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ProgressPathStyle strokeWidth="1" fill="none" cx="0" cy="0" r="29" />

        <ProgressLayerStyle
          cx="0"
          cy="0"
          r="29"
          fill="none"
          strokeWidth="3"
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          transform="rotate(-90)"
        />
      </StyledSvg>
    </>
  );
};

const StyledSvg = styled.svg`
  vertical-align: middle;
`;

const ProgressPathStyle = styled.circle`
  width: 60px;
  height: 60px;
  stroke: #e6e6e6;
`;
const ProgressLayerStyle = styled.circle`
  width: 60px;
  height: 60px;
  stroke: #ffffff;
`;
