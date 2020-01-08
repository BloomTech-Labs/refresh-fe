import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import User from "../../../images/profile/user.svg";
import Arrow from "../../../images/profile/purple_right_arrow.svg";

const ProfileContainer = styled.div`
position: absolute;
margin: 0 auto;
width: 13.4rem;
height: 20.7rem;
left: 20.8rem;
top: 38.7rem;
background: #3d3b91;
/* mobile / dashboard dropshadow */box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
border-radius: 0.125rem;
`;

const ProfileText = styled.p`
position: absolute;
left: 32.84%;
right: 32.84%;
top: 9.18%;
bottom: 86.47%;
font-family: Catamaran;
font-style: normal;
font-weight: normal;
font-size: 1.6rem;
line-height: .7rem;
/* or 7px */
letter-spacing: 0.02em;
/* main / TEXT */
color: #E6E6E6;
`;

const UserAv = styled.img`
  position: absolute;
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
left: 36.57%;
right: 37.31%;
top: 54.11%;
bottom: 38.65%;
font-family: Catamaran;
font-style: normal;
font-weight: 500;
font-size: 3.5rem;
line-height: 1.5rem;
/* or 15px */
letter-spacing: 0.02em;
/* main / TEXT */
color: #E6E6E6;
`
const Percentage =styled.p`
position: absolute;
left: 61.19%;
right: 26.12%;
top: 54.11%;
bottom: 41.06%;
font-family: Catamaran;
font-style: normal;
font-weight: 500;
font-size: 2rem;
line-height: .9rem;
/* or 9px */
letter-spacing: 0.02em;
/* main / TEXT */
color: #E6E6E6;
`

const CompletionText = styled.p`
position: absolute;
left: 25.37%;
right: 25.37%;
top: 68.6%;
bottom: 28.5%;
font-family: Catamaran;
font-style: normal;
font-weight: normal;
font-size: 1.3rem;
line-height: .6rem;
/* identical to box height, or 6px */
letter-spacing: 0.02em;
/* main / TEXT */
color: #E6E6E6;
`;
const FinishNowContainer = styled.div`
  position: absolute;
  left: 0%;
  right: 0%;
  top: 83.57%;
  bottom: 0%;
  /* main / side */
  background: #3d3b91;
  /* mobile / dashboard dropshadow */
  box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
  border-radius: 0px 0px 2px 2px;
`;
const FinishNowText = styled.p`
  position: absolute;
  left: 1.5rem;
  right: 46.27%;
  top: 50%;
  font-family: Catamaran;
  font-style: normal;
  font-weight: normal;
  font-size: 1.2rem;
  line-height: 0.5rem;
  /* or 5px */
  letter-spacing: 0.02em;

  /* main / TEXT */

  color: #e6e6e6;
`;
const FinishArrow = styled.img`
  position: absolute;
  width: 0.9rem;
  height: 0.7rem;
  left: 82.09%;
  right: 11.19%;
  top: 55.37%;
  bottom: 7.25%;
  /* main / TEXT */
`;

const ProfileCompletion = props => {
  // //routes
  // const editProfileRoute = e => {
  //   e.preventDefault();
  //   props.history.push('/edit-profile')
  // }

  return (
    <>
      <ProfileContainer>
        <ProfileText>profile</ProfileText>
        <UserAv src={User} />
        <PercentText>75</PercentText>
        <Percentage>%</Percentage>
        <CompletionText>completion</CompletionText>
        <FinishNowContainer>
          <Link to="/profile-edit">
            <FinishNowText>finish now</FinishNowText>
          </Link>
          <FinishArrow src={Arrow} />
        </FinishNowContainer>
      </ProfileContainer>
    </>
  );
};

export default ProfileCompletion;
