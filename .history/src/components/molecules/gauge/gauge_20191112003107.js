import React, { useState } from "react";
import styled from "styled-components";
import Icon from "../../atoms/icon/icon";

import step0 from "../../../images/gauge/gaugeSteps/step0.svg";
import step1 from "../../../images/gauge/gaugeSteps/step1.svg";
import step2 from "../../../images/gauge/gaugeSteps/step2.svg";
import step3 from "../../../images/gauge/gaugeSteps/step3.svg";
import step4 from "../../../images/gauge/gaugeSteps/step4.svg";
import step5 from "../../../images/gauge/gaugeSteps/step5.svg";
import step6 from "../../../images/gauge/gaugeSteps/step6.svg";
import step7 from "../../../images/gauge/gaugeSteps/step7.svg";
import step8 from "../../../images/gauge/gaugeSteps/step8.svg";

const Gauge = () => {
  const [percentComplete, setPercentComplete] = useState(0);
  const [completeOne, setCompleteOne] = useState(0.125);
  const [completeTwo, setcompleteTwo] = useState(0.25);
  const [completeThree, setCompleteThree] = useState(0.375);
  const [completeFour, setCompleteFour] = useState(0.5);
  const [completeFive, setCompleteFive] = useState(0.625);
  const [completeSix, setCompleteSiz] = useState(0.75);
  const [completeSeven, setCompleteSeven] = useState(0.875);
  const [completeEight, setCompleteEight] = useState(1);
  return (
    <>
      <StyledGauge className="container rectangle37">
        {/* SVG url should be derived from state */}
        <MobileCardWater>
          <Rectangle37>
            <WaterCard>
              <Icon svg={step6} alt={"Step 6"} />
            </WaterCard>
          </Rectangle37>
        </MobileCardWater>
      </StyledGauge>
    </>
  );
};

const StyledGauge = styled.div`
  padding-top: 10rem;
  margin-left: 12rem;
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

const WaterIntake = styled.div`
  position: absolute;
  left: 7.58%;
  right: 12.12%;
  top: 57.14%;
  bottom: 27.21%;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 93.19%;
  /* or 12px */

  display: flex;
  align-items: center;
  letter-spacing: 0.02em;

  /* water / text blue */

  color: #6091d6;
`;
const WaterPoints = styled.div`
  position: absolute;
  left: 7.58%;
  right: 3.79%;
  top: 93.2%;
  bottom: -10.88%;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 10px;
  line-height: 93.19%;
  /* or 9px */

  display: flex;
  align-items: center;
  letter-spacing: 0.02em;

  /* water / primary */

  color: #1575ff;
`;
export default Gauge;
