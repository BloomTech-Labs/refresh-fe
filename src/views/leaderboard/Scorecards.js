// IMPORTS
// react
import React from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';

// COMPONENT
const Scoreboard = props => {
    // props
    const { data } = props;

    // render
    return (
        <>
            {data.map((score, i) => {
                return (
                    <Card key={i}>
                        <span>{i + 1}</span>
                        <h3>
                        {score.fname} {score.lname}<br />
                        {score.cohort} - {score.sectionLead}
                        </h3>
                        <span>{score.points} points</span>
                    </Card>
                )
            })}
        </>
    );
};

// STYLED COMPONENTS
const Card = styled.div`
    width: 100%;
    height: 10rem;
    margin: 2rem 0;
    background-color: #CCC9FF;
    box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
    border-radius: 2px;
    color: #3A3699;
    ${flex.flexRowNoWrapBetween}

        span:first-child {
            font-size: 5rem;
            font-weight: bold;
            margin: 1.5rem;
        }

        h3 {
            font-size: 2rem;
        }

        span:last-child {
            font-size: 1.75rem;
            margin: 1rem;
        }
`


// EXPORT
export default Scoreboard;