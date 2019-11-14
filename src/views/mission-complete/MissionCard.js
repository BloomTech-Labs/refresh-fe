// IMPORTS
// react
import React from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';


// HELPERS
const bgPicker = vertical => {
    if (vertical === 'water') {
        return '#CEE2FF'
    } else if (vertical === 'activity') {
        return '#FECDCD'
    } else if (vertical === 'sleep') {
        return '#FECDF9'
    } else if (vertical === 'mental') {
        return '#FFE2CC'
    } else if (vertical === 'food') {
        return '#D5F6E3'
    } else if (vertical === 'social') {
        return '#DFC5F7'
    } else {
        return '#FFF'
    }
  };

  const colorPicker = vertical => {
    if (vertical === 'water') {
        return '#6091D6'
    } else if (vertical === 'activity') {
        return '#E36666'
    } else if (vertical === 'sleep') {
        return '#6091D6'
    } else if (vertical === 'mental') {
        return '#DF8F53'
    } else if (vertical === 'food') {
        return '#448961'
    } else if (vertical === 'social') {
        return '#9B51E0'
    } else {
        return '#FFF'
    }
  };

// COMPONENT
const MissionCard = props => {
    console.log('check mission card props:', props)
    // props
    const { handleDrawer } = props;
    
    return (
        <CardContainer vertical={props.vertical} onClick={handleDrawer}>
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
    background-color: ${props => bgPicker(props.vertical)}
    color: ${props => colorPicker(props.vertical)}
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