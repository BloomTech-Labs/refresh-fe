import React from 'react';
import styled from 'styled-components';

const YourProfile = styled.h2`
position: absolute;
width: 240px;
height: 56px;
left: 30px;
top: 136px;


font-family: 'Catamaran', sans-serif;
font-style: normal;
font-weight: bold;
font-size: 35px;
line-height: 44%;
/* or 15px */

letter-spacing: 3.5px;

/* primary / white */

color: #FFFFFF;

`

const HeaderCard = () => {
  
    return (

      <div>
        <YourProfile>Your Profile</YourProfile>
      </div>   
         
  );
    
  }
  
  export default HeaderCard;