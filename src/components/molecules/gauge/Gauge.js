import React, { useState, useEffect } from "react";
import styled from "styled-components";

// helpers
import { test, flex } from "../../../styles/global/Mixins";
import { ProgressLayer } from "./Progress";

const LiveGauge = ({ ...props }) => {
  const { actual, goal, vertical } = props;

  const [progress, setProgress] = useState({});
  // Might be wise to use a use memo to hold previous state and compare so it doesn't need to re-render every time
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const normalizedValue = () => {
    let percent = actual / goal;
    // console.log(percent);

    if (percent < 0) {
      return 0;
    } else if (percent >= 1) {
      return 100;
    }
    return percent;
  };

  useEffect(() => {
    setProgress(normalizedValue());
  }, [normalizedValue]);

  // console.log(props);
  // console.log(`[value()]:`, vertical, normalizedValue());
  // console.log(`[progress]:`, vertical, progress);

  const dashArray = `182.212 182.212`;
  const dashOffset = () => {
    let offset = 182.212 * (1 - progress);
    // console.log(`[dashoffset inside func]`, offset);
    return offset;
  };
  // console.log(`[dashoffset after func]`, dashOffset());

  return (
    <>
      <Container
        className="container"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={progress}
        role="progressbar"
      >
        <ProgressLayer
          dashArray={dashArray}
          dashOffset={dashOffset()}
          value={progress}
        />
      </Container>
    </>
  );
};

const Container = styled.div`
  position: absolute;
`;

export default LiveGauge;
