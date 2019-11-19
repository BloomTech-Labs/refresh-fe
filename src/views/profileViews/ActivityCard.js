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
        <ActivityWidget>
            <h3>Your activity</h3>
            <p>this week</p>
        </ActivityWidget>
     </>  
       
  );
    
}

// STYLED COMPONENTS
const ActivityWidget = styled.div`
    width: 100%;
    height: 17rem;
    margin: 0 0 2rem 0;
    background-color: #6762E3;
    box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
    border-radius: 2px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 1);

        h3 {
            font-size: 1.5rem;
            margin-top: auto;
        }

        p {
            color: #CCC9FF;
            margin-bottom: auto;
        }
`


// EXPORT
export default ActivityCard;