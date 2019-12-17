// IMPORTS
// react
import React, { useContext } from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';
// contexts
import { UserContext } from '../../contexts/UserContext';
// images
import waves from '../../images/Onboarding/waves.svg'

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
                        <Pagination className='carousel'></Pagination>
                    </TVSection>

                    <TVSection>
                        <SectionTitle><h2>Team Feed</h2></SectionTitle>
                        <SectionCTA></SectionCTA>
                        <Pagination></Pagination>
                    </TVSection>

                    <TVSection>
                        <SectionTitle><h2>Team Missions</h2></SectionTitle>
                        <SectionCTA></SectionCTA>
                        <Pagination></Pagination>
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
    background-color: #4742bc;
    background-image: url(${waves});
`

const TVContainer = styled.div`
    width: 90%;
    height: 100%;
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
    margin: 2rem 0;
    margin-bottom: 0;
    ${test.redBg}
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;

        h2 {
            color: #B8B7E1;
        }
`

const SectionTitle = styled.div`
        width: 50%;
        height: 4rem;
        ${test.blueBg}
`

const SectionCTA = styled.div`
        width: 50%;
        height: 4rem;
        ${test.greenBg}
`

// temporary pagination section - will remove once library is pulled in
const Pagination = styled.div`
        width: 100%;
        height: 15rem;
        margin: 2rem 0 0 0;
        background-color: #3D3B91;
        border-radius: 3px;

            &.carousel {
                height: 10rem;
            }
`


// EXPORT
export default TeamView;