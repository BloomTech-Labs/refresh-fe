import React from "react";
import styled from "styled-components";
<<<<<<< HEAD:src/views/profileViews/ProfileOverview.js
import WaterCard from "../profileViews/WaterCard";
import ProfileCompletion from "../profileViews/ProfileCompletion";
import WeeklySurvey from "../profileViews/WeeklySurvey";
import YourReminders from "../profileViews/YourReminders";
import ProfileBadges from "../profileViews/ProfileBadges";
import ProfileHeader from "../profileViews/ProfileHeader";
import waves from "../../images/Onboarding/waves.svg";
import { deviceType } from "../profileViews/ResponsiveMedia";
=======
import WaterCard from "./WaterCard";
import ProfileCompletion from "./ProfileCompletion";
import WeeklySurvey from './WeeklySurvey';
import YourReminders from './YourReminders';
import ProfileBadges from './ProfileBadges';
import ProfileHeader from './ProfileHeader';
//import {mobile} from './views/profileViews/ResponsiveMedia';
import waves from "../../../images/Onboarding/waves.svg";
>>>>>>> romans-routing:src/views/private/profileViews/ProfileOverview.js

const PVContainer = styled.div`
  position: relative;
  width: 375px;
  height: 812px;
<<<<<<< HEAD:src/views/profileViews/ProfileOverview.js

  /* bg */

  background: url(.png), #4742bc;
  background-image: url(${waves});
  overflow-x: hidden;
  @media ${deviceType.smallMobile} {
    overflow-x: hidden;
  }
  @media ${deviceType.mediumMobile} {
    overflow-x: hidden;
  }
  @media ${deviceType.largeMobile} {
    overflow-x: hidden;
  }
`;
=======
  background: #4742bc;
  background-image:url(${waves});
`;

// const BackgroundWaves = styled.img`
// background-img: url(wavyLines.svg);
// background: #4742BC;
// `
>>>>>>> romans-routing:src/views/private/profileViews/ProfileOverview.js

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
