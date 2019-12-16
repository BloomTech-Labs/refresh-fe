import React from 'react';
import styled from 'styled-components';
import MenuDots from '../../images/profile/purple_menu_dots.svg';



const ReminderText = styled.text`
position: absolute;
left: 8.43%;
right: 33.15%;
top: 74.11%;
bottom: 13.39%;

font-family: Catamaran;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 97.5%;
/* or 15px */


/* main / side */

color: #3D3B91;
`

const ReminderVector = styled.img`
position: absolute;
left: 83.97%;
right: 5.34%;
top: 9.15%;
bottom: 88.73%;
/* main / side */
background: #3D3B91;
`

const ReminderContainer = styled.div`
position: absolute;
width: 131px;
height: 142px;
left: 212px;
top: 621px;
background: #CCC9FF;
border-radius: 2px;
`

const YourReminders = () =>{
  return (
    <>
    <ReminderContainer>
       <ReminderVector src={MenuDots}/>
       <ReminderText>your<br/>reminders</ReminderText>
    </ReminderContainer>
    </>
  )
};

export default YourReminders;