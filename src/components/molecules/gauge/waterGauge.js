import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
// import axios from "axios";
import { axiosWithAuth } from "../../../helpers/axiosWithAuth";
// Atoms
import Icon from "../../atoms/icon/icon";
// SVG Images

// Pulls in images
import water0 from "../../../images/gauge/waterGauge/water0.svg";
import water1 from "../../../images/gauge/waterGauge/water1.svg";
import water2 from "../../../images/gauge/waterGauge/water2.svg";
import water3 from "../../../images/gauge/waterGauge/water3.svg";
import water4 from "../../../images/gauge/waterGauge/water4.svg";
import water5 from "../../../images/gauge/waterGauge/water5.svg";
import water6 from "../../../images/gauge/waterGauge/water6.svg";
import water7 from "../../../images/gauge/waterGauge/water7.svg";
import waterComplete from "../../../images/gauge/waterGauge/water_complete.svg";

const WaterGauge = ({ children, ...props }) => {
  const [gaugeData, setGaugeData] = useState({
    waterStats: 0
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
                    waterStats: mission.point_current
                  })
                : console.log(`[No water data / end of map]`);
            });
      });
  }, []);

  console.log(`[gaugeData after useEffect]`, gaugeData);
  // console.log(`[waterStats after useEffect]`, waterStats);

  const gaugeFill = () => {
    console.log(`[gaugeData inside gaugeFill]`, gaugeData);
    switch (true) {
      case gaugeData.waterStats === 1:
        return <Icon svg={water1} alt="1 glasses of water" />;
      case gaugeData.waterStats === 2:
        return <Icon svg={water2} alt="2 glasses of water" />;
      case gaugeData.waterStats === 3:
        return <Icon svg={water3} alt="3 glasses of water" />;
      case gaugeData.waterStats === 4:
        return <Icon svg={water4} alt="4 glasses of water" />;
      case gaugeData.waterStats === 5:
        return <Icon svg={water5} alt="5 glasses of water" />;
      case gaugeData.waterStats === 6:
        return <Icon svg={water6} alt="6 glasses of water" />;
      case gaugeData.waterStats === 7:
        return <Icon svg={water7} alt="7 glasses of water" />;
      case gaugeData.waterStats >= 8:
        return <Icon svg={waterComplete} alt="8 glasses of water" />;
      default:
        return (
          <Icon
            svg={water0}
            alt="image for 0 glasses of water"
            title="Current: 0 glasses of water"
          />
        );
    }
  };
  console.log(`[Before return]:`, gaugeData.waterStats);

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
