import React from "react";
import styled from "styled-components";
import WaterCard from "../profileViews/WaterCard";
import ProfileCompletion from "../profileViews/ProfileCompletion";
import WeeklySurvey from '../profileViews/WeeklySurvey';
import YourReminders from '../profileViews/YourReminders';
import ProfileBadges from '../profileViews/ProfileBadges';
import ProfileHeader from '../profileViews/ProfileHeader';
import waves from "../../images/Onboarding/waves.svg";
import {deviceType} from '../profileViews/ResponsiveMedia';

const PVContainer = styled.div`
position: relative;
width: 375px;
height: 812px;

/* bg */

background: url(.png), #4742BC;
  background-image: url(${waves});
  overflow-x: hidden;
  @media ${deviceType.smallMobile}{
    
    overflow-x: hidden;
  }
  @media ${deviceType.mediumMobile}{
    
    overflow-x: hidden;
  }
  @media ${deviceType.largeMobile} {
    
    overflow-x: hidden;
  }
`;


const ProfileLine = styled.div`
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
      <PVContainer >
        <ProfileHeader/>
        <ProfileLine/>
        <WaterCard />
        <ProfileCompletion />
        <WeeklySurvey/>
        <YourReminders/>
          <ProfileBadges/>
      </PVContainer>
    </>
  );
};

export default ProfileOverview;
