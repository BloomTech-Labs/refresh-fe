// IMPORTS
// react
import React from 'react';
// styled components
import styled from 'styled-components';
// router
import { Link } from 'react-router-dom';
// helpers
import { test, flex } from '../../styles/global/Mixins';
// images
import Rocket from '../../images/rocket.png';

import waves from "../../images/Onboarding/waves.svg";

// COMPONENT
const ComingSoon = props => {
    // handlers
    const dashboardHandler = e => {
        props.history.push('/dashboard');
    };
    
    return (
        <>
        <SoonView>
        <SoonWrapper>
            <SoonContainer>
                <SoonImg src={Rocket} />
                <h1>Coming Soon</h1>
                <p>Check back here soon for more info!</p>
                <button onClick={dashboardHandler}>Dashboard</button>
            </SoonContainer>
        </SoonWrapper>
        </SoonView>
        </>
    );
};

// STYLED COMPONENTS
const SoonView = styled.div`
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    padding-top: 10rem;
    background-color: #4742BC;
    background-image:url(${waves})
`

const SoonWrapper = styled.div`
    width: 100%;
`

const SoonContainer = styled.div`
    width: 90%;
    height: 80vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
        h1 {
            font-size: 4rem;
            font-weight: bold;
            color: #FFF;
            margin: 1rem 0;
        }
        
        p {
            font-size: 1.5rem;
            color: rgba(255, 255, 255, 0.5);
        }
        
        button {
            width: 40%;
            height: 5rem;
            background-color: #28C96C;
            border: none;
            box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
            border-radius: 5px;
            color: #FFF;
            letter-spacing: 0.1rem;
            margin: 2rem;
            margin-top: 1rem;
            
        }
        `
        
        const SoonImg = styled.img`
        width: 30rem;
        height: 30rem;
        margin: 0 auto;
        margin-top: auto;
        
`


// EXPORT
export default ComingSoon;