// IMPORTS
// react
import React, { useState } from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';

// COMPONENT
const Congrats = props => {
    // props
   
    // render
    return (
        <>
            <CongratsScreen className='closed'>
                <DrawerAccent />
                <CloseButton>X</CloseButton>
            </CongratsScreen>
        </>
    );
};

// STYLED COMPONENTS
const CongratsScreen = styled.div`
    &.open {
        width: 100vw;
        height: 90vh;
        margin: 0 auto;
        border-radius: 5px;
        position: fixed;
        bottom: 0;
        background-color: #6762E3;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        transition: 0.5s;
    }

    &.closed {
        width: 100vw;
        height: 40vh;
        margin: 0 auto;
        border-radius: 5px;
        position: fixed;
        bottom: -50vh;
        background-color: #6762E3;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        transition: 0.5s;
    }

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


// EXPORT
export default Congrats;