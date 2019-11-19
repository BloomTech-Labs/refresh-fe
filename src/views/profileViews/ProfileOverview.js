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
          hi from profile
        </>
    );
};

// STYLED COMPONENTS
const DashboardView = styled.div`
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    padding-top: 10rem;
    background-color: #3a3699;
`

const DashboardWrapper = styled.div`
    width: 100%;
`

// EXPORT
export default ProfileOverview;

// Widget List
{/* <ProfileContainer/>
          <ActivityCard/>
         <PercentageCard/>
         <HeaderCard/>
         <ContactCard/>
         <WeeklySurvey/>
         <WaterCard/>
         <Badges/>
         <YourReminders/>
         <ProfileAv/> */}
