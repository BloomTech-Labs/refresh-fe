import React from "react";
import {Link} from 'react-router-dom';
import styled from "styled-components";
import WaterCard from "../ProfileViews/WaterCard";
import ProfileCompletion from "../ProfileViews/ProfileCompletion";
import WeeklySurvey from '../ProfileViews/WeeklySurvey';
import YourReminders from '../ProfileViews/YourReminders';
import ProfileBadges from '../ProfileViews/ProfileBadges';
import ProfileHeader from '../ProfileViews/ProfileHeader';

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
