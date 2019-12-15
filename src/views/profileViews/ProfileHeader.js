import React from 'react';
import styled from 'styled-components';
import maxine from '../profileViews/maxine.jpg';
import notifications from '../../images/profile/notifications.svg';
import settings_cog from '../../images/profile/settings_cog.svg';
//import Slider from '../../styles/global/Slider';

const ProfileContainer = styled.div`
height: 193px;
`
const BellVector = styled.img`
position: absolute;
width: 25px;
height: 25px;
left: 288px;
top: 21px;
background-img{
  background: #CCC9FF;
  url: ('notifications.svg');
}

`
const CogVector = styled.img`
position: absolute;
left: 88.53%;
right: 6.4%;
top: 2.71%;
bottom: 94.95%;

/* main / disabled */

background-img{
  url: ('settings_cog.svg');
  background: #CCC9FF;
}
`
const MenuPlaceHolder = styled.div`
position: absolute;
width: 15px;
height: 15px;
left: 32px;
top: 62px;

/* primary / disabled */

background: #CCC9FF;
`
const AvPlaceHolder = styled.img`
position: absolute;
border-radius: 50%;
width: 64px;
height: 64px;
left: 160px;
top: 51px;
background-img {
  url:('maxine.jpg');
  background: #C4C4C4;
  width: 90%;
  height: 90%;
}
`
const NameText = styled.text`
position: absolute;
width: 124px;
height: 9px;
left: 125px;
top: 131px;

font-family: Catamaran;
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 44%;
/* identical to box height, or 9px */


/* main / TEXT */

color: #E6E6E6;
`
const TeamLeadText = styled.div `
position: absolute;
width: 75px;
height: 11px;
left: 118px;
top: 155px;

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
left: 202px;
top: 155px;

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
left: 62px;
top: 179px;

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
width: 32px;
height: 12px;
left: 287px;
top: 179px;

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
left: 107px;
top: 183px;

background: #E0B8D3;
opacity: 0.6;
border-radius: 3px;
`
const MockSlideTwo = styled.div`
position: absolute;
width: 52px;
height: 7px;
left: 107px;
top: 183px;

/* button / primary color */

background: #E05CB3;
border-radius: 3px;
`
const ProfileHeader = () => {
  
  return (
    <>
      <ProfileContainer>
        <BellVector src={notifications}/>
        <CogVector src={settings_cog}/>
        <MenuPlaceHolder/>
        <AvPlaceHolder src={maxine}/>
        <NameText>Maxine Woods</NameText>
        <TeamLeadText>TEAM LEAD</TeamLeadText>
        <PointsText>150 points</PointsText>
        <LvOneText>Lvl 1</LvOneText>
        <LvTwoText>Lvl 2</LvTwoText>
        <MockSlideOne/>
        <MockSlideTwo/>
      </ProfileContainer>
    </>
  )
};

export default ProfileHeader;