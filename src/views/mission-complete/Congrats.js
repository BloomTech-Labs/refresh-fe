// IMPORTS
// react
import React, { useState } from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';
// images
import Rocket from '../../images/rocket.png';

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

                <NextContainer>
                    <CelebrationImg src={Rocket}></CelebrationImg>

                    <span className='points'>+30 points</span>
                    <span>Congratulations!</span>

                    <p>To get more points and badges,<br /> complete more missions.</p>
                    
                    <ButtonRow>
                        <button>Share with your team</button>
                        <button><i class="fas fa-arrow-right"></i></button>
                    </ButtonRow>
                </NextContainer>
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
        height: 0vh;
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

        span {
            color: #FFF;
            font-size: 2rem;
            margin: 0.5rem;
        }
    
        .points {
            font-size: 4.5rem;
            color: #FFF;
            font-weight: bold;
            letter-spacing: 0.15rem;
        }

        p {
            color: rgba(255, 255, 255, 0.6);
            width: 25rem;
            font-size: 1.5rem;
            margin: 2rem;
            text-align: center;
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

const NextContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin-bottom: auto; 
`

const CelebrationImg = styled.img`
        width: 200px;
        height: 200px;
`

const ButtonRow = styled.div`
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        align-items: center;
        margin: 5rem 1rem;

            button:first-child {
                width: 60%;
                height: 5rem;
                background-color: #28C96C;
                border: none;
                border-radius: 5px;
                box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
                color: #FFF;
                letter-spacing: 0.15rem;
                margin-left: auto;
                margin-right: 1rem;
            }

            button:last-child {
                width: 50px;
                height: 50px;
                border-radius: 5px;
                border: none;
                background-color: rgba(0, 0, 0, 0.5);
                font-size: 1.75rem;
                font-weight: bold;
                box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
                display: flex;
                flex-flow: column nowrap;
                justify-content: center;
                align-items: center;
                background-color: #E5E5E5;
                color: #3A3699;
                margin-right: auto;
                margin-left: 1rem;
            }
`


// EXPORT
export default Congrats;