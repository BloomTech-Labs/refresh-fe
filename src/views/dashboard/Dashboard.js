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
                    <Greeting>
                        <h1 className='greeting'>Hello Josh!</h1>
                    </Greeting>

                    <User>
                        <i class="fas fa-bell"></i>
                        <Avatar>test</Avatar>
                    </User>
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
`

const Header = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;  
    ${test.greenBg}  
`

const Greeting = styled.div`
    color: #FFF;
    font-size: 3.5rem;
    word-spacing: 100rem;
`

const Avatar = styled.div`
    width: 2rem;
    height: 2rem;
    background-color: blue;
`

const User = styled.div`

`

// EXPORT
export default Dashboard;