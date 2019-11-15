// IMPORTS
// react
import React from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';
// images
import Rocket from '../../images/rocket.png';
// COMPONENT
const ComingSoon = () => {
    return (
        <>
        <SoonView>
        <SoonWrapper>
            <SoonContainer>
                <SoonImg src={Rocket} />
                <h1>Coming Soon</h1>
                <button>Back to dashboard</button>
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
    background-color: #3a3699;
`

const SoonWrapper = styled.div`
    width: 100%;
`

const SoonContainer = styled.div`
    width: 90%;
    height: 80vh;
    margin: 0 auto;

        h1 {

        }

        button {
            
        }
`

const SoonImg = styled.img`
    width: 30rem;
    height: 30rem;
    margin: 0 auto;
`


// EXPORT
export default ComingSoon;