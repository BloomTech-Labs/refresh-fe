import React from "react";
import styled from "styled-components";

const Progress = props => {
  const { missions } = props;
  function missionCount() {
    let currentPoints = 0;
    let goalCount = 0;
    missions.forEach((mission, i) => {
      mission.point_current = mission.point_current ? mission.point_current:0
      goalCount = goalCount + mission.goal;
      currentPoints = currentPoints + mission.point_current;
    });

    let percentComplete = Number(currentPoints / goalCount)
      ? currentPoints / goalCount
      : 0;
      console.log('currentPoints',currentPoints)
      console.log('PercentComplete',percentComplete)
    return Math.round(percentComplete * 100);
  }
  const percentComplete = missionCount();
  return (
    <ProgressBar width={percentComplete}>
      <p>{percentComplete}% Complete</p>
      <div>
        <div>
          <div></div>
        </div>
      </div>
    </ProgressBar>
  );
};

const ProgressBar = styled.div`
  height: 10vh;
  width: 90vw;
  margin: auto;
  p {
    font-family: Catamaran;
    font-style: normal;
    font-weight: bold;
    font-size: 1.5rem;
    line-height: 2.5rem;
    color: #e05cb3;
  }
  div {
    height: 1rem;
    width: 100%;
    border-radius: 5rem;
    background: #5e5cbd;
    div {
      width: ${props => props.width}%;
      height: 1rem;
      background: #e05cb3;
      display: flex;
      justify-content: flex-end;
      div {
        background: #e77ec3;
        border-radius: 50%;
        right: 0;
        width: 12px;
        height: 12px;
      }
    }
  }
`;

export default Progress;
