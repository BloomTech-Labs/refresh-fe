// IMPORTS
// react
import React from 'react';
// router
import { Link } from 'react-router-dom';
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
                        <Link to='/dashboard'><i class="fas fa-bell"></i></Link>
                        <Avatar></Avatar>
                    </User>
                </Header>

                <h2 className='missions'>Your missions today</h2>
                
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

        .missions {
            color: #CCC9FF;
            font-size: 2.5rem;
            letter-spacing: 0.25rem;
            margin: 3rem 0;
        }
`

const Header = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;  
`

const Greeting = styled.div`
    color: #FFF;

        h1 {
            font-size: 4.5rem;
            letter-spacing: 0.25rem;
        }
`


const User = styled.div`
    width: 10rem;
    height: 5rem;
    ${flex.flexRowNoWrapAround}

        i {
            font-size: 2rem;
        }

        a {
            color: #CCC9FF;
        }
`

const Avatar = styled.div`
    width: 5rem;
    height: 5rem;
    border-radius: 3px;
    background-image: url('https://i1.wp.com/grueneroadpharmacy.com/wp-content/uploads/2017/02/user-placeholder-1.jpg?ssl=1');
    background-size: cover;
`

// EXPORT
export default Dashboard;