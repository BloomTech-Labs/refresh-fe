import React, { useState, useEffect, useContext } from "react";
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

//const context = createContext(null);

const Gauge = ({ children, ...props }) => {
  const [gaugeData, setGaugeData] = useState(null);

  // useEffect axios call for user stats
  useEffect(() => {
    fetch("https://apidevnow.com/usermissions")
      .then(response => response.json())
      .then(data => {
        setGaugeData({
          // waterStats: data.user_missions.missions_in_progress.[whatever is water].point_current
        });
      });
  }, []);

  const gaugeFill = waterStats => {
    let currentWater = waterStats;
    switch (currentWater) {
      case currentWater === 1:
        return (
          <Icon src={water1} altText="0 glasses of water" currentWater="0" />
        );

      case currentWater === 2:
        return (
          <Icon src={water2} altText="0 glasses of water" currentWater="0" />
        );
      case currentWater === 3:
        return (
          <Icon src={water3} altText="0 glasses of water" currentWater="0" />
        );
      case currentWater === 4:
        return (
          <Icon src={water4} altText="0 glasses of water" currentWater="0" />
        );
      case currentWater === 5:
        return (
          <Icon src={water5} altText="0 glasses of water" currentWater="0" />
        );
      case currentWater === 6:
        return (
          <Icon src={water6} altText="0 glasses of water" currentWater="0" />
        );
      case currentWater === 7:
        return (
          <Icon src={water7} altText="0 glasses of water" currentWater="0" />
        );
      case currentWater === 8:
        return (
          <Icon src={waterComplete} altText="0 glasses of water" currentWater="0" />
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
        <MobileCardWater>{gaugeFill}</MobileCardWater>
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
