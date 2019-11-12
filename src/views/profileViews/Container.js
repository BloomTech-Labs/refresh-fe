import React from 'react';
import styled from 'styled-components';
import ActivityCard from './ActivityCard';
import PercentageCard from '../profileViews/PercentageCard';
import HeaderCard from '../profileViews/HeaderCard';
import ContactCard from '../profileViews/ContactCard';
import WeeklySurvey from '../profileViews/WeeklySurvey';
import WaterCard from '../profileViews/WaterCard';
import Badges from '../profileViews/Badges';
import YourReminders from '../profileViews/YourReminders';

const ProfileContainer = styled.div` 
position: relative;
width: 375px;
height: 822px;

background: #3A3699;

` 



const Container = () => {
  
    return (
      <div>
         <ProfileContainer/>
         <ActivityCard/>
         <PercentageCard/>
         <HeaderCard/>
         <ContactCard/>
         <WeeklySurvey/>
         <WaterCard/>
         <Badges/>
         <YourReminders/>

      </div>
  );
    
}

export default Container;