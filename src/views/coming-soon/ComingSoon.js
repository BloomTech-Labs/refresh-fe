// IMPORTS
// react
import React from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';

// COMPONENT
const ComingSoon = () => {
    return (
        <>
        <SoonView>
        <SoonWrapper>
            <SoonContainer>
                
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

        .mission-message {
            color: #CCC9FF;
            font-size: 2.5rem;
            letter-spacing: 0.25rem;
            margin: 3rem 0;
        }
`


// EXPORT
export default ComingSoon;