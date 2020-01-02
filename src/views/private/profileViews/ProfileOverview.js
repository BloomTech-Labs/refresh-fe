import React from "react";
import styled from "styled-components";
import WaterCard from "./WaterCard";
import ProfileCompletion from "./ProfileCompletion";
import WeeklySurvey from './WeeklySurvey';
import YourReminders from './YourReminders';
import ProfileBadges from './ProfileBadges';
import ProfileHeader from './ProfileHeader';
//import {mobile} from './views/profileViews/ResponsiveMedia';
import waves from "../../../images/Onboarding/waves.svg";

const PVContainer = styled.div`
  position: relative;
  width: 375px;
  height: 812px;
  background: #4742bc;
  background-image:url(${waves});
`;

// const BackgroundWaves = styled.img`
// background-img: url(wavyLines.svg);
// background: #4742BC;
// `

const ProfileLine = styled.div`
  position: absolute;
  width: 100%;
  height: 0%;
  left: 0%;
  top: 210px;
  border: 3px solid rgba(71, 69, 161, 0.85);
`;

const ProfileOverview = () => {
  return (
    <>
      <PVContainer>
        <ProfileHeader />
        <ProfileLine />
        <WaterCard />
        <ProfileCompletion />
        <WeeklySurvey />
        <YourReminders />
        <ProfileBadges />
      </PVContainer>
    </>
  );
};

export default ProfileOverview;
