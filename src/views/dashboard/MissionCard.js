// IMPORTS
// react
import React from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';

// COMPONENT
const MissionCard = props => {
    console.log('checking props:',props.color)
    
    return (
        <Container color={props.color}>
            <Gauge>
            <i class="fas fa-tint"></i>
            </Gauge>
            <p>{props.description}</p>
            <span>{props.points} Points</span>
        </Container>
    );
};

// STYLED COMPONENTS
const Container = styled.div`
    width: 150px;
    height: 180px;
    box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
    border-radius: 3px;
    margin: 1rem 0.5rem;
    background-color: ${props => props.color};
    padding: 1rem;
    ${flex.flexCol}

        // this i needs to change later on when i work out
        // the gauge functionality for the cards -JC
    
        i {
            font-size: 3rem;
            margin: 2rem 0;
        }
    
        p {
            font-size: 1.5rem;
            letter-spacing: 0.025rem;
            align-self: flex-start;
        }
    
        span {
            font-weight: bold;
            align-self: flex-start;
            margin-top: auto;
        }
`

const Gauge = styled.div`
        width: 60px;
        height: 60px;
        border: 3px solid black;
        border-radius: 100px;
        margin-top: 1rem;
        margin-bottom: 2rem;
        ${flex.flexCol}
`

// EXPORT
export default MissionCard;