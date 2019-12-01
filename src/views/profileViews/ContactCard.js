import React from 'react';
import styled from 'styled-components';


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

//This component contains user contact info e.g. user handle etc...
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


export default ContactCard;