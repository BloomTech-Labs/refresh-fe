import React from "react";
import styled from "styled-components";
//import User from '../../../images/profile/user.svg';

const ProfileContainer = styled.div`
  position: absolute;
  width: 134px;
  height: 207px;
  left: 208px;
  top: 387px;
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

const Vector = styled.div`
  position: absolute;
  left: 33.58%;
  right: 34.33%;
  top: 24.64%;
  bottom: 54.59%;

  /* main / TEXT */

  background: #e6e6e6;
`;
const Percentage = styled.text`
  position: absolute;
  left: 36.57%;
  right: 37.31%;
  top: 54.11%;
  bottom: 38.65%;

  font-family: Catamaran;
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  line-height: 44%;
  /* or 15px */

  letter-spacing: 0.02em;

  /* main / TEXT */

  color: #e6e6e6;
`;

const CompletionText = styled.text`
  position: absolute;
  left: 25.37%;
  right: 25.37%;
  top: 68.6%;
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

  /* main / side */

  background: #3d3b91;
  /* mobile / dashboard dropshadow */

  box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
  border-radius: 0px 0px 2px 2px;
`;
const FinishNowText = styled.text`
  position: absolute;
  left: 11.19%;
  right: 46.27%;
  top: 59.86%;
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
const FinishVector = styled.div`
  position: absolute;
  left: 82.09%;
  right: 11.19%;
  top: 59.37%;
  bottom: 19.25%;

  /* main / TEXT */

  background: #e6e6e6;
`;

const ProfileCompletion = () => {
  return (
    <>
      <ProfileContainer>
        <ProfileText>profile</ProfileText>
        <Vector />
        <Percentage>75%</Percentage>
        <CompletionText>completion</CompletionText>
        <FinishNowContainer>
          <FinishNowText>Finish now</FinishNowText>
          <FinishVector />
        </FinishNowContainer>
      </ProfileContainer>
    </>
  );
};

export default ProfileCompletion;
