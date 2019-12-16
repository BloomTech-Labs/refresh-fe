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
  const goal = props.goal;
  const actual = props.actual;
  const percent = (actual / goal) * 100;

  console.log(props);

  // console.log(`[return goal]`, goal);
  // console.log(`[return actual]`, actual);
  // console.log(`[return percent]`, percent);

  return (
    <>
      <BaseRing />
      <ProgressRing>
        <svg className="progress-circle" height="60" width="60">
          <Circle
            strokeWidth="4"
            fill="transparent"
            r="27"
            cx="30"
            cy="30"
            stroke="white"
          />
        </svg>
      </ProgressRing>
    </>
  );
};

const BaseRing = styled.div`
  position: absolute;
  border: 2px solid #e6e6e6;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-bottom: 2rem;
  ${flex.flexCol}
`;
const ProgressRing = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  margin-bottom: 2rem;
  ${flex.flexCol}
`;
const Circle = styled.circle`
  transition: 0.35s;
  transform: rotate(-90deg);
  transform-origin: 50% 50%;
`;

export default LiveGauge;
