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
            {data.map(score => {
                return (
                    <Card />
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
`


// EXPORT
export default Scoreboard;