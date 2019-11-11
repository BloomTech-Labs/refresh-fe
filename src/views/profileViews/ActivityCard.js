import React from 'react';
import styled from 'styled-components';


const Rectangle16 = styled.div`
position: relative;
width: 171px;
height: 234px;
left: 220px;
top: 511px;

/* #EAEAEA - Background Grey */

background: #EAEAEA;
border-radius: 3px;
` 

const ActivityText = styled.h4`
position: absolute;
width: 69px;
height: 33px;
left: 281px;
top: 536px;

/* h4/Regular 20px */

font-family: 'Roboto', sans-serif;
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
width: 100px;
height: 33px;
left: 260px;
top: 680px;

/* h4/Regular 20px */

font-family: 'Roboto', sans-serif;
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
const ActivityCard = () => {
  
    return (
     <div>
        <Rectangle16/>
        <ActivityText>Activity</ActivityText>
        <ThisWeekText>This Week</ThisWeekText>  
     </div>  
       
  );
    
}

export default ActivityCard;