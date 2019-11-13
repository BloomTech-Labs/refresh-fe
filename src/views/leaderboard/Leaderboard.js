// IMPORTS
// react
import React from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';

// COMPONENT
const Leaderboard = () => {
    return (
        <>
            hi from leaderboard
        </>
    );
};

// STYLED COMPONENTS
const LBView = styled.div`
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    padding-top: 10rem;
    background-color: #3a3699;
`

const LBWrapper = styled.div`
    width: 100%;
`

const LBContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    ${flex.flexCol}
`

// EXPORT
export default Leaderboard;