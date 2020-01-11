//IMPORTS
//react
import React, { useState, useEffect, useContext } from "react";
// contexts
import { TeamContext } from "../../../contexts/TeamContext";
//styled components
import styled from "styled-components";
// import axios from "axios";

const ImageDial = props => {
  const teamContext = useContext(TeamContext);
  const [team, setTeam] = useState({});
  useEffect(() => {
    setTeam(teamContext);
  }, [teamContext]);
  console.log(`team`, team);

  const [thumb, setThumb] = useState();

  // let teamMembers = [
  //   {
  //     displayName: "Serenity Webb",
  //     avatar:
  //       "https://images.unsplash.com/photo-1495516372021-9c815fa7e668?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  //     bio: "Web Development"
  //   },

  //   {
  //     displayName: "Wade Fisher",
  //     avatar:
  //       "https://images.unsplash.com/photo-1429117257281-73c32df3dcdc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  //     bio: "Web Development"
  //   },

  //   {
  //     displayName: "Juanita Fox",
  //     avatar:
  //       "https://images.unsplash.com/photo-1494788185066-84d048a0115a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  //     bio: "Web Development"
  //   },

  //   {
  //     displayName: "Albert Cooper",
  //     avatar:
  //       "https://images.unsplash.com/photo-1461783436728-0a9217714694?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  //     bio: "Web Development"
  //   },

  //   {
  //     displayName: "Debra Williamson",
  //     avatar:
  //       "https://images.unsplash.com/photo-1524154217857-45f012d0f167?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  //     bio: "Web Development"
  //   },

  //   {
  //     displayName: "Nathan Alexander",
  //     avatar:
  //       "https://images.unsplash.com/photo-1477954417131-efc62c1b25cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  //     bio: "Web Development"
  //   },

  //   {
  //     displayName: "Glenn Ramirez",
  //     avatar:
  //       "https://images.unsplash.com/photo-1542643917516-fc8735e55612?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  //     bio: "Web Development"
  //   },

  //   {
  //     displayName: "Brandon Howard",
  //     avatar:
  //       "https://images.unsplash.com/photo-1490631537525-3b00d26805f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
  //     bio: "Web Development"
  //   }
  // ];

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
  const sliderScale = (unit, range) => {
    let items = [];
    for (let i = 0; i < range; i++) {
      items.push(
        <>
          <div className="bigtick tick">
            <img src={team.members[i].avatar} />
          </div>
        </>
      );
    }
    return items;
  };

  //handle scroll for ticks
  const handleScroll = e => {};

  //render
  return (
    <>
      {/* {team.map((members, i) => {
        return (
          <p key={i++} members={members} {...props}>
            mapped
          </p>
        );
      })} */}
      <ImgContainer onScroll={handleScroll}>
        {sliderScale(1, team.length).map((x, i) => (
          <DialStuff key={i}>{x}</DialStuff>
        ))}
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
