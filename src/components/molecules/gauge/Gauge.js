import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ProgressLayer } from "./Progress";

const LiveGauge = ({ ...props }) => {
  const { actual, goal, vertical } = props;
  const [progress, setProgress] = useState({});

  //// Might be wise to use a use memo to hold previous state and compare so it doesn't need to re-render every time
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const normalizedValue = () => {
    let percent = actual / goal;
    if (isNaN(percent)) {
      console.info(`gauge fetching user data`);
    } else if (percent < 0) {
      return 0;
    } else if (percent >= 1) {
      return 100;
    }
    return percent;
  };

  // set state w/ normalized percent value
  useEffect(() => {
    setProgress(normalizedValue());
  }, [normalizedValue]);

  // dash-array and dash-offset logic for svg progress path
  const dashArray = `182.212 182.212`;
  const dashOffset = () => {
    let offset = 182.212 * (1 - progress);
    if (isNaN(offset)) {
      console.info(`gauge fetching user data`);
    } else if (offset >= 0) {
      return offset;
    } else {
      return 0.99;
    }
  };

  return (
    <>
      <Container
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow={progress}
        role="progressbar"
        className={`${vertical} gauge`}
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
  /* NON BREAKING BUG */
  /* menu:active is set to z-index: -4, 
  and gauges render on top of the menu.
  Setting gauges to anything below 0 result 
  in gauges rendering below mission cards.
  Dashboard items do not have this 
  issue, so perhaps it is how something is wrapped */
  /* z-index: 0; */
`;

export default LiveGauge;
