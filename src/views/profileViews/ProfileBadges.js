import React from 'react';
import styled from 'styled-components';


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
position: absolute;
width: 57.5px;
height: 65.5px;
left: 32px;
top: 258px;
background: #1575FF;
`
const FoodBadge = styled.div`
position: absolute;
width: 57.5px;
height: 65.5px;
left: 110px;
top: 258px;
background: #27AE60;
`
const ActivityBadge = styled.div`
position: absolute;
width: 57.5px;
height: 65.5px;
left: 188px;
top: 258px;
background: #FC5454;
`
const PetsBadge = styled.div`
position: absolute;
width: 57.5px;
height: 65.5px;
left: 266px;
top: 258px;
background: #9B51E0;
`
const PartialBadge = styled.div`
position: absolute;
width: 29.75px;
height: 65.5px;
left: 344px;
top: 258px;
background: #FC54EB;
`

const ProfileBadges = () => {
  return (
    <>
   
    <BadgeText>BADGES</BadgeText>
      <ViewAllText>view all</ViewAllText>
      <WaterBadge/>
      <FoodBadge/>
      <ActivityBadge/>
      <PetsBadge/>
      <PartialBadge/>
    
    </>
  )
};

export default ProfileBadges;