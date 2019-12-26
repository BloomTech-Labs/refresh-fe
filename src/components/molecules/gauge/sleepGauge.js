import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
// import axios from "axios";
import { axiosWithAuth } from "../../../helpers/axiosWithAuth";
// Atoms
import Icon from "../../atoms/icon/icon";
// SVG Images

// Pulls in images
import sleep0 from "../../../images/gauge/sleepGauge/sleep0.svg";
import sleep1 from "../../../images/gauge/sleepGauge/sleep1.svg";
import sleep2 from "../../../images/gauge/sleepGauge/sleep2.svg";
import sleep3 from "../../../images/gauge/sleepGauge/sleep3.svg";
import sleep4 from "../../../images/gauge/sleepGauge/sleep4.svg";
import sleep5 from "../../../images/gauge/sleepGauge/sleep5.svg";
import sleepComplete from "../../../images/gauge/sleepGauge/sleepComplete.svg";

const SleepGauge = ({ children, ...props }) => {
  const [gaugeData, setGaugeData] = useState({
    sleepStats: 0
  });
  console.log(`[gaugeData before useEffect]`, gaugeData);

  // useEffect axios call for user stats
  useEffect(() => {
    axiosWithAuth()
      .get(`/usermissions`)
      .then(res => {
        console.log(`user_missions response:`, res);
        let missionsInProgress = res.data.user_missions.missions_in_progress;
        !Array.isArray(missionsInProgress)
          ? console.log(`No missions currently in progress`)
          : missionsInProgress.forEach(mission => {
              console.log(`[Mission after map]`, mission);
              mission.vertical.toLowerCase() === "water"
                ? setGaugeData({
                    sleepStats: mission.point_current
                  })
                : console.log(`[No water data / end of map]`);
            });
      });
  }, []);

  console.log(`[gaugeData after useEffect]`, gaugeData);
  // console.log(`[sleepStats after useEffect]`, sleepStats);

  const gaugeFill = () => {
    console.log(`[gaugeData inside gaugeFill]`, gaugeData);
    switch (true) {
      case gaugeData.sleepStats === 1:
        return (
          <Icon
            svg={sleep1}
            alt="1 hours of sleep"
            title="Current: 1 hours of sleep"
          />
        );
      case gaugeData.sleepStats === 2:
        return (
          <Icon
            svg={sleep2}
            alt="2 hours of sleep"
            title="Current: 2 hours of sleep"
          />
        );
      case gaugeData.sleepStats === 3:
        return (
          <Icon
            svg={sleep3}
            alt="3 hours of sleep"
            title="Current: 3 hours of sleep"
          />
        );
      case gaugeData.sleepStats === 4:
        return (
          <Icon
            svg={sleep4}
            alt="4 hours of sleep"
            title="Current: 4 hours of sleep"
          />
        );
      case gaugeData.sleepStats === 5:
        return (
          <Icon
            svg={sleep5}
            alt="5 hours of sleep"
            title="Current: 5 hours of sleep"
          />
        );
      case gaugeData.sleepStats >= 6:
        return (
          <Icon
            svg={sleepComplete}
            alt="6 hours of sleep"
            title="Current: Goal Complete!"
          />
        );
      default:
        return (
          <Icon
            svg={sleep0}
            alt="image for 0 hours of sleep"
            title="Current: 0 hours of sleep"
          />
        );
    }
  };
  console.log(`[Before return]:`, gaugeData.sleepStats);

  return (
    <>
      <StyledGauge className="StyledGauge">
        <MobileCardWater className="MobileCardWater">
          {gaugeFill(gaugeData)}
        </MobileCardWater>
      </StyledGauge>
    </>
  );
};

const StyledGauge = styled.div`
  position: relative;
`;
const MobileCardWater = styled.div`
  position: absolute;
  width: 132px;
  height: 147px;
  left: 0px;
  top: 0px;
`;

export default SleepGauge;
