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
                        <h1>Hello</h1>
                        <h1>Josh!</h1>
                    </Greeting>

                    <User>
                        <i class="fas fa-bell"></i>
                        <Avatar></Avatar>
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
    ${test.redBg}

        h1 {
            font-size: 4.5rem;
        }
`


const User = styled.div`
    width: 10rem;
    height: 5rem;
    background-color: blue;
    ${flex.flexRowNoWrapAround}
    ${test.redBg}

        i {
            font-size: 2rem;
        }
`

const Avatar = styled.div`
   width: 5rem;
   height: 5rem;
   border-radius: 3px;
   background-image: url('https://i1.wp.com/grueneroadpharmacy.com/wp-content/uploads/2017/02/user-placeholder-1.jpg?ssl=1');
    background-size: cover;
   ${test.blueBg}
`

// EXPORT
export default Dashboard;