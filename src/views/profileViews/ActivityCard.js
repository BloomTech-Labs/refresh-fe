import React from 'react';
import styled from 'styled-components';


const Rectangle16 = styled.div`
position: relative;
width: 171px;
height: 234px;
left: 265px;
top: 345px;

/* #EAEAEA - Background Grey */

background: #EAEAEA;
border-radius: 3px;
` 

const ActivityText = styled.h4`
position: absolute;
width: 69px;
height: 33px;
left: 325px;
top: 340px;

/* h4/Regular 20px */

font-family: 'Roboto';
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 23px;
display: flex;
align-items: center;

/* #959595 - Mid Grey 2 */

color: #959595;
`

const ThisWeekText = styled.h4`
position: absolute;
width: 92px;
height: 33px;
left: 320px;
top: 515px;

/* h4/Regular 20px */

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 23px;
display: flex;
align-items: center;

/* #959595 - Mid Grey 2 */

color: #959595;
`
//This Component helps the user track their weekly activity
function ActivityCard() {
  
    return (
     <div>
        <Rectangle16/>
        <ActivityText>Activity</ActivityText>
        <ThisWeekText>This Week</ThisWeekText>   
     </div>  
       
  );
    
}

export default ActivityCard;