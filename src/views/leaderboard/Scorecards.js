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
                    'hi'
                )
            })}
        </>
    );
};

// STYLED COMPONENTS
// TODO


// EXPORT
export default Scoreboard;