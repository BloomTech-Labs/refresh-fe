import React, { useState, useEffect } from "react";
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

import activitysvg from "../../../images/gauge/activityGauge/activity20.svg"

const WaterGauge = ({ children, ...props }) => {
  const [gaugeData, setGaugeData] = useState(0);

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
              console.log(mission);
              !mission.vertical.toLowerCase() === "water"
                ? console.log(`no water data`)
                : setGaugeData({
                    waterStats: mission.point_current
                  });
            });
      });
  }, []);
  
  console.log(gaugeData);
  

  const gaugeFill = gaugeData => {
    let currentWater = gaugeData;
    console.log(gaugeData);

    switch (currentWater) {
      case currentWater === 1:
        return (
          <Icon svg={water1} altText="1 glasses of water" currentWater="1" />
        );

      case currentWater === 2:
        return (
          <Icon svg={water2} altText="2 glasses of water" currentWater="2" />
        );
      case currentWater === 3:
        return (
          <Icon svg={water3} altText="3 glasses of water" currentWater="3" />
        );
      case currentWater === 4:
        return (
          <Icon svg={water4} altText="4 glasses of water" currentWater="4" />
        );
      case currentWater === 5:
        return (
          <Icon svg={water5} altText="5 glasses of water" currentWater="5" />
        );
      case currentWater === 6:
        return (
          <Icon svg={water6} altText="6 glasses of water" currentWater="6" />
        );
      case currentWater === 7:
        return (
          <Icon svg={water7} altText="7 glasses of water" currentWater="7" />
        );
      case currentWater === 8:
        return (
          <Icon
            svg={waterComplete}
            altText="8 glasses of water"
            currentWater="8"
          />
        );
      default:
        return (
          <Icon svg={water0} altText="0 glasses of water" currentWater="0" />
        );
    }
  };
  console.log(gaugeFill());

  return (
    <>
      <StyledGauge className="StyledGauge">
        <MobileCardWater className="MobileCardWater">
          {gaugeFill(props.currentWater)}
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
