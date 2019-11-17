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
  water0: [{ src: water0, altText: "0 glasses of water", currentWater: 0 }],
  water1: [{ src: water1, altText: "1 glasses of water", currentWater: 1 }],
  water2: [{ src: water2, altText: "2 glasses of water", currentWater: 2 }],
  water3: [{ src: water3, altText: "3 glasses of water", currentWater: 3 }],
  water4: [{ src: water4, altText: "4 glasses of water", currentWater: 4 }],
  water5: [{ src: water5, altText: "5 glasses of water", currentWater: 5 }],
  water6: [{ src: water6, altText: "6 glasses of water", currentWater: 6 }],
  water7: [{ src: water7, altText: "7 glasses of water", currentWater: 7 }],
  waterComplete: [
    { src: waterComplete, altText: "8 glasses of water", currentWater: 8 }
  ]
};

const Gauge = props => {
  const[gauge, setGauge] = useState(waterGaugeImages)
  const [user, setUser] = useState({
    hydrationStats: 4
  });
  console.log(user);
  
  const [waterGauge, setWaterGauge] = useState(user.hydrationStats);
  // let gaugeFill =
  //   waterGauge === 0
  //     ? setWaterGauge(waterGaugeImages.water0)
  //     : waterGauge === 1
  //     ? setWaterGauge(waterGaugeImages.water1)
  //     : waterGauge === 2
  //     ? setWaterGauge(waterGaugeImages.water2)
  //     : waterGauge === 3
  //     ? setWaterGauge(waterGaugeImages.water3)
  //     : waterGauge === 4
  //     ? setWaterGauge(waterGaugeImages.water4)
  //     : waterGauge === 5
  //     ? setWaterGauge(waterGaugeImages.water5)
  //     : waterGauge === 6
  //     ? setWaterGauge(waterGaugeImages.water6)
  //     : waterGauge === 7
  //     ? setWaterGauge(waterGaugeImages.water7)
  //     : setWaterGauge(waterGaugeImages.waterComplete);

      // useEffect axios call for user stats

  return (
    <>
      <StyledGauge className="container">
        {/* SVG url should be derived from state */}
        <MobileCardWater>
          <Icon svg={waterGaugeImages.water0} alt={"alt"} />
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
