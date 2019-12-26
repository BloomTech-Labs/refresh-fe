import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
// import axios from "axios";
import { axiosWithAuth } from "../../../helpers/axiosWithAuth";
// Atoms
import Icon from "../../atoms/icon/icon";
// SVG Images

// Pulls in images
import healthyEating0 from "../../../images/gauge/healthyEatingGauge/healthyEatingGauge_0.svg";
import healthyEating1 from "../../../images/gauge/healthyEatingGauge/healthyEatingGauge_1.svg";
import healthyEating2 from "../../../images/gauge/healthyEatingGauge/healthyEatingGauge_2.svg";
import healthyEatingComplete from "../../../images/gauge/healthyEatingGauge/healthyEatingGauge_complete.svg";


const WaterGauge = ({ children, ...props }) => {
  const [gaugeData, setGaugeData] = useState({
    healthyEatingStats: 0
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
              mission.vertical.toLowerCase() === "food"
                ? setGaugeData({
                    healthyEatingStats: mission.point_current
                  })
                : console.log(`[No food data / end of map]`);
            });
      });
  }, []);

  console.log(`[gaugeData after useEffect]`, gaugeData);
  // console.log(`[healthyEatingStats after useEffect]`, healthyEatingStats);

  const gaugeFill = () => {
    console.log(`[gaugeData inside gaugeFill]`, gaugeData);
    switch (true) {
      case gaugeData.healthyEatingStats === 1:
        return (
          <Icon
            svg={healthyEating1}
            alt="1 piece of fruit"
            title="Current: 1 piece of fruit"
          />
        );
      case gaugeData.healthyEatingStats === 2:
        return (
          <Icon
            svg={healthyEating2}
            alt="2 pieces of fruit"
            title="Current: 2 pieces of fruit"
          />
        );

      case gaugeData.healthyEatingStats >= 3:
        return (
          <Icon
            svg={healthyEatingComplete}
            alt="3+ pieces of fruit"
            title="Current: Goal Complete!"
          />
        );
      default:
        return (
          <Icon
            svg={healthyEating0}
            alt="image for 0 pieces of fruit"
            title="Current: 0 pieces of fruit"
          />
        );
    }
  };
  console.log(`[Before return]:`, gaugeData.healthyEatingStats);

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

export default WaterGauge;
