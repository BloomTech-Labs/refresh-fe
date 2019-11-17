import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import styled from "styled-components";
// import axios from "axios";

// Atoms
import Icon from "../../atoms/icon/icon";
// SVG Images
import step0 from "../../../images/gauge";
import step1 from "../../../images/gauge/gaugeSteps/step1.svg";
import step2 from "../../../images/gauge/gaugeSteps/step2.svg";
import step3 from "../../../images/gauge/gaugeSteps/step3.svg";
import step4 from "../../../images/gauge/gaugeSteps/step4.svg";
import step5 from "../../../images/gauge/gaugeSteps/step5.svg";
import step6 from "../../../images/gauge/gaugeSteps/step6.svg";
import step7 from "../../../images/gauge/gaugeSteps/step7.svg";
import step8 from "../../../images/gauge/gaugeSteps/step8.svg";

let waterGaugeImages = [
  { src: step0, altText: "0 glasses of water", currentWater: 0 },
  { src: step1, altText: "1 glasses of water", currentWater: 1 },
  { src: step2, altText: "2 glasses of water", currentWater: 2 },
  { src: step3, altText: "3 glasses of water", currentWater: 3 },
  { src: step4, altText: "4 glasses of water", currentWater: 4 },
  { src: step5, altText: "5 glasses of water", currentWater: 5 },
  { src: step6, altText: "6 glasses of water", currentWater: 6 },
  { src: step7, altText: "7 glasses of water", currentWater: 7 },
  { src: step8, altText: "8 glasses of water", currentWater: 8 }
];

const Gauge = props => {
  const [user, setUser] = useState({
    hydrationStats: 4
  });
  const [waterGauge, setWaterGauge] = useState(user.hydrationStats);
  const [currentWaterGauge, setCurrentWaterGauge] = useState(0);
  let gaugeFill =
    waterGauge === 0
      ? setWaterGauge(step0)
      : waterGauge === 1
      ? setWaterGauge(step1)
      : waterGauge === 2
      ? setWaterGauge(step2)
      : waterGauge === 3
      ? setWaterGauge(step3)
      : waterGauge === 4
      ? setWaterGauge(step4)
      : waterGauge === 5
      ? setWaterGauge(step5)
      : waterGauge === 6
      ? setWaterGauge(step6)
      : waterGauge === 7
      ? setWaterGauge(step7)
      : setWaterGauge(step8);

  return (
    <>
      <StyledGauge className="container">
        {/* SVG url should be derived from state */}
        <MobileCardWater>
          <Icon svg={gaugeFill} alt={"Step 6"} />
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
