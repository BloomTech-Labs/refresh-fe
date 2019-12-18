// IMPORTS
// react
import React, { useState, useEffect } from "react";
// styled components
import styled from "styled-components";
// helpers
import { test, flex } from "../../styles/global/Mixins";
// components
import Scorecards from "./Scorecards";

import axios from "axios";

import axiosWithAuth from "../../helpers/axiosWithAuth";

// COMPONENT
const Leaderboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => getData(), []);
  function getData() {
    axiosWithAuth()
      .get("/users")
      .then(res => {
        setUsers(res.data.users);
        console.log("GET on /users", res);
      })
      .catch(err => {
        console.log(err);
      });
  }
  console.log("display name", users);
  return (
    <>
      <LBTitle>Leaderboard</LBTitle>
      <LeaderboardList>
        <TextArea>
          {users.map(user => (
            <IndividualUser key={user.id}>
              {user.avatar ,user.display_name}
              <Points>
                <IndividualPoint>843</IndividualPoint>
                <IndividualPoint>POINTS</IndividualPoint>
              </Points>
            </IndividualUser>
          ))}
        </TextArea>
      </LeaderboardList>
    </>
  );
};

// STYLED COMPONENTS

const LBTitle = styled.div`
  color: white;
  font-size: 50px;
  display: flex;
  margin: 0 auto;
  width: fit-content;
`;
const IndividualUser = styled.div`
border-bottom: 2px solid #3E3D68
padding: 10px
display: flex
justify-content: space-between
align-items: center
width: 100%
`;
const TextArea = styled.div`
 display: flex
 flex-direction: column
 color: white
 font-size: 2rem
 margin: 0 10px
 
 `;

const LeaderboardList = styled.div``;

const Points = styled.div`
display: flex
flex-direction: column

align-items: flex-end

`;

const IndividualPoint = styled.div`
margin: .2rem
`

// EXPORT
export default Leaderboard;
