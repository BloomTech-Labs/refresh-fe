import React from "react";
//import {Link} from 'react-router-dom';
import styled from "styled-components";
import WaterCard from "../profileViews/WaterCard";
import ProfileCompletion from "../profileViews/ProfileCompletion";
import WeeklySurvey from '../profileViews/WeeklySurvey';
import YourReminders from '../profileViews/YourReminders';
import ProfileBadges from '../profileViews/ProfileBadges';
import ProfileHeader from '../profileViews/ProfileHeader';
import {mobile} from './views/profileViews/ResponsiveMedia';
//import WavyLines from '../../images/wavyLines.svg';

const PVContainer = styled.div`
${mobile}
`;

// const BackgroundWaves = styled.img`
// background-img: url(wavyLines.svg);
// background: #4742BC;
// `

const ProfileLine = styled.div`
position: absolute;
width: 375px;
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
