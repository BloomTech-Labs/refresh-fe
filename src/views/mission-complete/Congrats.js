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
   const { status, handleClose } = props;

    // render
    return (
        <>
            <CongratsScreen className={status}>
                <DrawerAccent />
                <CloseButton onClick={handleClose}>X</CloseButton>

                <CelebrationImg src=''></CelebrationImg>

                <span>+ 30 points</span>
                <span>Congratulations!</span>

                <p>To get more points and badges, complete more missions.</p>

                <button>Share with your team</button>
                <button>></button>
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
        background-color: #3A3699;
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

const CelebrationImg = styled.img`

`


// EXPORT
export default Congrats;