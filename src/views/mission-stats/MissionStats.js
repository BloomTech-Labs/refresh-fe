// IMPORTS
// react
import React from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';

// COMPONENT
const MissionStats = () => {
    return (
        <>
            hi from mission stats
        </>
    );
};

// STYLED COMPONENTS
const StatsView = styled.div`
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    padding-top: 10rem;
    background-color: #3a3699;
`

const StatsWrapper = styled.div`
    width: 100%;
`

const StatsContainer = styled.div`
    width: 90%;
    height: 80vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

`

// EXPORT
export default MissionStats;