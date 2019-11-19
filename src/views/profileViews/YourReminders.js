// IMPORTS
// react
import React from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';



// COMPONENT
const YourReminders = () => {
    return (
        <>
        <Rectangle69/>
        <ReminderText>your reminders</ReminderText>
        null;
        </>
    );
};

// STYLED COMPONENTS
const Rectangle69 = styled.div`
position: absolute;
width: 178px;
height: 112px;
left: 30px;
top: 668px;

/* primary / disabled */

background: #CCC9FF;
border-radius: 2px;
` 

const ReminderText = styled.text`
position: absolute;
width: 104px;
height: 14px;
left: 45px;
top: 751px;

font-family: 'Catamaran', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 44%;
/* or 7px */

letter-spacing: 0.035em;

/* primary / purple */

color: #6762E3;
` 
// EXPORT
export default YourReminders;