import React from "react";
import styled from "styled-components";
import WaterCard from "../profileViews/WaterCard";
import ProfileCompletion from "../profileViews/ProfileCompletion";
import WeeklySurvey from '../profileViews/WeeklySurvey';
import YourReminders from '../profileViews/YourReminders';
import ProfileBadges from '../profileViews/ProfileBadges';
import ProfileHeader from '../profileViews/ProfileHeader';
import waves from "../../images/Onboarding/waves.svg";
//import {deviceType} from '../profileViews/ResponsiveMedia';

const PVWrapper = styled.div`
width: 100%;
margin-bottom: auto;
background-color: #4742BC;
background-image:url(${waves})
`
const PVContainer = styled.div`
position: absolute;
width: 100%;
margin-bottom: auto;
height: 100vh;
z-index: -3;
background-color: #4742BC;
background-image:url(${waves});
`;


const ProfileLineBreak = styled.div`
position: absolute;
width: 100vw;
height: 0px;
top: 210px;
border: 3px solid rgba(71, 69, 161, 0.85);
`

const ProfileOverview = () => {
  
  return (
    <>
      <PVWrapper>
        <PVContainer >
        <ProfileHeader/>
        <ProfileLineBreak/>
        <WaterCard />
        <ProfileCompletion />
        <WeeklySurvey/>
        <YourReminders/>
          <ProfileBadges/>
        </PVContainer>
        </PVWrapper>  
    </>
  );
};

export default ProfileOverview;
