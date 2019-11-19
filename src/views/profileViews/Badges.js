// IMPORTS
// react
import React from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';


// COMPONENT
const Badges = () => {
    return (
        <>
         <BadgesWidget>
             
         </BadgesWidget>
        </>
    );

};

// STYLED COMPONENTS
const BadgesWidget = styled.div`
    width: 80%;
    height: 20rem;
    margin: 2rem 0;
    margin-top: 0;
    background-color: #CCC9FF;
    box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
    border-radius: 2px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 0.6);

        h3 {
            color: #6762E3;
            font-size: 1.5rem;
            margin-top: 1rem;
            margin-bottom: 2rem;
        }

        span {
            color: #6762E3;
            font-size: 2.5rem;
            font-weight: bold;

        }

        p {
            color: #6762E3;
        }
`



// EXPORT
export default Badges;