/* eslint-disable react-hooks/exhaustive-deps */
//IMPORTS
//react
import React, { useState, useEffect, useContext } from "react"; // eslint-disable-line no-unused-vars
// router
import { Link } from "react-router-dom";
//styled-components
import styled from "styled-components";
//axios with auth
import { axiosWithAuth } from "../../../helpers/axiosWithAuth";
// helpers
import { flex } from "../../../styles/global/Mixins";
//images
import waves from "../../../images/Onboarding/waves.svg";
// contexts
import { UserContext } from "../../../contexts/UserContext";
import { UserMissionsContext } from "../../../contexts/UserMissionsContext";
import { TeamContext } from "../../../contexts/TeamContext";
//atoms
import LoadingSpinner from "../../../components/atoms/spinner/spinner"; // eslint-disable-line no-unused-vars
//swipeable
import {
  SwipeableList,
  SwipeableListItem
} from "@sandstreamdev/react-swipeable-list";
import "@sandstreamdev/react-swipeable-list/dist/styles.css";

//styled color picker
const colorPicker = (rank, displayName) => {
  if (displayName === "Serenity Webb") {
    return "transparent";
  } else if (rank < 4) {
    return "#E05CB3";
  } else {
    return "#fff";
  }
};

const TeamList = props => {
  // contexts
  const activeUser = useContext(UserContext);
  const userMissions = useContext(UserMissionsContext);
  const activeTeam = useContext(TeamContext);
  const { missions } = userMissions;
  const { members } = activeTeam;

  const [team, setTeam] = useState([]);

  useEffect(() => {
    if (!activeTeam) {
      return <LoadingSpinner />;
    }
    setTeam({ members });
  }, [activeTeam]);

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

  const TeamCardSwipe = i => (
    <TMCard>
      <Rank rank={team[i].id} displayName={team[i].display_name}>
        <div>{team[i].id}</div>
      </Rank>
      <TMAvatar className="avatarpic" src={team[i].avatar} />
      <TMInfo>
        <TMName>{team[i].display_name}</TMName>
        <TMBio>{team[i].bio}</TMBio>
      </TMInfo>
      <Points>
        {team[i].points}
        <br /> <span>Points</span>
      </Points>
    </TMCard>
  );

  const teamListScroll = (unit, range) => {
    let items = [];
    for (let i = 0; i < range; i++) {
      // eslint-disable-next-line no-lone-blocks
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

  // 'a["b-a"][0]')

  const peeps = Object.values(activeTeam)[4];
  console.log(peeps);
  const peepsmapped = peeps.map(peep => {
    return peep;
  });
  console.log(Object.entries(peepsmapped));

  return (
    <TVContainer>
      {/* <ButtonNoColor onClick={routeToTLView}>&lt;</ButtonNoColor> */}
      <User>
        <Link to="/coming-soon">
          <i className="fas fa-bell"></i>
        </Link>
        <Link to="/profile-overview">
          <Avatar>
            {activeUser.avatar && (
              <img src={activeUser.avatar} alt="User avatar" />
            )}
          </Avatar>
        </Link>
      </User>
      <Header>Leaderboard</Header>
      <ImgContainer onScroll={handleScroll}>
        {teamListScroll(1, team.length).map((x, i) => (
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
  margin-top: 5rem;
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
  margin-left: 1rem;
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
  margin-left: 1rem;
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

const Rank = styled.div`
  margin: 2rem;

  div {
    width: 2.5rem;
    height: 2.5rem;
    background-color: ${props => colorPicker(props.rank, props.displayName)}
    color: ${props => (props.rank <= 3 ? "#FFF" : "#E05CB3")};
    border-radius: 100px;
    font-size: 1.5rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    }
`;

const Points = styled.div`
  margin: 1rem;
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;

  span {
    font-weight: normal;
  }
`;

const User = styled.div`
  width: 10rem;
  height: 5rem;
  position: absolute;
  top: 3rem;
  right: 3rem;
  ${flex.flexRowNoWrapAround}

  i {
    font-size: 2rem;
  }

  a {
    color: #ccc9ff;
  }
`;

const Avatar = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-image: url("https://i1.wp.com/grueneroadpharmacy.com/wp-content/uploads/2017/02/user-placeholder-1.jpg?ssl=1");
  background-size: cover;
  img {
    width: 100%;
    border-radius: 50%;
  }
`;

export default TeamList;
