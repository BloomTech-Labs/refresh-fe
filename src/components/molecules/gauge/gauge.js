import React, { useState } from "react";
import styled from "styled-components";

const Gauge = () => {
  const [percentComplete, setPercentComplete] = useState(0);
  const [twelvePercentComplete, setTwelvePercentComplete] = useState(0.125);
  const [twentyFivePercentComplete, setTwentyFivePercentComplete] = useState(0.25);
  const [thirtySevenPercentComplete, thirtySevenPercentComplete] = useState(0.375);
  const [fiftyPercentComplete, setfiftyPercentComplete] = useState(0.5);
  const [twelvePercentComplete, setTwelvePercentComplete] = useState(0.625);
  const [twelvePercentComplete, setTwelvePercentComplete] = useState(0.75);
  const [twelvePercentComplete, setTwelvePercentComplete] = useState(0.875);
  const [twelvePercentComplete, setTwelvePercentComplete] = useState(1);
  return (
    <>
      <StyledGauge className="container"></StyledGauge>
    </>
  );
};

const StyledGauge = styled.div`
  .container {
    /* position: absolute; */
    width: 132px;
    height: 147px;
    /* left: 0px;
    top: 0px; */
    background-color: white;
  }
`;

export default Gauge;
