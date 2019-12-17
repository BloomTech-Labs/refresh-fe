import React from "react";
//import {Link} from 'react-router-dom';
import styled from "styled-components";
import WaterCard from "../profileViews/WaterCard";
import ProfileCompletion from "../profileViews/ProfileCompletion";
import WeeklySurvey from '../profileViews/WeeklySurvey';
import YourReminders from '../profileViews/YourReminders';
import ProfileBadges from '../profileViews/ProfileBadges';
import ProfileHeader from '../profileViews/ProfileHeader';
//import {mobile} from './views/profileViews/ResponsiveMedia';
import waves from "../../images/Onboarding/waves.svg";

const PVContainer = styled.div`
width: 100vw;
height: 100vh;
max-height: 100vh;
padding-top: 10rem;
background: #4742bc;
background-image:url(${waves});
z-index: -5;
`;


// const BackgroundWaves = styled.img`
// background-img: url(wavyLines.svg);
// background: #4742BC;
// `

const ProfileLine = styled.div`
position: absolute;
width: 372px;
height: 0px;
left: 3px;
top: 210px;

border: 3px solid rgba(71, 69, 161, 0.85);
`



const ProfileOverview = () => {
  return (
    <>
      <PVContainer>
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
