import React from "react";
import styled from "styled-components";

export const ProgressLayer = ({ dashArray }) => {
  return (
    <>
      <ProgressPathStyle>
        <svg strokeWidth="3" fill="none" cx="0" cy="0" r="29" />
      </ProgressPathStyle>
      <ProgressLayerStyle
        className="progress-layer"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 60 60"
      >
        <circle
          cx="30"
          cy="30"
          r="29"
          fill="none"
          strokeWidth="3"
          strokeDasharray={dashArray}
          transform="rotate(-90)"
        />
      </ProgressLayerStyle>
    </>
  );
};

export const ProgressPathStyle = styled.svg`
  position: absolute;
  width: 60px;
  height: 60px;
  stroke: #e6e6e6;
`;
export const ProgressLayerStyle = styled.svg`
  position: absolute;
  width: 60px;
  height: 60px;
  stroke: #FFFFFF;
`;
