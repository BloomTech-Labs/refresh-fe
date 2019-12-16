import React from "react";
import styled from "styled-components";
// import axios from "axios";
// import { axiosWithAuth } from "../../../helpers/axiosWithAuth";
// helpers
import { test, flex } from "../../../styles/global/Mixins";
// Atoms
// import Icon from "../../atoms/icon/icon";
// SVG Images

const LiveGauge = props => {
  const percentComplete = props => {
    let goal = props.goal;
    let actual = props.actual
  };
  return (
    <>
      <BaseRing>
        <ProgressRing />
      </BaseRing>
    </>
  );
};

const BaseRing = styled.div`
  position: absolute;
  border: 3px solid #e6e6e6;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-bottom: 2rem;
  ${flex.flexCol}
`;
const ProgressRing = styled.div`
  position: absolute;
  border: 6px solid #fff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-bottom: 2rem;
  ${flex.flexCol}
`;

export default LiveGauge;
