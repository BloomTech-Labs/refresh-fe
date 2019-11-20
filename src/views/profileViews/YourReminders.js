// IMPORTS
// react
import React from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';



// COMPONENT
const YourReminders = () => {
    return (
        <>
        <ContactWidget>
            <span>...</span>
            <span>your reminders</span>
        </ContactWidget>
        </>
    );
};

// STYLED COMPONENTS
const ContactWidget = styled.div`
    width: 100%;
    height: 13rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-color: #CCC9FF;
    box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
    border-radius: 2px;

        span:first-child {
            align-self: flex-end;
            background: none;
            border: none;
            font-size: 3rem;
            color: #6762E3;
            margin-bottom: auto;
            margin: 1rem 1rem auto 0;
            line-height: 0;
        }

        span:last-child {
            align-self: flex-start;
            color: #6762E3;
            font-size: 1.5rem;
            margin: 0 0 1rem 1rem;
        }
`


// EXPORT
export default YourReminders;