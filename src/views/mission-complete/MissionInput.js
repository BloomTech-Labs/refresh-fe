// IMPORTS
// react 
import React from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';
// components
import Counter from './Counter';

// COMPONENT
const MissionInput = props => {
    // props
    const { handleDrawer, status, missions, selectedMission } = props;
    console.log('checking input props:', props)
    // state hooks


    //render
    return (
        <React.Fragment>
            <InputDrawer className={status}>
                <DrawerAccent onClick={handleDrawer} />
                <CloseButton onClick={handleDrawer}>X</CloseButton>
                <InputMessage>
                    <i className="fas fa-tint"></i>
                    {missions.map(mission => {
                        if (mission.id === selectedMission) {
                            return <p>{mission.question}</p>
                        } else {
                            console.log('nope')
                        }
                    })}
                </InputMessage>

                <Counter />
            </InputDrawer>
        </React.Fragment>
    );
};

// STYLED COMPONENTS
const InputDrawer = styled.div`
    &.open {
        width: 100vw;
        height: 35vh;
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

const TestComponent = styled.button`
    width: 20rem;
    height: 5rem;
    border-radius: 5px;
    background-color: #FFF;
    border: none;
    margin: 0 auto;
`

// EXPORT
export default MissionInput;