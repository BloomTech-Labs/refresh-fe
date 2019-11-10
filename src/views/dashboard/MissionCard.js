// IMPORTS
// react
import React from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';

// COMPONENT
const MissionCard = () => {
    return (
        <Container>
            hi from mission card
        </Container>
    );
};

// STYLED COMPONENTS
const Container = styled.div`
    width: 150px;
    height: 160px;
    box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
    border-radius: 3px;
    ${test.redBg}
`

// EXPORT
export default MissionCard;