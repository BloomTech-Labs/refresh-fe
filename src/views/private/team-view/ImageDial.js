//IMPORTS
//react
import React, { useState, useEffect, useContext } from "react";
// contexts
import { TeamContext } from "../../../contexts/TeamContext";
//styled components
import styled from "styled-components";
// import axios from "axios";

const ImageDial = props => {
  const activeTeam = useContext(TeamContext);
  // const {teamData} = teamContext;

  console.log(`team`, activeTeam.members);

  const [thumb, setThumb] = useState();

  // console.log(teamMembers());
  // [""0""].user_id
  // useEffect(()=>{
  //     axios.get("https://dog.ceo/api/breed/husky/images")
  //     .then(res =>{
  //         props.debug && console.log(res.data.message[0]);
  //         setThumb(res.data.message)
  //     })
  // }, [])
  //handle change to store selected tick
  const handleChanges = e => {
    props.debug && console.log(e);
  };

  //Scale of numbers
  // const sliderScale = (unit, range) => {
  //   let items = [];
  //   for (let i = 0; i < range; i++) {
  //     items.push(
  //       <>
  //         <div className="bigtick tick">
  //           <img src={teamMembers[i].avatar} />
  //         </div>
  //       </>
  //     );
  //   }
  //   return items;
  // };

  //handle scroll for ticks
  const handleScroll = e => {};

  //   <ImgContainer onScroll={handleScroll}>
  //   {/* {sliderScale(1, teamMembers.length).map((x, i) => (
  //     <DialStuff key={i}>{x}</DialStuff>
  //   ))} */}
  //   {activeTeam.members.map((member, i) => {
  //     return <p key={i++}>{member.display_name}</p>;
  //   })}
  // </ImgContainer>

  //render
  return (
    <>
       <ImgContainer className="image-container">
          <div className="team-members">
            {activeTeam.members && activeTeam.members.map((member, j) => (
              <p key={j++}>{member.avatar}</p>
            ))}
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
    flex-direction: column;
    margin-left: 1rem;

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
const DialStuff = styled.div`
  flex: 0 0 auto;
`;

const NumberP = styled.p`
  margin-left: -1rem;
  font-family: Catamaran;
  font-weight: bold;
  color: #ffffff;
  font-size: 1.6rem;
`;
