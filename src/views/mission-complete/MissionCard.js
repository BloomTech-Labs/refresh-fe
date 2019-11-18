// IMPORTS
// react
import React, { useState, useEffect } from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';


// HELPERS
const bgPicker = vertical => {
    if (vertical === 'water') {
        return '#6091D6'
    } else if (vertical === 'activity') {
        return '#E36666'
    } else if (vertical === 'sleep') {
        return '#FC54EB'
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

  const colorPicker = vertical => {
    if (vertical === 'water') {
        return '#6091D6'
    } else if (vertical === 'activity') {
        return '#E36666'
    } else if (vertical === 'sleep') {
        return '#FC54EB'
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

  const iconPicker = vertical => {
    if (vertical === 'water') {
        return <i className="fas fa-tint"></i>
    } else if (vertical === 'activity') {
        return <i className="fas fa-running"></i>
    } else if (vertical === 'sleep') {
        return <i className="fas fa-bed"></i>
    } else if (vertical === 'mental') {
        return <i className="fas fa-volume-off"></i>
    } else if (vertical === 'food') {
        return <i className="fas fa-apple-alt"></i>
    } else if (vertical === 'social') {
        return <i className="fas fa-user-friends"></i>
    } else {
        return <i className="fas fa-smile"></i>
    }
  };

// COMPONENT
const MissionCard = props => {
    // props destructuring
    const { missionId, setSelectedMission } = props;
    
    // state hooks
    const [selected, setSelected] = useState(false);

    // useEffect
    useEffect(() => {
        setSelected(false);
    }, []);

    // handlers
    const selectedHandler = e => {
        setSelected(true);
        setSelectedMission(missionId);
    };
    
    // props
    const { handleDrawer } = props;
    
    return (
        <CardContainer vertical={props.vertical} selected={selected} onClick={() => { handleDrawer(); selectedHandler(); }}>
            {iconPicker(props.vertical)}

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
    color: #FFF;
    margin: 2rem;
    padding: 1rem;
    opacity: ${props => props.selected === true ? '0.5' : '1'};
    ${flex.flexCol}

        i {
            font-size: 2.5rem;
            margin: 2rem 0;
        }

        p {
            padding: 1rem;
            text-align: center;
        }
`

// EXPORT
export default MissionCard;