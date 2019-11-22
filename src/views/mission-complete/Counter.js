// IMPORTS
// react 
import React, { useState, useEffect } from 'react';
// styled components
import styled from 'styled-components';
// helpers 
import { test, flex } from '../../styles/global/Mixins';

// COMPONENT
const Counter = props => {
    // props
    const {missionTracker, setMissionTracker, selectedMission, drawerStatus} = props;
    
    // state hooks
    const [counter, setCounter] = useState({
        value: 0
    });

    // useEffect
    useEffect(() => {
        setCounter({ ...counter, value: 0 });
    }, [drawerStatus]);

    // handlers
    const increment = e => {
        setCounter({ ...counter, value: counter.value + 1 });

        if (missionTracker.length < 1) {
            setMissionTracker([{ question_id: selectedMission, answer: counter.value + 1 }]);
            console.log('[empty tracker fire]', missionTracker);
        } else {
            let missionIndex = missionTracker.findIndex(i => i.question_id === selectedMission);

            if (missionIndex === -1) {
                setMissionTracker([...missionTracker, {question_id: selectedMission, answer: counter.value + 1}]);
                console.log('[no index found fire]', missionTracker);
            } else {
                let trackerCopy = [...missionTracker];
                trackerCopy[missionIndex].answer = counter.value + 1;
                setMissionTracker(trackerCopy);
                console.log('[index found copy fire]', missionTracker);
            }
        }
    };

    const decrement = e => {
        setCounter({ ...counter, value: counter.value - 1 });
    };
    
    return (
        <CounterWrapper>
            <button onClick={decrement}>-</button>
            <Display>{counter.value}</Display>
            <button onClick={increment}>+</button>
        </CounterWrapper>
    );
};

// STYLED COMPONENTS
const CounterWrapper = styled.div`
    width: 100%;
    height: 5rem;
    margin: 2rem;
    margin-bottom: 4rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

        button {
            width: 40px;
            height: 40px;
            border-radius: 5px;
            border: none;
            background-color: rgba(0, 0, 0, 0.5);
            color: #FFF;
            font-size: 2rem;
            margin: 0 2rem;
            margin-top: auto;
            box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1); 
        }
`

const Display = styled.div`
        width: 50px;
        height: 50px;
        border-radius: 5px;
        border: none;
        background-color: rgba(0, 0, 0, 0.5);
        color: #FFF;
        font-size: 2rem;
        box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
`

// EXPORT
export default Counter;