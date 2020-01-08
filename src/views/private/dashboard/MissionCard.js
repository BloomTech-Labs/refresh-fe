// IMPORTS
// react
import React from "react";
// router
// styled components
import styled from "styled-components";
// helpers
import { flex } from "../../../styles/global/Mixins";
// gauges
import LiveGauge from '../../../components/molecules/gauge/Gauge'


// COMPONENT
const MissionCard = props => {
  // handlers
  const {
    color,
    icon,
    goal,
    point_current,
    description,
    point_value,
    vertical
  } = props.mission;
  const cardClickHandler = e => {
    props.history.push("/mission-complete");
  };
  
  return (
    <>
      <Container color={color} onClick={cardClickHandler}>
        <Gauge>
          <LiveGauge
            actual={point_current}
            goal={goal}
            vertical={vertical}
          />
          <i className={icon}></i>
        </Gauge>
        <p>
          {goal <= point_current ? 0 : goal - point_current} {description}
        </p>
        <span>{point_value} Points</span>
      </Container>
    </>
  );
};

// STYLED COMPONENTS
const Container = styled.div`
  width: 36vw;
  max-width: 18rem;
  max-height: 18rem;
  height: calc(36vw);
  box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
  border-radius: 3px;
  margin: 1rem 0.5rem;
  background-color: ${props => props.color};
  padding: 1rem;
  color: #fff;
  ${flex.flexCol}

  @media screen and (max-width: 361px) {
    height: 50vw;
    width:50vw;
  }

  @media screen and (min-width: 1200px) {
    max-height: 17rem;
    max-width: 17rem;
  }

  // this i needs to change later on when i work out
  // the gauge functionality for the cards -JC
  // JC was smart enough to foist i on me -MM
  i {
    font-size: calc(100vw / 20);
    margin: 2rem 0;
    @media screen and (min-width: 1000px) {
      font-size: calc(100vw / 27);
    }
  }

  p {
    font-size: 1.6rem;
    letter-spacing: 0.025rem;
    align-self: flex-start;
  }

  span {
    font-weight: bold;
    align-self: flex-start;
    margin-top: auto;
  }
`;

const Gauge = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  margin-top: 1rem;
  margin-bottom: 2rem;
  ${flex.flexCol}
`;

// EXPORT
export default MissionCard;
