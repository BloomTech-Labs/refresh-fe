import React from "react";
import styled from "styled-components";

export const BaseLayer = () => {
  return (
    <>
      <BaseLayerStyle>
        <circle
          cx="30"
          cy="30"
          r="29"
          fill="none"
          stroke="#E6E6E6"
          strokeWidth="2"
        />
      </BaseLayerStyle>
    </>
  );
};

export const BaseLayerStyle = styled.svg`
  position: absolute;
  width: 60px;
  height: 60px;
`;
