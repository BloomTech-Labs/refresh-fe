// IMPORTS
// react
import React from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';

// COMPONENT
const MissionCard = props => {
    return (
        <CardContainer>
            <i class="fas fa-tint"></i>

            <p>{props.description}</p>
        </CardContainer>
    );
};

// STYLED COMPONENTS
const CardContainer = styled.div`
    width: 115px;
    height: 115px;
    box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
    border-radius: 3px;
    margin: 0 2rem;
    padding: 1rem;
    ${flex.flexCol}
    ${test.redBg}

        i {
            font-size: 2rem;
            margin: 2rem 0;
        }
`

// EXPORT
export default MissionCard;