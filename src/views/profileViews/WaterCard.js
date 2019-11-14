import React from 'react';
import styled from 'styled-components';


const Rectangle49 = styled.div`
position: absolute;
width: 153px;
height: 190px;
left: 30px;
top: 464px;

/* water / background blue */

background: #CEE2FF;
/* mobile / dashboard dropshadow */

box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
border-radius: 2px;
`
const HydrationStation = styled.div`
position: absolute;
width: 99px;
height: 20px;
left: 45px;
top: 491px;

font-family: Catamaran;
font-style: normal;
font-weight: normal;
font-size: 15px;
line-height: 93.19%;
/* or 14px */

letter-spacing: 0.02em;

/* water / text blue */

color: #6091D6;

`
const SixCups = styled.h5`
position: absolute;
width: 26px;
height: 48px;
left: 72px;
top: 496px;

font-family: 'Catamaran', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 45px;
line-height: 120%;
/* or 54px */

letter-spacing: 0.02em;

/* water / primary */

color: #1575FF;

`
const OfWaterText =styled.h6`
position: absolute;
width: 43px;
height: 22px;
left: 98px;
top: 555px;

font-family: 'Catamaran', sans-serif;
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 86%;
/* or 11px */

letter-spacing: 0.02em;

/* water / text blue */

color: #6091D6;

`

const WaterBottle = styled.img`
position: absolute;
left: 25.6%;
right: 68.71%;
top: 63.68%;
bottom: 29.68%;

background: #84DBFF;

border: 1px solid red;
` 
const Of8Text = styled.text`
position: absolute;
width: 22px;
height: 9px;
left: 96px;
top: 626px;

font-family: Catamaran;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 86%;
/* or 11px */

letter-spacing: 0.02em;

/* water / text blue */

color: #6091D6;
opacity: 0.5;

`
//This component tracks user water intake

const WaterCard = (props) => {
 
  return (
    <div onClick={() => {alert('DUMMY CLICK CONFIRMED')}}>  
    <Rectangle49/>
      <HydrationStation>
        hydration station
      </HydrationStation>
      <SixCups>
        6 
      </SixCups>
      <OfWaterText>
       cups of water
      </OfWaterText>
      <Of8Text>of 8</Of8Text>
      <WaterBottle/>
    </div>
      
    
);
  
}

export default WaterCard;
