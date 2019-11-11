import React from 'react';
import styled from 'styled-components';

const Rectangle15 = styled.div`
position: absolute;
width: 153px;
height: 210px;
left: 270px;
top: 123px;

/* #EAEAEA - Background Grey */

background: #EAEAEA;
border-radius: 3px;
` 

const ProfileText = styled.h5`
position: absolute;
width: 52px;
height: 20px;
left: 321px;
top: 120px;

/* h5/Regular 18px */

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 18px;
line-height: 21px;
display: flex;
align-items: center;

/* #959595 - Mid Grey 2 */

color: #959595;
`
const PercentageText = styled.h1`
position: absolute;
width: 72px;
height: 45px;
left: 310px;
top: 173px;

/* h1/Bold 38px */

font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 38px;
line-height: 45px;
/* identical to box height */

display: flex;
align-items: center;
text-align: center;

/* #959595 - Mid Grey 2 */

color: #959595;
`

const CompleteText=styled.h1`
position: absolute;
width: 83px;
height: 18px;
left: 300px;
top: 235px;

/* Text/Bold 16px */

font-family: 'Roboto';
font-style: normal;
font-weight: bold;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;
text-align: center;

/* #959595 - Mid Grey 2 */

color: #959595;
`
const Rectangle20 = styled.div`
position: absolute;
width: 153px;
height: 33px;
left: 271px;
top: 300px;

/* #D4D4D4 - Light Grey */

background: #D4D4D4;
border-radius: 3px;
`
// This component allows user to determine the % of their profile they have set up */

const PercentageCard = () => {
  
  return (
      <div>
        <Rectangle15/>
        <ProfileText>Profile</ProfileText>
        <PercentageText>75%</PercentageText>
        <CompleteText>COMPLETE</CompleteText>
        <Rectangle20>2 metrics left</Rectangle20>
      </div>

);
  
}

export default PercentageCard;