// IMPORTS
// react
import React from 'react';
// router 
import { Link } from 'react-router-dom';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';
// components
import ActivityCard from './ActivityCard';
import ProfileCompletion from './ProfileCompletion';
import HeaderCard from '../profileViews/HeaderCard';
import ContactCard from '../profileViews/ContactCard';
import WeeklySurvey from '../profileViews/WeeklySurvey';
import WaterCard from '../profileViews/WaterCard';
import Badges from '../profileViews/Badges';
import YourReminders from '../profileViews/YourReminders';
import ProfileAv from '../profileViews/ProfileAv';


// COMPONENT
const ProfileOverview = () => {
    return (
        <>
          <ProfileView>
            <ProfileWrapper>
                <ProfileContainer>

                    <Header>
                        <Greeting>
                            <h1>Your Profile</h1>
                        </Greeting>

                        <User>
                            <Link to='/coming-soon'><i className="fas fa-bell"></i></Link>
                            <Link to='/profile-overview'><Avatar></Avatar></Link>
                        </User>
                    </Header>

                    <WidgetArea>
                        <Column>
                            <ContactCard />
                            <WeeklySurvey />
                            <WaterCard />
                            <YourReminders />
                        </Column>

                        <Column>
                            <ProfileCompletion />
                        </Column>

                    </WidgetArea>

                </ProfileContainer>
            </ProfileWrapper>
          </ProfileView>
        </>
    );
};

// STYLED COMPONENTS
const ProfileView = styled.div`
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    padding-top: 10rem;
    background-color: #3a3699;
`

const ProfileWrapper = styled.div`
    width: 100%;
    ${test.greenBg}
`

const ProfileContainer = styled.div`
    width: 90%;
    height: 80vh;
    margin: 0 auto;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`

const Header = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;  
    margin-bottom: auto;
`

const Greeting = styled.div`
    color: #FFF;

        h1 {
            font-size: 3.5rem;
            letter-spacing: 0.25rem;
            font-weight: bold;
        }
`


const User = styled.div`
    width: 10rem;
    height: 5rem;
    margin-top: 2rem;
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

const WidgetArea = styled.div`
    width: 100%;
    height: 50rem;  // temp height
    margin-bottom: auto;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
`

const Column = styled.div`
    width: 48%;
    height: 50rem; // temp height
`

// EXPORT
export default ProfileOverview;

// Widget List
{/* <ProfileContainer/>
          <ActivityCard/>
         <PercentageCard/>
         <HeaderCard/>
         <ContactCard/>
         <WeeklySurvey/>
         <WaterCard/>
         <Badges/>
         <YourReminders/>
         <ProfileAv/> */}
