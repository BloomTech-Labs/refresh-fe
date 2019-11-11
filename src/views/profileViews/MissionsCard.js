import React from 'react';
import styled from 'styled-components';

const Rectangle13 = styled.div`
position: absolute;
width: 122px;
height: 138px;
left: 58px;
top: 316px;

/* #EAEAEA - Background Grey */

background: #EAEAEA;
border-radius: 3px;
`

const MissionsText = styled.h5`
position: absolute;
width: 89px;
height: 77px;
left: 24px;
top: 10px;

/* Text/Regular 16px */

font-family: 'Roboto';
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 19px;
display: flex;
align-items: center;

/* #959595 - Mid Grey 2 */

color: #959595;
`
//This component tracks user missions completed
const MissionsCard = () => {
  
  return (
     <Rectangle13>
       <MissionsText>
         3 Missions
         completed
         today
       </MissionsText>
     </Rectangle13>
);
  
}

export default MissionsCard;