// IMPORTS
// react
import React from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';

// COMPONENT
const MissionCard = props => {
    // props
    const { handleDrawer } = props;

    // helpers
    const colorPicker = vertical => {
        if (vertical === 'water') {
            return 'background-color: #CEE2FF;'
        } else if (vertical === 'activity') {
            return 'background-color: #FECDCD;'
        } else if (vertical === 'sleep') {
            return 'background-color: #FECDF9;'
        } else if (vertical === 'mental') {
            return 'background-color: #FFE2CC;'
        } else if (vertical === 'food') {
            return 'background-color: #D5F6E3;'
        } else {

        }
    };
    
    return (
        <CardContainer color={props.color} onClick={handleDrawer}>
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
    background-color: ${props => props.color}
    margin: 2rem;
    padding: 1rem;
    ${flex.flexCol}

        i {
            font-size: 2rem;
            margin: 2rem 0;
        }
`

// EXPORT
export default MissionCard;