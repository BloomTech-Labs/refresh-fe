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

                <h2 className='mission-message'>Your missions today</h2>

                <MissionHub>

                </MissionHub>

                <AddMission>
                    <MissionButton>+</MissionButton>
                </AddMission>
                
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

        .mission-message {
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

const MissionHub = styled.div`
    width: 100%;
    height: 40rem;
` 

const AddMission = styled.div`
    width: 100%;
    height: 10rem;
    margin-top: 2rem;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`

const MissionButton = styled.button`
    width: 56px;
    height: 56px;
    margin-left: auto;
    background-color: #6487FF;
    border: none;
    border-radius: 3px;
    box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
    font-size: 5rem;
    color: #FFF;
`

// EXPORT
export default Dashboard;