import React from "react";
import styled from "styled-components";
// import axios from "axios";
// import { axiosWithAuth } from "../../../helpers/axiosWithAuth";
// helpers
import { test, flex } from "../../../styles/global/Mixins";
// Atoms
// import Icon from "../../atoms/icon/icon";
// SVG Images

const LiveGauge = ({ ...props }) => {
  const { actual, goal } = props;
  const percent = (actual / goal) * 100;

  let rotate = percent => {
    const baseDegree = -135;
    const rotate = baseDegree + percent * 3.6;
    return `${rotate}deg`;
  };

  console.log({ ...props, percent });
  console.log(rotate(percent));

  return (
    <>
      <Container className="Container">
        <svg viewBox="53.3 186 58.8 59.2" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M80.8 186c-3.8.4-6.8 1.6-7.2 1.7a26.4 26.4 0 00-12.2 7.6c-9.6 12.1-11.6 28.4-.6 40.5 19.1 21.1 55.5 3.8 50.9-24.6-1.6-10-9.2-19.8-18.1-22.5-3.2-1-5.6-1.9-11-2.6"
            fill="none"
            stroke="#e6e6e6"
          />
        </svg>

        <ProgressLayer className="ProgressLayer" />
      </Container>
    </>
  );
};

const Container = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  margin-bottom: 4px ${flex.flexCol};
`;

const ProgressLayer = styled.div`
  position: absolute;
`;

export default LiveGauge;
