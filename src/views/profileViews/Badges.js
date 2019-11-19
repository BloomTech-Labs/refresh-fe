// IMPORTS
// react
import React from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';
// images
import Arrow from '../../images/profile/purple_right_arrow.svg';


// COMPONENT
const Badges = () => {
    return (
        <>
         <BadgesWidget>
            <h3>Your<br /> badges</h3>
            <NextArrow src={Arrow} />
         </BadgesWidget>
        </>
    );

};

// STYLED COMPONENTS
const BadgesWidget = styled.div`
    width: 80%;
    height: 20rem;
    margin: 2rem 0;
    margin-top: 0;
    background-color: #D4F7E3;
    box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
    border-radius: 2px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 0.6);

        h3 {
            align-self: flex-start;
        }


`

const NextArrow = styled.img`
    width: 10%;
    height: auto;
    align-self: flex-end;
`



// EXPORT
export default Badges;