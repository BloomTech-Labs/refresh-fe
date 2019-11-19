import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
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

// Image object for passed props
let waterGaugeImage = [
  { id: 0, src: water0, altText: "0 glasses of water", currentWater: 0 },
  { id: 1, src: water1, altText: "1 glasses of water", currentWater: 1 },
  { id: 2, src: water2, altText: "2 glasses of water", currentWater: 2 },
  { id: 3, src: water3, altText: "3 glasses of water", currentWater: 3 },
  { id: 4, src: water4, altText: "4 glasses of water", currentWater: 4 },
  { id: 5, src: water5, altText: "5 glasses of water", currentWater: 5 },
  { id: 6, src: water6, altText: "6 glasses of water", currentWater: 6 },
  { id: 7, src: water7, altText: "7 glasses of water", currentWater: 7 },
  { id: 8, src: waterComplete, altText: "8 glasses of water", currentWater: 8 }
];

const context = createContext(null);

const Gauge = ({ children, ...props }) => {
  // const [user, setUser] = useState({
  //   hydrationStats: 4
  // });
  const [gaugeData, setGaugeData] = useState(null);

  // useEffect axios call for user stats
  useEffect(() => {
    fetch("/api/whoDatUser")
      .then(response => response.json())
      .then(data => {
        setGaugeData({
          waterStats: data.waterStats
        });
      });
  }, []);

    const gaugeFill = waterStats => {
   !waterStats ? console.log(`No userStats detected`) : waterStats === 0 ? return <Icon svg={waterGaugeImage.zero.src} alt={waterGaugeImage.zero.altText} /> : null

  }
  return (
    <>
    <context.Provider value={gaugeData}>
      <StyledGauge className="container">
        <MobileCardWater>
         {gaugeFill(waterStats)}
        </MobileCardWater>
      </StyledGauge>
      </context.Provider>
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
