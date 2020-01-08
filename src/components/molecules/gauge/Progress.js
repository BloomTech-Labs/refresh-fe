import React from "react";
import styled from "styled-components";
export const ProgressLayer = ({ dashArray, dashOffset }) => {
  // props.debug && console.log(`[dashArray]`, dashArray);
  // props.debug && console.log(`[dashOffset]`, dashOffset());
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
  width: 60rem;
  height: 60rem;
  stroke: #e6e6e6;
  animation: dash2 1.5s linear alternate;
`;
const ProgressLayerStyle = styled.circle`
  width: 60rem;
  height: 60rem;
  stroke: #ffffff;
  animation: dash 1.5s linear alternate;
  @keyframes dash {
    from {
      stroke-dashoffset: 0;
    }
    to {
      stroke-dashoffset: dashoffset;
    }
  }
`;
