// IMPORTS
// react
import React from 'react';
// styled components
import styled from 'styled-components';
// helpers 
import {test, flex} from '../../styles/global/Mixins';

//This Component helps the user track their weekly activity

// COMPONENT
const ActivityCard = () => {
  
    return (
     <>
        hihihihi
     </>  
       
  );
    
}

// STYLED COMPONENTS
const ActivityWidget = styled.div`
    width: 90%;
    height: 15rem;
    margin: 2rem 0;
    background-color: #6762E3;
    box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
    border-radius: 2px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 0.6);

        h3 {
            font-size: 1.25rem;
            margin-top: auto;
        }

        span {
            margin-bottom: 2rem;
        }
`


// EXPORT
export default ActivityCard;