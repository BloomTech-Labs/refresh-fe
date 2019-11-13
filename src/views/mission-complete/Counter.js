// IMPORTS
// react 
import React, { useState } from 'react';
// styled components
import styled from 'styled-components';
// helpers 
import { test, flex } from '../../styles/global/Mixins';

// COMPONENT
const Counter = () => {
    // state hooks
    const [counter, setCounter] = useState({
        value: 1
    });
    
    return (
        <CounterWrapper>
            <button>-</button>
            <Display>7</Display>
            <button>+</button>
        </CounterWrapper>
    );
};

// STYLED COMPONENTS
const CounterWrapper = styled.div`
    width: 100%;
    height: 5rem;
    margin: 1rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    ${test.redBg}

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