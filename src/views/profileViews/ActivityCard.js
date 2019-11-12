import React from 'react';
import styled from 'styled-components';


const Rectangle68 = styled.div`
position: absolute;
width: 158px;
height: 160px;
left: 200px;
top: 453px;

/* primary / purple */

background: #6762E3;
border-radius: 2px;
` 

const YourActivity = styled.h4`
position: absolute;
width: 158px;
height: 47px;
left: 200px;
top: 470px;

font-family: 'Catamaran', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 25px;
text-align: center;
letter-spacing: 0.035em;

/* primary / white */

color: #FFFFFF;
`

const ThisWeek = styled.h4`
position: absolute;
width: 158px;
height: 13px;
left: 200px;
top: 494px;

font-family: 'Catamaran', sans-serif;
font-style: normal;
font-weight: normal;
font-size: 10px;
line-height: 16px;
text-align: center;
letter-spacing: 0.035em;

/* primary / disabled */

color: #CCC9FF;
`
const VectorPlaceholder = styled.div`
position: absolute;
width: 158px;
height: 76px;
left: 200px;
top: 537px;

background: #3A3699;
border: 0.5px solid #6762E3;
box-sizing: border-box;
border-radius: 3px;
border: 1px solid darkblue;
font-family: 'Catamaran', sans-serif;
font-size: 14px;
color: white;

` 
//This Component helps the user track their weekly activity
const ActivityCard = () => {
  
    return (
     <div>
        <Rectangle68/>
        <YourActivity>your activity</YourActivity>
        <ThisWeek>this week</ThisWeek>  
        <VectorPlaceholder>vector placeholder</VectorPlaceholder>
     </div>  
       
  );
    
}

export default ActivityCard;