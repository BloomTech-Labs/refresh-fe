import React from "react";
import styled from "styled-components";

export const BaseLayer = () => {
  return (
    <>
      <BaseLayerStyle cx="0" cy="0" r="29" fill="none" strokeWidth="2" stroke="#E6E6E6" />
    </>
  );
};

 const BaseLayerStyle = styled.circle`
  stroke: #e6e6e6;
`;
