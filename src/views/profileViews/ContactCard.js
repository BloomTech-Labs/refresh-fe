// IMPORTS
// react
import React from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';



//This component contains user contact info e.g. user //handle etc...


// COMPONENT
const ContactCard = () => {
    return (
        <>
          <ContactWidget>
            <span>...</span>
            <span>Contact<br /> Information</span>
          </ContactWidget>
        </>
    );
};

// STYLED COMPONENTS
const ContactWidget = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    background-color: #D4F7E3;
    box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
    border-radius: 2px;

        span:first-child {
            align-self: flex-end;
            background: none;
            border: none;
            font-size: 3rem;
            color: #28C96C;
            margin-bottom: auto;
            margin: 1rem 1rem auto 0;
            line-height: 0;
        }

        span:last-child {
            align-self: flex-start;
            color: #28C96C;
            font-size: 1.5rem;
            margin: 0 0 1rem 1rem;
        }
`

// const Rectangle47 = styled.div`
// position: absolute;
// width: 167px;
// height: 60px;
// left: 30px;
// top: 222px;

// /* primary / disabled green */

// background: #D4F7E3;
// /* mobile / dashboard dropshadow */

// box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
// border-radius: 2px;
// `
// const ContactInformation = styled.h5`
// position: absolute;
// width: 107px;
// height: 28px;
// left: 50px;
// top: 218px;

// font-family: 'Catamaran', sans-serif;
// font-style: normal;
// font-weight: normal;
// font-size: 13px;
// line-height: 120%;
// /* or 16px */

// letter-spacing: 0.02em;

// /* primary / active */

// color: #28C96C;
// `

// EXPORT
export default ContactCard;