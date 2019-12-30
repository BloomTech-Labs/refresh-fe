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
width: 100vw;

background-color: #4742BC;
background-image:url(${waves})
`
const PVContainer = styled.div`
position: relative;
width: 100%;
background: url(.png), #4742BC;
font-family: 'Catamaran';
`;


const ProfileLineBreak = styled.div`
position: absolute;
width: 100%;
height: 0%;
left: 0%;
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
