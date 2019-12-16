// IMPORTS
// react
import React, { useContext } from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';
// contexts
import { UserContext } from '../../contexts/UserContext';

// COMPONENT
const TeamView = () => {
    // contexts
    const userContext = useContext(UserContext);
    console.log('[check user context]', userContext);
    
    return (
        <>
            <TeamViewWrapper>
                <TeamViewContainer>
                    <h1>{userContext.cohort || 'Lambda'} {userContext.fname}</h1>
                </TeamViewContainer>
            </TeamViewWrapper>
        </>
    );
};

// STYLED COMPONENTS
const TeamViewWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    padding-top: 10rem;
    background-color: #3a3699;
`

const TeamViewContainer = styled.div`
    width: 90%;
    height: 80vh;
    margin: 0 auto;
`


// EXPORT
export default TeamView;