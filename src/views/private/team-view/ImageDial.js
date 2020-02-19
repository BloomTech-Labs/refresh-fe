//IMPORTS
//react
import React, { useState, useContext } from "react";
import SwipeableViews from "react-swipeable-views";
import { bindKeyboard } from "react-swipeable-views-utils";
// contexts
import { TeamContext } from "../../../contexts/TeamContext";
//styled components
import styled from "styled-components";

const ImageDial = (props, children) => {
  const activeTeam = useContext(TeamContext);
  // const {teamData} = teamContext;

  console.log(`team`, activeTeam.members);

  const [thumb, setThumb] = useState();

  //handle change to store selected tick
  const handleChanges = e => {
    props.debug && console.log(e);
  };

  //handle scroll for ticks
  const handleScroll = e => {};
  // slide styles
  const styles = {
    root: {
      marginTop: 0
    },
    slideContainer: {
      width: "5rem",
      height: "5rem",
      marginRight: "1rem",
      marginTop: 0
    },
    slide: {
      marginTop: 0
    }
  };
  const BindKeyboardSwipeableViews = bindKeyboard(SwipeableViews);
  return (
    <>
      <ImgContainer className="image-container">
        <div className="team-members bigtick">
          <BindKeyboardSwipeableViews
            className="swipeable-views"
            style={styles.root}
            slideStyle={styles.slideContainer}
          >
            {activeTeam.members &&
              activeTeam.members.map((member, j) => (
                <img key={j++} src={member.avatar}></img>
              ))}
          </BindKeyboardSwipeableViews>
        </div>
      </ImgContainer>
    </>
  );
};

export default ImageDial;

// STYLED COMPONENTS
const ImgContainer = styled.div`
  max-width: 85vw;
  height: calc(100vh / 10);
  display: flex;
  flex-wrap: nowrap;
  align-content: center;
  align-self: center;
  align-items: center;
  overflow-x: auto;
  font-size: 2rem;

  .bigtick {
    display: flex;
    flex-direction: row;
    img {
      max-width: 100%;
      width: 5rem;
      max-height: 100%;
      height: 5rem;
      border-radius: 50%;
    }
  }

  .smalltick {
    margin-top: -7rem;
    margin-left: 2rem;
  }

  .active {
    color: #e05cb3;
    p {
      color: #e05cb3;
    }
    svg {
      line {
        stroke: #e05cb3;
      }
    }
  }
`;

const NumberP = styled.p`
  margin-left: -1rem;
  font-family: Catamaran;
  font-weight: bold;
  color: #ffffff;
  font-size: 1.6rem;
`;
