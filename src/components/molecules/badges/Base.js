import React from "react";
import styled from "styled-components";

const BadgeBase = props => {
  return (
    <>
      <Base
        width="58"
        height="66"
        viewBox="0 0 58 66"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28.875 0C27.875 0 0.87498 16 0.37498 17.5C-0.12502 19 -0.124966 47 0.37498 48C0.874925 49 26.875 65.5 28.875 65.5C30.875 65.5 56.875 49 57.375 48C57.875 47 57.875 18.5 57.375 17.5C56.875 16.5 29.875 0 28.875 0Z"
          fill="#1575FF"
        />
      </Base>
    </>
  );
};

const Base = styled.svg`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;

  /* background placeholder */
  /* background: #1575FF; */
`;

export default BadgeBase;
