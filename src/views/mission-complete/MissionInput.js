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
                <DrawerAccent />
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

        button {
            align-self: flex-end;
            margin-bottom: auto;
        }
`

const DrawerAccent = styled.div`
    width: 40px;
    height: 3px;
    border-radius: 50px;
    background-color: #FFF;
    opacity: 0.5;
    margin: 0.2rem;
`

const CloseButton = styled.button`
    width: 25px;
    height: 25px;
    border-radius: 150px;
    border: none;
    margin: 1rem;
    opacity: 0.5;
`

const InputMessage = styled.div`
    margin-bottom: auto;
    color: #FFF;
    font-size: 1.5rem;
    letter-spacing: 0.025rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;

        i {
            font-size: 3rem;
            margin: 1rem;
        }
`

// EXPORT
export default MissionInput;