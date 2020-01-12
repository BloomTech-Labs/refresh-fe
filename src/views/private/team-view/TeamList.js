//IMPORTS
//react
import React, { useState, useEffect, useContext } from "react"; // eslint-disable-line no-unused-vars
// contexts
import { TeamContext } from "../../../contexts/TeamContext";
//styled-components
import styled from "styled-components";
//axios with auth
import { axiosWithAuth } from "../../../helpers/axiosWithAuth";
//images
import waves from "../../../images/Onboarding/waves.svg";
//atoms
import LoadingSpinner from "../../../components/atoms/spinner/spinner"; // eslint-disable-line no-unused-vars
//swipeable
import {
  SwipeableList,
  SwipeableListItem
} from "@sandstreamdev/react-swipeable-list";
import "@sandstreamdev/react-swipeable-list/dist/styles.css";

const TeamList = props => {
  const activeTeam = useContext(TeamContext);
  const teamMembers = {activeTeam}
console.log(`teamMembers|TeamList:`, teamMembers);

  //route
  const routeToTLView = e => {
    e.preventDefault();
    props.history.push("/team-view");
  };

  //swipe left data
  const swipeLeftIcon = name => ({
    content: (
      <IconLogo>
        <i className="far fa-trash-alt"></i>
      </IconLogo>
    ),
    action: () => console.log("swiped!")
  });

  //prop for reusable card
  const TeamCardSwipe = i => (
    <TMCard>
      <TMAvatar className="avatarpic" src={teamMembers[i].avatar} />
      <TMInfo>
        <TMName>{teamMembers[i].display_name}</TMName>
        <TMBio>{teamMembers[i].bio}</TMBio>
      </TMInfo>
    </TMCard>
  );

  

  const teamListScroll = (unit, range) => {
    let items = [];
    for (let i = 0; i < range; i++) {
      {
        items.push(
          <SwipeHolder>
            <SwipeableList threshold={0.25}>
              <SwipeableListItem
                swipeLeft={swipeLeftIcon("Circle logo eventually")}
              >
                {TeamCardSwipe(i)}
              </SwipeableListItem>
            </SwipeableList>
          </SwipeHolder>
        );
      }
    }
    return items;
  };
  const handleScroll = e => {};

  return (
    <TVContainer>
      <ButtonNoColor onClick={routeToTLView}>&lt;</ButtonNoColor>
      <Header>Web 22 Maxine</Header>
      <CardTitle>Team Lead</CardTitle>
      <TMCard>
        <TMAvatar
          src={
            "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
          }
        />
        <TMInfo>
          <TMName>Maxine Woods</TMName>
          <TMBio>Web Development</TMBio>
        </TMInfo>
      </TMCard>
      <SectionBreak />
      <CardTitle className="team-title">Team</CardTitle>
      <ImgContainer onScroll={handleScroll}>
        {teamListScroll(1, teamMembers.length).map((x, i) => (
          <DialStuff key={i}>{x}</DialStuff>
        ))}
      </ImgContainer>
    </TVContainer>
  );
};

// STYLED COMPONENTS
const TVContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Catamaran", sans-serif;
  margin: auto;
  line-height: 1.5;
  background-color: #4742bc;
  background-image: url(${waves});
  background-size: contain;
  color: #7f7cca;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  padding: 8%;

  .team-title {
    margin: 5% 0;
  }
`;

const ButtonNoColor = styled.a`
  margin-right: 89%;
  font-size: 2rem;
  font-style: medium;
  color: #ccc9ff;
`;

const Header = styled.h1`
  font-weight: bold;
  font-size: calc(110% + 2vw);
  margin-bottom: 1rem;
  letter-spacing: 3.5px;
  color: #ffffff;
`;

const CardTitle = styled.p`
  font-size: calc(95% + 0.08vw);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 2.6rem;
  letter-spacing: 2px;
  color: #b8b7e1;
  align-self: flex-start;
`;
const TMCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #3d3b91;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  margin-bottom: 2%;
  min-height: 7rem;
`;

const TMName = styled.p`
  font-size: small;
  color: #e6e6e6;
  letter-spacing: 0.04em;
`;

const TMAvatar = styled.img`
  max-width: 100%;
  width: 5rem;
  max-height: 100%;
  height: 5rem;
  border-radius: 50%;
`;

const TMBio = styled.p`
  font-size: x-small;
  color: #e6e6e6;
  letter-spacing: 0.04em;
`;

const TMInfo = styled.div`
  flex-basis: 70%;
`;

const SectionBreak = styled.div`
  width: 100%;
  margin-top: 5%;
  border-top: 3px solid rgba(71, 69, 161, 0.85);
`;

const IconLogo = styled.div`
  background-color: #fc5454;
  color: white;
  display: flex;
  align-items: center;
  padding: 2rem;
  margin: 0 2rem 1rem;
  border-radius: 50%;
`;

const ImgContainer = styled.div`
  max-width: 85vw;
  height: calc(100vh);
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  align-self: center;
  align-items: center;
  overflow-y: auto;
  font-size: 2rem;

  div {
    p:nth-of-type(1) {
      padding-top: 1rem;
    }
    .avatarpic {
      max-width: 100%;
      width: 5rem;
      max-height: 100%;
      height: 5rem;
      border-radius: 50%;
    }
  }
`;

const SwipeHolder = styled.div`
  .SwipeableList_swipeableList__3dl6y {
    background: none;
  }

  .SwipeableListItem_content__1k1mn {
    background-color: transparent;
  }
`;
const DialStuff = styled.div`
  flex: 0 0 auto;
  width: 85vw;
`;

export default TeamList;
