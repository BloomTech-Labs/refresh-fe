// IMPORTS
// react
import React from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';
// components
import ActivityCard from './ActivityCard';
import PercentageCard from '../profileViews/PercentageCard';
import HeaderCard from '../profileViews/HeaderCard';
import ContactCard from '../profileViews/ContactCard';
import WeeklySurvey from '../profileViews/WeeklySurvey';
import WaterCard from '../profileViews/WaterCard';
import Badges from '../profileViews/Badges';
import YourReminders from '../profileViews/YourReminders';
import ProfileAv from '../profileViews/ProfileAv';


// COMPONENT
const ProfileOverview = () => {
    return (
        <>
          <ProfileContainer/>
          <ActivityCard/>
         <PercentageCard/>
         <HeaderCard/>
         <ContactCard/>
         <WeeklySurvey/>
         <WaterCard/>
         <Badges/>
         <YourReminders/>
         <ProfileAv/>
        </>
    );
};

// STYLED COMPONENTS
const ProfileContainer = styled.div` 
position: relative;
width: 375px;
height: 822px;

background: #3A3699;
` 

// EXPORT
export default ProfileOverview;
