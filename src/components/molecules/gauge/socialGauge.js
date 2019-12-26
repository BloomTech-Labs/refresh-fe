import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
// import axios from "axios";
import { axiosWithAuth } from "../../../helpers/axiosWithAuth";
// Atoms
import Icon from "../../atoms/icon/icon";
// SVG Images

// Pulls in images
import social0 from "../../../../images/gauge/socialGauge/social0.svg";
import social15 from "../../../../images/gauge/socialGauge/social15.svg";
import social30 from "../../../../images/gauge/socialGauge/social30.svg";
import social45 from "../../../../images/gauge/socialGauge/social45.svg";
import socialComplete from "../../../../images/gauge/socialGauge/socialComplete.svg";


const SocialGauge = ({ children, ...props }) => {
  const [gaugeData, setGaugeData] = useState({
    socialStats: 0
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
                    socialStats: mission.point_current
                  })
                : console.log(`[No social data / end of map]`);
            });
      });
  }, []);

  console.log(`[gaugeData after useEffect]`, gaugeData);
  // console.log(`[socialStats after useEffect]`, socialStats);

  const gaugeFill = () => {
    console.log(`[gaugeData inside gaugeFill]`, gaugeData);
    switch (true) {
      case gaugeData.socialStats === 1:
        return (
          <Icon
            svg={social15}
            alt="15+ minutes of social activity"
            title="Current: 15+ minutes of social activity"
          />
        );
      case gaugeData.socialStats === 2:
        return (
          <Icon
            svg={social30}
            alt="30+ minutes of social activity"
            title="Current: 30+ minutes of social activity"
          />
        );
      case gaugeData.socialStats === 3:
        return (
          <Icon
            svg={social45}
            alt="45+ minutes of social activity"
            title="Current: 45+ minutes of social activity"
          />
        );
      case gaugeData.socialStats === 4:
        return (
          <Icon
            svg={socialComplete}
            alt="60+ minutes of social activity"
            title="Current: 60+ minutes of social activity"
          />
        );
      default:
        return (
          <Icon
            svg={social0}
            alt="0 minutes of social activity"
            title="Current: 0 minutes of social activity"
          />
        );
    }
  };
  console.log(`[Before return]:`, gaugeData.socialStats);

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

export default SocialGauge;
