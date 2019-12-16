// IMPORTS
// react
import React from 'react';
// styled components
import styled from 'styled-components';
// helpers 
import { test, flex } from '../../styles/global/Mixins';
// images
import WaterBottle from '../../images/profile/water_bottle/bottle4.svg';


//This component tracks user water intake

// COMPONENT
const WaterCard = (props) => {
  return (
    <>
    <WaterWidget>
      <h3>Hydration<br /> Station</h3>
      <HydrationImg src={WaterBottle} />
      <WaterCount><span>0</span>cups of <br /> water</WaterCount>
      <span> of 8</span>
    </WaterWidget>
    </>
  );
}


// STYLED COMPONENTS
const WaterWidget = styled.div`
    width: 90%;
    height: 17rem;
    margin: 2rem 0;
    background-color: #CEE2FF;
    box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
    border-radius: 2px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 0.6);

        h3 {
            color: #1575FF;
            font-size: 1.5rem;
            align-self: flex-start;
            margin-left: 1rem;
        }

        span {
            color: #9AB9E5;
        }
`

const HydrationImg = styled.img`
    width: 15%;
    height: auto;
`

const WaterCount = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-center: space-between;
    align-items: center;
    color: #9AB9E5;

        span {
          font-size: 4rem;
          font-weight: bold;
          margin: 0.25rem;
          color: #1575FF;
        }
`

// EXPORT
export default WaterCard;
