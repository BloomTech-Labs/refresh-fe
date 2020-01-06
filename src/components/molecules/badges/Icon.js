import React from "react";
import styled from "styled-components";

const BadgeIcon = props => {
  return (
    <>
      <Icon
        width="17"
        height="23"
        viewBox="0 0 17 23"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 14.8063C17 19.3583 13.1725 23 8.5 23C3.82747 23 0 19.3583 0 14.8063C0 10.2542 8.5 0 8.5 0C8.5 0 17 10.3021 17 14.8063Z"
          fill="#84DBFF"
        />
      </Icon>
    </>
  );
};

const Icon = styled.svg`
  position: absolute;
  left: 36.36%;
  right: 34.2%;
  top: 32.06%;
  bottom: 32.82%;
`;

export default BadgeIcon;
