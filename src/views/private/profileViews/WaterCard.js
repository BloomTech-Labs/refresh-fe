import React, {useState, useContext} from "react";
import styled from "styled-components";
import {Link} from 'react-router-dom';
import {axiosWithAuth} from '../../../helpers/axiosWithAuth';
import WaterBottleGauge from './WaterBottleGauge';


const HydrationContainer = styled.div`
position: absolute;
width: 14.9rem;
height: 19rem;
left: 3.1rem;
top: 38.9rem;
/* water / background blue */
background: #cee2ff;
/* mobile / dashboard dropshadow */
box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
border-radius: 0.125rem;
`;

const HydrationText = styled.text`
position: absolute;
left: 9.8%;
right: 25.49%;
top: 14.21%;
bottom: 75.26%;
font-family: Catamaran;
font-style: normal;
font-weight: normal;
font-size: 1.5rem;
line-height: 1.4rem;
/* or 14px */

letter-spacing: 0.02em;

/* water / text blue */

color: #6091D6;
`
const NumOfCups = styled.text`
position: absolute;
left: 24.18%;
right: 55.56%;
top: 61.05%;
bottom: 13.68%;
font-family: Catamaran;
font-style: normal;
font-weight: 500;
font-size: 4.5rem;
line-height: 5.4rem;
/* or 54px */
letter-spacing: 0.02em;
/* water / primary */
color: #1575FF;
`;
const CupsOfWater = styled.text`
position: absolute;
left: 44.44%;
right: 27.45%;
top: 68.95%;
bottom: 19.47%;
font-family: Catamaran;
font-style: normal;
font-weight: 500;
font-size: 1.3rem;
line-height: 1.1rem;
/* or 11px */

letter-spacing: 0.02em;

/* water / text blue */

color: #9AB9E5;
`;

const OfEight = styled.text`
position: absolute;
width: 4rem;
left: 43.14%;
right: 42.48%;
top: 85.26%;
bottom: 10%;
font-family: Catamaran;
font-style: normal;
font-weight: normal;
font-size: 1.3rem;
line-height: 1.1rem;
/* or 11px */
letter-spacing: 0.02em;
/* water / text blue */
color: #9AB9E5;
opacity: 0.5;
`;


// component for profile water gauge
const WaterCard = () => {
  // /*context*/
  // const water = useContext(WaterIntake);
  // console.log('[water]', water);
  // /*state*/
  // const [waterBottle, setWaterBottle] = useState({
  //   status: '0'
  // });
  // /* handler*/
  // const handleWater = evt => {
  //   waterBottle.status === '0' ?
  //   setWaterBottle ({...water, status: '1'})
  // }

  return (
    <>
      
        <Link to='/mission-stats'><HydrationContainer>
        <HydrationText>hydration<br/>station</HydrationText>
        <WaterBottleGauge />
      <NumOfCups>6</NumOfCups>
      <CupsOfWater>
        cups of
        <br />
        water
      </CupsOfWater>
      <OfEight>of 8</OfEight>
      
      </HydrationContainer>
      </Link>
    </>
  );
};

export default WaterCard;
