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

  let currentStatus = (percent) => {
    const baseDegree = -135;
    const rotate = baseDegree + percent * 3.6;
    return rotate;
  };

  console.log({ ...props, percent });
  console.log(currentStatus(percent));
  

  return (
    <>
      <Container className="Container">
        <ProgressLayer className="ProgressLayer" />
        <IncompleteLayer className="IncompleteLayer" />
      </Container>
    </>
  );
};

const Container = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  border: 2px solid #e6e6e6;
  margin-bottom: 4px ${flex.flexCol};
`;

const ProgressLayer = styled.div`
  position: absolute;
  top: -2px;
  width: 60px;
  height: 60px;
  border: 4px solid;
  border-radius: 100%;
  border-top-color: #fff;
  border-right-color: #fff;
  border-bottom-color: transparent;
  border-left-color: transparent;
  transform: rotateZ(-135deg);
`;
const IncompleteLayer = styled.div`
  position: absolute;
  top: -2px;
  width: 60px;
  height: 60px;
  border: 4px solid;
  border-radius: 100%;
  border-top-color: #fff;
  border-right-color: #fff;
  border-bottom-color: transparent;
  border-left-color: transparent;
  transform: rotateZ(-135deg);
`;

export default LiveGauge;
