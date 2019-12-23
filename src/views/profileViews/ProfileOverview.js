import React from "react";
//import {Link} from 'react-router-dom';
import styled from "styled-components";
import WaterCard from "../profileViews/WaterCard";
import ProfileCompletion from "../profileViews/ProfileCompletion";
import WeeklySurvey from '../profileViews/WeeklySurvey';
import YourReminders from '../profileViews/YourReminders';
import ProfileBadges from '../profileViews/ProfileBadges';
import ProfileHeader from '../profileViews/ProfileHeader';
import GlobalStyles from '../../styles/global/GlobalStyle';
import waves from "../../images/Onboarding/waves.svg";
import {deviceType} from '../profileViews/ResponsiveMedia';

const PVContainer = styled.div`
border: 1px dashed red;
  padding-top: 10rem;
  background-color: #4742bc;
  background-image: url(${waves});
  overflow-x: hidden;
  @media ${deviceType.smallMobile}{
    max-width: 90%;
    max-height: 100vh;
    overflow-x: hidden;
  }
  @media ${deviceType.mediumMobile}{
    max-width: 100%;
    max-height: 100vw;
    overflow-x: hidden;
  }
  @media ${deviceType.largeMobile} {
    max-width: 100%;
    max-height: 100vh;
    overflow-x: hidden;
  }
`;

const ProfileWrapper = styled.div`
border: 1px dashed red;
width: 100%;
`

const ProfileLine = styled.div`
border: 1px dashed red;
position: absolute;
width: 100%;
height: 0px;
left: 3px;
top: 210px;
border: 3px solid rgba(71, 69, 161, 0.85);
`



const ProfileOverview = () => {
  
  return (
    <>
      <PVContainer src={GlobalStyles}>
        <ProfileWrapper>
        <ProfileHeader/>
        <ProfileLine/>
        <WaterCard />
        <ProfileCompletion />
        <WeeklySurvey/>
        <YourReminders/>
          <ProfileBadges/>
          </ProfileWrapper> 
      </PVContainer>
    </>
  );
};

export default ProfileOverview;
