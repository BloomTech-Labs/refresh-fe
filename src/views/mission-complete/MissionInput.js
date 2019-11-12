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
                <CloseButton>X</CloseButton>
                <InputMessage>
                    <i class="fas fa-tint"></i>
                    <p>This is some placeholder text</p>
                </InputMessage>
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
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

        button:first-child {
            align-self: flex-end;
            margin-bottom: auto;
        }
`

const CloseButton = styled.button`

`

const InputMessage = styled.div`
    margin-bottom: auto;
`

// EXPORT
export default MissionInput;