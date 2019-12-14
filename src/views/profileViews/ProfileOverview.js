import React from "react";
//import {Link} from 'react-router-dom';
import styled from "styled-components";
import WaterCard from "../profileViews/WaterCard";
import ProfileCompletion from "../profileViews/ProfileCompletion";
import WeeklySurvey from '../profileViews/WeeklySurvey';
import YourReminders from '../profileViews/YourReminders';
import ProfileBadges from '../profileViews/ProfileBadges';
import ProfileHeader from '../profileViews/ProfileHeader';

const PVContainer = styled.div`
  position: absolute;
  width: 375px;
  height: 812px;
  background: #4742bc;
`;

const ProfileLine = styled.div`
position: absolute;
width: 366px;
height: 0px;
left: 3px;
top: 210px;

border: 3px solid rgba(71, 69, 161, 0.85);
`

const BadgesContainer = styled.div`

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
        <BadgesContainer>
          <ProfileBadges/>
        </BadgesContainer> 
      </PVContainer>
    </>
  );
};

export default ProfileOverview;
