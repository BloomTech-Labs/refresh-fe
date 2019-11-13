// IMPORTS
// react 
import React from 'react';
// styled components
import styled from 'styled-components';
// helpers 
import { test, flex } from '../../styles/global/Mixins';

// COMPONENT
const Counter = () => {
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
            margin-top: auto;
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
`

// EXPORT
export default Counter;