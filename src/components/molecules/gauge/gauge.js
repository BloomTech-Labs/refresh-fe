import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../../contexts/UserContext";
import styled from "styled-components";
import axios from "axios";

// Atoms
import Icon from "../../atoms/icon/icon";
// SVG Images
import step0 from "../../../images/gauge/gaugeSteps/step0.svg";
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
  { src: step1, altText: "1 glasses of water", currentWater: 0 },
  { src: step2, altText: "2 glasses of water", currentWater: 0 },
  { src: step3, altText: "3 glasses of water", currentWater: 0 },
  { src: step4, altText: "4 glasses of water", currentWater: 0 },
  { src: step5, altText: "5 glasses of water", currentWater: 0 },
  { src: step6, altText: "6 glasses of water", currentWater: 0 },
  { src: step7, altText: "7 glasses of water", currentWater: 0 },
  { src: step8, altText: "8 glasses of water", currentWater: 0 }
];

const Gauge = props => {
  const [waterImage, setWaterImage] = useState(waterGaugeImages)
  const [waterComplete, setWaterComplete] = useState({
    hydrationStats: 4
  });

  let gaugeFill =
    waterComplete === 0
      ? setWaterComplete(step0)
      : waterComplete === 1
      ? setWaterComplete(step1)
      : waterComplete === 2
      ? setWaterComplete(step2)
      : waterComplete === 3
      ? setWaterComplete(step3)
      : waterComplete === 4
      ? setWaterComplete(step4)
      : waterComplete === 5
      ? setWaterComplete(step5)
      : waterComplete === 6
      ? setWaterComplete(step6)
      : waterComplete === 7
      ? setWaterComplete(step7)
      : setWaterComplete(step8);

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

const Rectangle37 = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: -10.88%;

  /* water / background blue */

  background: #cee2ff;
  /* mobile / dashboard dropshadow */

  box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
  border-radius: 3px;
`;

const WaterCard = styled.div`
  /* water card */
  position: absolute;
  left: 26.52%;
  right: 27.27%;
  top: 9.52%;
  bottom: 48.98%;
`;

export default Gauge;
