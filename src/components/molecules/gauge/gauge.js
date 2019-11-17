import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import styled from "styled-components";
// import axios from "axios";

// Atoms
import Icon from "../../atoms/icon/icon";
// SVG Images
import water0 from "../../../images/gauge/waterGauge/water0.svg";
import water1 from "../../../images/gauge/waterGauge/water1.svg";
import water2 from "../../../images/gauge/waterGauge/water2.svg";
import water3 from "../../../images/gauge/waterGauge/water3.svg";
import water4 from "../../../images/gauge/waterGauge/water4.svg";
import water5 from "../../../images/gauge/waterGauge/water5.svg";
import water6 from "../../../images/gauge/waterGauge/water6.svg";
import water7 from "../../../images/gauge/waterGauge/water7.svg";
import waterComplete from "../../../images/gauge/waterGauge/water_complete.svg";

let waterGaugeImages = {
  0: [{ src: water0, altText: "0 glasses of water", currentWater: 0 }],
  1: [{ src: water1, altText: "1 glasses of water", currentWater: 1 }],
  2: [{ src: water2, altText: "2 glasses of water", currentWater: 2 }],
  3: [{ src: water3, altText: "3 glasses of water", currentWater: 3 }],
  4: [{ src: water4, altText: "4 glasses of water", currentWater: 4 }],
  5: [{ src: water5, altText: "5 glasses of water", currentWater: 5 }],
  6: [{ src: water6, altText: "6 glasses of water", currentWater: 6 }],
  7: [{ src: water7, altText: "7 glasses of water", currentWater: 7 }],
  8: [{ src: waterComplete, altText: "8 glasses of water", currentWater: 8 }]
};

const Gauge = props => {
  const [user, setUser] = useState({
    hydrationStats: 4
  });
  const [gauge, setGauge] = useState(user);
  console.log(user);
  console.log(waterGaugeImages);

  const [waterGauge, setWaterGauge] = useState(user.hydrationStats);
  let gaugeFill =
    waterGauge === 0
      ? setWaterGauge(waterGaugeImages, 0)
      : waterGauge === 1
      ? setWaterGauge(waterGaugeImages, 1)
      : waterGauge === 2
      ? setWaterGauge(waterGaugeImages, 2)
      : waterGauge === 3
      ? setWaterGauge(waterGaugeImages, 3)
      : waterGauge === 4
      ? setWaterGauge(waterGaugeImages, 4)
      : waterGauge === 5
      ? setWaterGauge(waterGaugeImages, 5)
      : waterGauge === 6
      ? setWaterGauge(waterGaugeImages, 6)
      : waterGauge === 7
      ? setWaterGauge(waterGaugeImages, 7)
      : setWaterGauge(waterGaugeImages, 8);

  // useEffect axios call for user stats

  return (
    <>
      <StyledGauge className="container">
        {/* SVG url should be derived from state */}
        <MobileCardWater>
          <Icon svg={gaugeFill} alt={waterGaugeImages.altText} />
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

export default Gauge;
