import React from 'react';
import styled from 'styled-components';
//import ActivityBadge from '../../images/badges/activity_badge.svg'

const BadgeText = styled.text`
position: absolute;
width: 66px;
height: 15px;
left: 30px;
top: 233px;

font-family: Catamaran;
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 93.19%;
/* identical to box height, or 15px */

display: flex;
align-items: center;
letter-spacing: 0.07em;

/* main / menu text */

color: #B8B7E1;
`
const ViewAllText = styled.text `
position: absolute;
width: 41px;
height: 9px;
left: 289px;
top: 237px;

font-family: Catamaran;
font-style: normal;
font-weight: 500;
font-size: 10px;
line-height: 93.19%;
/* or 9px */

display: flex;
align-items: center;
letter-spacing: 0.04em;

/* main / menu text */

color: #B8B7E1;
`

const WaterBadge = styled.div`
left: 32px;
top: 258px;
position: absolute;
width: 55px;
height: 31.75px;
background-color: #1575FF;
margin: 15.88px 0;


:before,
:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 27.5px solid transparent;
  border-right: 27.5px solid transparent;
}

 :before {
  bottom: 100%;
  border-bottom: 15.88px solid #1575FF;
}

:after {
  top: 100%;
  width: 0;
  border-top: 15.88px solid #1575FF;
}
`
const FoodBadge = styled.div`
position: absolute;
left: 110px;
top: 258px;
width: 55px;
height: 31.75px;
background-color: #27AE60;
margin: 15.88px 0;

:before,
:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 27.5px solid transparent;
  border-right: 27.5px solid transparent;
}

 :before {
  bottom: 100%;
  border-bottom: 15.88px solid #27AE60;
}

:after {
  top: 100%;
  width: 0;
  border-top: 15.88px solid #27AE60;
}
`

const ActivitySVG = styled.div`
position: absolute;
left: 188px;
top: 258px;
width: 55px;
height: 31.75px;
background-color: #FC5454;
margin: 15.88px 0;


:before,
:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 27.5px solid transparent;
  border-right: 27.5px solid transparent;
}

 :before {
  bottom: 100%;
  border-bottom: 15.88px solid #FC5454;
}

:after {
  top: 100%;
  width: 0;
  border-top: 15.88px solid #FC5454;
}

`
const PetsBadge = styled.div`
position: absolute;
left: 266px;
top: 258px;
width: 55px;
height: 31.75px;
background-color: #9B51E0;
margin: 15.88px 0;


:before,
:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 27.5px solid transparent;
  border-right: 27.5px solid transparent;
}

 :before {
  bottom: 100%;
  border-bottom: 15.88px solid #9B51E0;
}

:after {
  top: 100%;
  width: 0;
  border-top: 15.88px solid #9B51E0;
}

`
const PartialBadge = styled.div`
position: absolute;
left: 344px;
top: 258px;
width: 55px;
height: 31.75px;
background-color: #FC54EB;
margin: 15.88px 0;


:before,
:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 27.5px solid transparent;
  border-right: 27.5px solid transparent;
}

 :before {
  bottom: 100%;
  border-bottom: 15.88px solid #FC54EB;
}

:after {
  top: 100%;
  width: 0;
  border-top: 15.88px solid #FC54EB;
}

`


const ProfileBadges = () => {
  return (
    <>
   
    <BadgeText>BADGES</BadgeText>
      <ViewAllText>view all</ViewAllText>
      <WaterBadge/>
      <FoodBadge/>
      <ActivitySVG/>
      <PetsBadge/>
      <PartialBadge/>
    
    </>
  )
};

export default ProfileBadges;