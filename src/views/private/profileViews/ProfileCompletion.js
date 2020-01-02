import React from "react";
import styled from "styled-components";
//import {Route} from 'react-router-dom';
import User from '../../../images/profile/user.svg';
import Arrow from '../../../images/profile/purple_right_arrow.svg';
//import EditProfile from '../profileViews/EditProfile.js';


const ProfileContainer = styled.div`
  position: absolute;
  width: 134px;
  height: 207px;
  left: 57.3%;
  top: 62.9%;
  /* main / side */

  background: #3d3b91;
  /* mobile / dashboard dropshadow */

  box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
  border-radius: 2px;
`;

const ProfileText = styled.text`
  position: absolute;
  left: 32.84%;
  right: 32.84%;
  top: 9.18%;
  bottom: 86.47%;

  font-family: Catamaran;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 44%;
  /* or 7px */

  letter-spacing: 0.02em;

  /* main / TEXT */

  color: #e6e6e6;
`;

const UserAv = styled.img`
  position: absolute;
  width: 50px;
  left: 33.58%;
  right: 34.33%;
  top: 24.64%;
  bottom: 54.59%;
  ${User}
  /* main / TEXT */

  background: #e6e6e6;
`;
const PercentText = styled.div`
position: absolute;
width: 40%;
left: 30.19%;
right: 26.12%;
top: 57.11%;
bottom: 41.06%;

font-family: 'Catamaran';
font-style: normal;
font-weight: 500;
font-size: 3.55rem;
line-height: 44%;
/* or 9px */

letter-spacing: 0.02em;

/* main / TEXT */

color: #E6E6E6;
`
const Percentage =styled.text`
position: absolute;
left: 61.19%;
right: 26.25%;
top: 57.5%;
bottom: 41.06%;

font-family: Catamaran;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 44%;
/* or 9px */

letter-spacing: 0.02em;

/* main / TEXT */

color: #E6E6E6;
`

const CompletionText = styled.text`
  position: absolute;
  left: 22.8%;
  right: 25.3%;
  top: 78.6%;
  bottom: 28.5%;

  font-family: Catamaran;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 44%;
  /* identical to box height, or 6px */

  letter-spacing: 0.02em;

  /* main / TEXT */

  color: #e6e6e6;
`;
const FinishNowContainer = styled.div`
position: absolute;
left: 0%;
right: 0%;
top: 83.57%;
bottom: 0%;
background: #3d3b91;
/* mobile / dashboard dropshadow */
box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
border-radius: 0px 0px 2px 2px;
`;
const FinishNowText = styled.text`
position: absolute;
height: 85%;
padding: 6%;
left: 1.24%;
right: 22.27%;
top: 27.86%;
bottom: 6.76%;
font-family: Catamaran;
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 44%;
/* or 5px */
letter-spacing: 0.02em;
/* main / TEXT */
color: #e6e6e6;
`;
const FinnishArrow= styled.img`
position: absolute;
width: 40%;
height: 40%;
left: 82.09%;
right: 11.19%;
top: 55.37%;
bottom: 7.25%;
/* main / TEXT */

  
`;

const ProfileCompletion = props => {
  //routes
  const editProfileRoute = e => {
    e.preventDefault();
    props.history.push('/edit-profile')
  }

  return (
    <>
    
      <ProfileContainer>
        <ProfileText>profile</ProfileText>
        <UserAv src={User}/>
        <PercentText>75</PercentText>
        <Percentage>%</Percentage>
        <CompletionText>completion</CompletionText>
        <FinishNowContainer onClick={editProfileRoute}><FinishNowText>Finish now</FinishNowText>
        <FinnishArrow src={Arrow}/>
        </FinishNowContainer> 
      </ProfileContainer>
    </>
  );
};

export default ProfileCompletion;
