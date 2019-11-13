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
                        <div>
                            <h3>{score.fname} {score.lname}</h3>
                            <h4>{score.cohort} - {score.sectionLead}</h4>
                        </div>
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

        div {
            margin-right: auto;
        }

        h3 {
            font-size: 1.75rem;
            font-weight: bold;
            letter-spacing: 0.15rem;
        }

        h4 {
            font-size: 1.5rem;
        }

        span:last-child {
            font-size: 1.75rem;
            margin: 1rem;
        }
`


// EXPORT
export default Scoreboard;