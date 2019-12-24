// IMPORTS
// react
import React from "react";
// router
import { NavLink } from "react-router-dom";
// styled components
import styled from "styled-components";
// helpers
import { test, flex } from "../../styles/global/Mixins";
<<<<<<< HEAD
// gauges
import LiveGauge from "../../components/molecules/gauge/Gauge";
=======
>>>>>>> staging

// HELPERS
const bgPicker = vertical => {
  if (vertical === "water") {
    return "#1575FF";
  } else if (vertical === "activity") {
    return "#FC5454";
  } else if (vertical === "sleep") {
    return "#FC54EB";
  } else if (vertical === "mental") {
    return "#FFA25F";
  } else if (vertical === "food") {
    return "#27AE60";
  } else if (vertical === "social") {
    return "#9B51E0";
  } else {
    return "#FFF";
  }
};

const colorPicker = vertical => {
  if (vertical === "water") {
    return "#6091D6";
  } else if (vertical === "activity") {
    return "#E36666";
  } else if (vertical === "sleep") {
    return "#FC54EB";
  } else if (vertical === "mental") {
    return "#DF8F53";
  } else if (vertical === "food") {
    return "#448961";
  } else {
    return "#FFF";
  }
};

const iconPicker = vertical => {
  if (vertical === "water") {
    return <i className="fas fa-tint"></i>;
  } else if (vertical === "activity") {
    return <i className="fas fa-running"></i>;
  } else if (vertical === "sleep") {
    return <i className="fas fa-bed"></i>;
  } else if (vertical === "mental") {
    return <i className="fas fa-volume-off"></i>;
  } else if (vertical === "food") {
    return <i className="fas fa-apple-alt"></i>;
  } else {
    return <i className="fas fa-smile"></i>;
  }
};

// COMPONENT
const MissionCard = props => {
  // handlers
  const cardClickHandler = e => {
    props.history.push("/mission-stats");
    console.log("firing");
  };

  return (
    <>
      <Container vertical={props.vertical} onClick={cardClickHandler}>
        <Gauge className="gauge">
          <LiveGauge
            actual={props.actual}
            goal={props.goal}
            vertical={props.vertical}
          />
          {iconPicker(props.vertical)}
        </Gauge>
        <p>
          {props.goal - props.actual} {props.description}
        </p>
        <span>{props.points} Points</span>
      </Container>
    </>
  );
};

// STYLED COMPONENTS
const Container = styled.div`
  width: 150px;
  height: 180px;
  box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
  border-radius: 3px;
  margin: 1rem 0.5rem;
  background-color: ${props => bgPicker(props.vertical)};
  padding: 1rem;
  color: #fff;
  ${flex.flexCol}

  // this i needs to change later on when i work out
        // the gauge functionality for the cards -JC
        // JC was smart enough to foist i on me -MM
        i {
    font-size: 3rem;
    margin: 2rem 0;
  }

  p {
    font-size: 1.5rem;
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
