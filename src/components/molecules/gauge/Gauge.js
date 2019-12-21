import React, { useState, useEffect } from "react";
import styled from "styled-components";

// helpers
import { test, flex } from "../../../styles/global/Mixins";
import { ProgressLayer } from "./Progress";

const LiveGauge = ({ ...props }) => {
  const { actual, goal, vertical, value } = props;

  const [progress, setProgress] = useState({});

  const normalizedValue = () => {
    let percent = (actual / goal) * 100;
    if (percent < 0) {
      return 0;
    } else if (percent > 100) {
      return 100;
    }
    return Math.round(percent);
  };

  useEffect(() => {
    setProgress(normalizedValue());
  }, []);
  // console.log(props);
  console.log(`[value()]:`, vertical, normalizedValue());
  // console.log(`[progress]:`, vertical, progress);
  const dashArray = `${progress} ${100 - progress}`;
  console.log(dashArray);

  return (
    <>
      <Container
        className="container"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={progress}
        role="progressbar"
      >
        <ProgressLayer dashArray={dashArray} value={progress} />
      </Container>
    </>
  );
};

const Container = styled.div`
  position: absolute;

`;

export default LiveGauge;
