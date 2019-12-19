import React, { useState, useEffect } from "react";
import styled from "styled-components";

// helpers
import { test, flex } from "../../../styles/global/Mixins";
import { BaseLayer } from "./BaseLayer";
import { ProgressLayer } from "./ProgressLayer";


const LiveGauge = ({ ...props }) => {
  const { actual, goal } = props;
  const percent = (actual / goal) * 100;

  const value = percent => {
    if (percent < 0) {
      return 0;
    } else if (percent > 100) {
      return 100;
    }
    return percent;
  };

  const [progress, setProgress] = useState(percent);

  const dashArray = `${progress} ${100 - progress}`;

  useEffect(() => {
    //set progress to value(percent)
  })

  return (
    <>
      <Container className="container">
        <ProgressLayer dashArray={dashArray} />
        <BaseLayer />
      </Container>
    </>
  );
};

const Container = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  margin-bottom: 4px ${flex.flexCol};
`;

export default LiveGauge;
