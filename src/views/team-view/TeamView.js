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
            <TVWrapper>
                <TVContainer>
                    <h1>{userContext.cohort || 'Lambda'} {userContext.fname}</h1>

                    <TVSection>
                        <SectionTitle><h2>Teammates</h2></SectionTitle>
                        <SectionCTA></SectionCTA>
                    </TVSection>

                    <TVSection>
                        <SectionTitle><h2>Team Feed</h2></SectionTitle>
                        <SectionCTA></SectionCTA>
                    </TVSection>

                    <TVSection>
                        <SectionTitle><h2>Team Missions</h2></SectionTitle>
                        <SectionCTA></SectionCTA>
                    </TVSection>
                </TVContainer>
            </TVWrapper>
        </>
    );
};

// STYLED COMPONENTS
const TVWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    padding-top: 10rem;
    background-color: #3a3699;
`

const TVContainer = styled.div`
    width: 90%;
    height: 80vh;
    margin: 0 auto;

        h1 {
            text-align: center;
            color: #FFF;
            font-weight: bold;
            font-size: 2rem;
            letter-spacing: 0.25rem;
        }
`

const TVSection = styled.div`
    width: 100%;
    height: 300px; // temporary
    margin: 2rem 0;
    ${test.redBg}

        h2 {
            color: #B8B7E1;
        }
`

const SectionTitle = styled.div`
        width: 50%;
        ${test.blueBg}
`

const SectionCTA = styled.div`
        width: 50%;
        height: 25px; // temp
        ${test.greenBg}
`


// EXPORT
export default TeamView;