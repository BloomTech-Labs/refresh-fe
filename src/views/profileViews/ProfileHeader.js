import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import maxine from '../profileViews/maxine.jpg';
import notifications from '../../images/profile/notifications.svg';
import settings_cog from '../../images/profile/settings_cog.svg';
//import {deviceType} from '../profileViews/ResponsiveMedia';


const BellVector = styled.img`
position: absolute;
width: 2.5rem;
height: 2.5rem;
left: 88.3%;
right: 6.4%;
top: 2.71%;
bottom: 94.95%;
`
const CogVector = styled.img`
position: absolute;
right: 6%;
top: 5.71%;
bottom: 94.95%;

`
const User = styled.div`
position: absolute;
width: 5rem;
height: 5rem;
top: 8.5%;
left: 72.8%;
`

const UserAv = styled.img`
position: absolute;
width: 5rem;
height: 5rem;
border-radius: 50%;
background: #C4C4C4;
`
const NameText = styled.text`
position: absolute;
width: 124px;
height: 9px;
left: 66.0%;
top: 135px;

font-family: Catamaran;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 44%;
/* identical to box height, or 9px */

color: #E6E6E6;
`
const TeamLeadText = styled.div `
position: absolute;
width: 100%;
height: 11px;
padding-left:5%;
margin-left: 31.8%;
margin-right: 75%;
top: 24.8%;

font-family: Catamaran;
font-style: normal;
font-weight: bold;
font-size: 12px;
line-height: 93.19%;
/* or 11px */

display: flex;
align-items: flex-end;

/* button / primary color */

color: #E05CB3;
`
const PointsText = styled.div`
position: absolute;
width: 54px;
height: 10px;
left: 53.5%;
top: 24.8%;

font-family: Catamaran;
font-style: normal;
font-weight: 500;
font-size: 11px;
line-height: 93.19%;
/* or 10px */

display: flex;
align-items: flex-end;
letter-spacing: 0.065em;

/* main / menu text */

color: #B8B7E1;
`

const LvOneText = styled.text`
position: absolute;
width: 35px;
height: 12px;
left: 25%;
top: 29.2%;

font-family: Catamaran;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 93.19%;
/* or 12px */

display: flex;
align-items: flex-end;
letter-spacing: 0.04em;

/* main / menu text */

color: #B8B7E1;
`
const LvTwoText = styled.div`
position: absolute;
width: 35px;
height: 12px;
left: 72%;
top: 29.2%;

font-family: Catamaran;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 93.19%;
/* or 12px */

display: flex;
align-items: flex-end;
letter-spacing: 0.04em;

/* main / menu text */

color: #B8B7E1;
`

const MockSlideOne = styled.img`
position: absolute;
width: 160px;
height: 7px;
left: 34%;
top: 29.6%;

background: #E0B8D3;
opacity: 0.6;
border-radius: 3px;
`
const MockSlideTwo = styled.div`
position: absolute;
width: 52px;
height: 7px;
left: 34%;
top: 29.6%;

/* button / primary color */

background: #E05CB3;
border-radius: 3px;
`
const ProfileHeader = () => {
  
  return (
    <>
        <BellVector src={notifications}/>
        <CogVector src={settings_cog}/>
        <User>
          <Link to='/'><UserAv src={maxine}></UserAv></Link>
        </User>
        <NameText>Maxine Woods</NameText>
        <TeamLeadText>TEAM LEAD</TeamLeadText>
        <PointsText>150 points</PointsText>
        <LvOneText>Lvl 1</LvOneText>
        <LvTwoText>Lvl 2</LvTwoText>
        <MockSlideOne/>
        <MockSlideTwo/>
    </>
  )
};

export default ProfileHeader;