// IMPORTS
// react
import React, { useState, useContext } from "react";
// router
import { Link } from "react-router-dom";
// styled components
import styled from "styled-components";
// swipeable views
import SwipeableViews from "react-swipeable-views";
// contexts
import { UserContext } from "../../../contexts/UserContext";
import { UserMissionsContext } from "../../../contexts/UserMissionsContext";
import { TeamContext } from "../../../contexts/TeamContext";
// helpers
import { flex } from "../../../styles/global/Mixins";
// components
import Pagination from "./Pagination";
import ImageDial from "./ImageDial";
// images
import waves from "../../../images/Onboarding/waves.svg";


// COMPONENT
const TeamView = props => {
  // contexts
  const activeUser = useContext(UserContext);
  const userMissions = useContext(UserMissionsContext);
  const teamContext = useContext(TeamContext)
  const { missions } = userMissions;
  console.log(teamContext)
  // state hooks
  const [feedSlide, setFeedSlide] = useState({
    // eslint-disable-line no-unused-vars
    slide: {
      padding: 15,
      color: "#FFF",
      minHeight: "15rem",
      minWidth: "25rem",
      fontSize: "1.5rem"
    },
    slide1: {
      background: "#3D3B91"
    },
    slide2: {
      background: "#3D3B91"
    },
    slide3: {
      background: "#3D3B91"
    }
  });

  // This is an active hook that will remain, but there is dummy data interjected for the time being
  // until Roman finishes sending final payloads to us. Once that happens and we bring in real data,
  // we can init state using only the default slide styles and an empty slides array that is then
  // populated based on the pending missions array coming back from the server
  const [missionSlide, setMissionSlide] = useState({
    // eslint-disable-line no-unused-vars
    slide: {
      padding: 15,
      color: "#FFF",
      minHeight: "15rem",
      minWidth: "25rem"
    },
    slides: [
      {
        background: "#3D3B91",
        title: "Zoom Dance Party",
        description:
          "Time for a little hoe-down throw down. Tuesday night at 5pm PST",
        point_value: "100",
        date: "Tuesday, 5pm PST"
      },
      {
        background: "#3D3B91",
        title: "Edabit Stand Off",
        description:
          "Are you ready to put your edabit skills to the test? Stand off and see who can do the most. Thursday night at 7pm PST",
        point_value: "90",
        date: "Thursday, 7pm PST"
      },
      {
        background: "#3D3B91",
        title: "Team Game Night",
        description:
          "We reached the end of another week team! Time to celebrate with team game night! Friday night at 5pm PST",
        point_value: "120",
        date: "Friday, 5pm PST"
      }
    ]
  });

  let teamMembers = [
    {
      displayName: "Serenity",
      avatar:
        "https://images.unsplash.com/photo-1495516372021-9c815fa7e668?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
      bio: "Web Development"
    },

    {
      displayName: "Wade",
      avatar:
        "https://images.unsplash.com/photo-1429117257281-73c32df3dcdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
      bio: "Web Development"
    },

    {
      displayName: "Juanita",
      avatar:
        "https://images.unsplash.com/photo-1494788185066-84d048a0115a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
      bio: "Web Development"
    },

    {
      displayName: "Albert",
      avatar:
        "https://images.unsplash.com/photo-1461783436728-0a9217714694?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
      bio: "Web Development"
    },

    {
      displayName: "Debra",
      avatar:
        "https://images.unsplash.com/photo-1524154217857-45f012d0f167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
      bio: "Web Development"
    },

    {
      displayName: "Nathan",
      avatar:
        "https://images.unsplash.com/photo-1477954417131-efc62c1b25cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
      bio: "Web Development"
    },

    {
      displayName: "Glenn",
      avatar:
        "https://images.unsplash.com/photo-1542643917516-fc8735e55612?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
      bio: "Web Development"
    },

    {
      displayName: "Brandon",
      avatar:
        "https://images.unsplash.com/photo-1490631537525-3b00d26805f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
      bio: "Web Development"
    }
  ];

  return (
    <>
      <TVWrapper>
        <TVContainer>
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

          <h1>
            {UserContext.cohort || "Web 22 Maxine"} {UserContext.fname}
          </h1>

          <TVSection>
            <SectionTitle>
              <h2>Teammates</h2>
            </SectionTitle>
            <SectionCTA>
              <Link to="/team-list">view all ></Link>
            </SectionCTA>
            <ImageDial />
          </TVSection>

          <TVSection>
            <SectionTitle>
              <h2>Team Feed</h2>
            </SectionTitle>
            <SwipeableViews>
              <Slide style={{ ...feedSlide.slide, ...feedSlide.slide1 }}>
                <div className="feedStyling">
                  <h2>
                    {teamMembers[2].displayName}, {teamMembers[4].displayName}{" "}
                    and {teamMembers[5].displayName}{" "}
                    <span>completed their water goals for the day</span>
                  </h2>
                  <p>About ten minutes ago</p>
                  <div>
                    <FeedImg src={teamMembers[2].avatar} />
                    <FeedImg src={teamMembers[4].avatar} />
                    <FeedImg src={teamMembers[5].avatar} />
                  </div>
                </div>
              </Slide>

              <Slide style={{ ...feedSlide.slide, ...feedSlide.slide2 }}>
                <div className="feedStyling">
                  <h2>
                    {teamMembers[3].displayName}, {teamMembers[6].displayName}{" "}
                    and {teamMembers[7].displayName}{" "}
                    <span>completed their activity goals for the day</span>
                  </h2>
                  <p>About one hour ago</p>
                  <div>
                    <FeedImg src={teamMembers[3].avatar} />
                    <FeedImg src={teamMembers[6].avatar} />
                    <FeedImg src={teamMembers[7].avatar} />
                  </div>
                </div>
              </Slide>

              <Slide style={{ ...feedSlide.slide, ...feedSlide.slide3 }}>
                {teamContext.members && teamContext.members.map((member,i)=>{
                return(<div className="feedStyling">
                  <h2>
                    {teamMembers[1].displayName}, {teamMembers[4].displayName}{" "}
                    and {teamMembers[6].displayName}{" "}
                    <span>completed their sleep goals for the day</span>
                  </h2>
                  <p>About three hours ago</p>
                  <div>
                    <FeedImg src={teamMembers[1].avatar} />
                    <FeedImg src={teamMembers[4].avatar} />
                    <FeedImg src={teamMembers[6].avatar} />
                  </div>
                </div>)
                })}
              </Slide>
            </SwipeableViews>
          </TVSection>

          <TVSection>
            <SectionTitle>
              <h2>Team Missions</h2>
            </SectionTitle>
            <SectionCTA>
              <Link to="/create-team">Create Mission</Link>
            </SectionCTA>

            <SwipeableViews>
              {missionSlide.slides.map((mission, i) => {
                return (
                  <Slide style={{ ...missionSlide.slide, ...mission }}>
                    <h2>{mission.title}</h2>
                    <span className="points">{mission.point_value} pts</span>

                    <p>{mission.description}</p>

                    <span>{mission.date}</span>

                    <button className="accept">Accept</button>
                    <button>Decline</button>
                  </Slide>
                );
              })}
            </SwipeableViews>

            <Pagination />
          </TVSection>
        </TVContainer>
      </TVWrapper>
    </>
  );
};

// STYLED COMPONENTS
const TVWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  padding-top: 10rem;
  background-color: #4742bc;
  background-image: url(${waves});
`;

const TVContainer = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;

  h1 {
    text-align: center;
    color: #fff;
    font-weight: bold;
    font-size: 2rem;
    letter-spacing: 0.25rem;
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

const TVSection = styled.div`
  width: 100%;
  margin: 2rem 0;
  margin-bottom: 0;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;

  h2 {
    color: #b8b7e1;
  }
`;

const SectionTitle = styled.div`
  width: 50%;
  height: 4rem;
`;

const SectionCTA = styled.div`
  width: 50%;
  height: 4rem;
  color: #fff;
  text-align: right;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  letter-spacing: 0.15rem;

  a {
    color: #fff;
    text-decoration: none;
  }
`;

const Slide = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;

  h2 {
    font-weight: bold;
    color: #e6e6e6;
    font-size: 1.5rem;
    letter-spacing: 0.035em;
  }

  p {
    font-size: 1.2rem;
    line-height: 150%;
    color: #e6e6e6;
  }

  span {
    font-size: 1.2rem;
    font-weight: bold;
  }

  span.points {
    background-color: #e9cc2f;
    padding: 0.5rem;
    color: #4e4829;
    font-size: 1rem;
    font-weight: bolder;
    border-radius: 3px;
  }

  button {
    background-color: transparent;
    border: none;
    color: #fff;
    font-size: 1rem;
  }

  & .accept {
    color: #e05cb3;
  }

  & .feedStyling {
    display: flex;
    flex-direction: column;

    h2,
    p {
      padding: 0.5rem;
    }

    span {
      font-size: 1.4rem;
      font-weight: normal;
    }
  }
`;

const FeedImg = styled.img`
  max-width: 100%;
  width: 3rem;
  max-height: 100%;
  height: 3rem;
  margin: 0.5rem;
  border-radius: 50%;
`;

// EXPORT
export default TeamView;
