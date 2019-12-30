// IMPORTS
// react
import React, { useState, useEffect } from "react";
// styled components
import styled from "styled-components";
// helpers
import { test, flex } from "../../../styles/global/Mixins";

const MissionCard = props => {
  // props destructuring
  const {
    icon,
    mission_id,
    description,
    color,
    point_value,
    setSelectedMission,
    vertical,
    handleDrawer
  } = props.mission;
  // state hooks
  const [selected, setSelected] = useState(false);

  // useEffect
  useEffect(() => {
    setSelected(false);
  }, []);

  // handlers
  const selectedHandler = e => {
    setSelected(true);
    setSelectedMission(props.mission);
  };

  return (
    <CardContainer
      vertical={vertical}
      selected={selected}
      color={color}
      icon={icon}
      onClick={() => {
        handleDrawer();
        selectedHandler();
      }}
    >
      <i className={icon}></i>

      <p>{description}</p>
    </CardContainer>
  );
};

// STYLED COMPONENTS
const CardContainer = styled.div`
    width: 30vw;
    max-width: 14rem;
    max-height: 14rem;
    height: calc(36vw);
    box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
    border-radius: 3px;
    background-color: ${props => props.color};
    color: #FFF;
    margin: 2rem;
    padding: 1rem;
    opacity: ${props => (props.selected === true ? "0.5" : "1")};
    ${flex.flexCol}
    overflow-y: auto;
    &:hover {
      cursor: pointer;
    }
    @media screen and (max-width: 330px) {
      height: calc(50vw);
    }

        i {
            font-size: 2.5rem;
            margin: 2rem 0;
        }

        p {
            font-size: 1.6rem;
            padding: 1rem;
            text-align: center;
        }
`;

// EXPORT
export default MissionCard;
