// IMPORTS
// react
import React from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';

// COMPONENT
const Dashboard = props => {
    return (
        <DashboardView>
            <DashboardWrapper>
            <DashboardContainer>
                <Header>
                    <div>
                        <h1 className='greeting'>Hello Josh!</h1>
                    </div>

                    <div>
                        
                    </div>

                    <div></div>
                </Header>
            </DashboardContainer>    
            </DashboardWrapper>
        </DashboardView>
    );
};

// STYLED COMPONENTS
const DashboardView = styled.div`
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    padding-top: 10rem;
    background-color: #3a3699;
`

const DashboardWrapper = styled.div`
    width: 100%;
`

const DashboardContainer = styled.div`
    width: 90%;
    height: 80vh;
    margin: 0 auto;
    ${test.greenBg}
`

const Header = styled.div`
    ${flex.flexRowWrapBetween}    

        div {
            width: 40%;
            height: 10rem;
            margin: 1rem;
            ${test.redBg}
        }

        .greeting {
            color: #FFF;
            font-size: 3.5rem;
            word-spacing: 100rem;
        }
`

// EXPORT
export default Dashboard;