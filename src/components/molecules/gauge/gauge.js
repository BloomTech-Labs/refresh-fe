import React, { useState, useEffect } from "react";
import styled from "styled-components";
// import axios from "axios";

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

const Gauge = ({ children, ...props }) => {
  const [gaugeData, setGaugeData] = useState(null);

  // useEffect axios call for user stats
  useEffect(() => {
    fetch("https://apidevnow.com/usermissions")
      .then(response => response.json())
      .then(data => {
        data.user_missions.missions_in_progress.forEach(mission => {
          // console.log(mission)

          if (mission.vertical.toLowerCase() === "water") {
            setGaugeData({
              waterStats: mission.point_current
            });
          }

          // !mission.vertical.toLowerCase() === "water"
          //   ? console.log(`no water data`)
          //   : setGaugeData({
          //       waterStats: mission.point_current
          //     });
        });
      });
  }, []);

  const gaugeFill = waterStats => {
    let currentWater = waterStats;
    switch (currentWater) {
      case currentWater === 1:
        return (
          <Icon src={water1} altText="1 glasses of water" currentWater="1" />
        );

      case currentWater === 2:
        return (
          <Icon src={water2} altText="2 glasses of water" currentWater="2" />
        );
      case currentWater === 3:
        return (
          <Icon src={water3} altText="3 glasses of water" currentWater="3" />
        );
      case currentWater === 4:
        return (
          <Icon src={water4} altText="4 glasses of water" currentWater="4" />
        );
      case currentWater === 5:
        return (
          <Icon src={water5} altText="5 glasses of water" currentWater="5" />
        );
      case currentWater === 6:
        return (
          <Icon src={water6} altText="6 glasses of water" currentWater="6" />
        );
      case currentWater === 7:
        return (
          <Icon src={water7} altText="7 glasses of water" currentWater="7" />
        );
      case currentWater === 8:
        return (
          <Icon
            src={waterComplete}
            altText="8 glasses of water"
            currentWater="8"
          />
        );
      default:
        return (
          <Icon src={water0} altText="0 glasses of water" currentWater="0" />
        );
    }
  };
  return (
    <>
      <StyledGauge className="container">
        <MobileCardWater>{gaugeFill()}</MobileCardWater>
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

export default Gauge;
