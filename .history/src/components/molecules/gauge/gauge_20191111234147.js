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
        <Icon className="water-card" svg={step0} alt={"Step zero"} />

      </StyledGauge>
    </>
  );
};

const StyledGauge = styled.div.attrs(props => ({
  position: props.position,
  left: props.left,
  right: props.right,
  top: props.top,
  bottom
}))`
  .rectangle-37 {
    position: absolute;
    left: 0%;
    right: 0%;
    top: 0%;
    bottom: -10.88%;

    /* water / background blue */

    background: #cee2ff;
    /* mobile / dashboard / dropshadow */

    box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
    border-radius: 3px;
  }
  .water-card {
    /* water card */
    position: absolute;
    left: 26.52%;
    right: 27.27%;
    top: 9.52%;
    bottom: 48.98%;
  }
`;

export default Gauge;
