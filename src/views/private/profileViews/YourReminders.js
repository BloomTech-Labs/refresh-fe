import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// components
import Icon from '../../../components/atoms/icon/icon';
//images
import purpleMenuDots from "../../../images/profile/purple_menu_dots.svg"


const ReminderContainer = styled.div`
position: absolute;
width: 13.1rem;
height: 14.2rem;
left: 21.2rem;
top: 62.1rem;
background: #CCC9FF;
border-radius: .2rem;
`
const ReminderText = styled.p`
position: absolute;
left: 8.43%;
right: 33.15%;
top: 74.11%;
bottom: 13.39%;
font-family: Catamaran;
font-style: normal;
font-weight: normal;
font-size: 1.5rem;
line-height: 1.5rem;
/* or 15px */
/* main / side */
color: #3D3B91;
`

const ReminderDots = styled.img`
  position: absolute;
  left: 81.97%;
  right: 5.34%;
  width: 15%;
  top: 9.15%;
  bottom: 88.73%;
  /* main / side */
  background: #3d3b91;
`;

const YourReminders = () => {
  return (
    <>
      <Link to="coming-soon">
        <ReminderContainer>
          <Icon svg={purpleMenuDots} height={0.3} width={1.4} position={"absolute"}top={1.3} left={11}/>
          <ReminderText>
            your
            <br />
            reminders
          </ReminderText>
        </ReminderContainer>
      </Link>
    </>
  );
};

export default YourReminders;
