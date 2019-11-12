// IMPORTS
// react 
import React from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';

// COMPONENT
const MissionInput = () => {
    return (
        <React.Fragment>
            <InputDrawer>

            </InputDrawer>
        </React.Fragment>
    );
};

// STYLED COMPONENTS
const InputDrawer = styled.div`
    width: 100vw;
    height: 40vh;
    margin: 0 auto;
    border-radius: 5px;
    position: fixed;
    bottom: 0;
    background-color: #6762E3;
`

// EXPORT
export default MissionInput;