// IMPORTS
// react
import React, { useState, useContext } from 'react';
// router
import { Link } from 'react-router-dom';
// styled components
import styled from 'styled-components';
// swipeable views
import SwipeableViews from 'react-swipeable-views';
// contexts
import { UserContext } from '../../../contexts/UserContext';
// components
import Pagination from './Pagination';
import ImageDial from './ImageDial';
// images
import waves from '../../../images/Onboarding/waves.svg'

// COMPONENT
const TeamView = (props) => {
    // contexts
    const userContext = useContext(UserContext);
    props.debug && console.log('[check user context]', userContext);

    // state hooks
    const [feedSlide, setFeedSlide] = useState({ // eslint-disable-line no-unused-vars
        slide: {
            padding: 15,
            color: '#FFF',
            minHeight: '15rem',
            minWidth: '50rem'
        },
        slide1: {
            background: '#3D3B91'
        },
        slide2: {
            background: 'pink'
        },
        slide3: {
            background: 'orange'
        }
    });

    // This is an active hook that will remain, but there is dummy data interjected for the time being
    // until Roman finishes sending final payloads to us. Once that happens and we bring in real data, 
    // we can init state using only the default slide styles and an empty slides array that is then
    // populated based on the pending missions array coming back from the server
    const [missionSlide, setMissionSlide] = useState({ // eslint-disable-line no-unused-vars
        slide: {
            padding: 15,
            color: '#FFF',
            minHeight: '15rem',
            minWidth: '25rem'
        },
        slides: [
            {
                background: '#3D3B91',
                title: 'Zoom Dance Party',
                description: 'Time for a little hoe-down throw down. Tuesday night at 5pm PST',
                point_value: '100',
                date: 'Tuesday, 5pm PST'
            },
            {
                background: '#3D3B91',
                title: 'Edabit Stand Off',
                description: 'Are you ready to put your edabit skills to the test? Stand off and see who can do the most. Thursday night at 7pm PST',
                point_value: '90',
                date: 'Thursday, 7pm PST'
            },
            {
                background: '#3D3B91',
                title: 'Team Game Night',
                description: 'We reached the end of another week team! Time to celebrate with team game night! Friday night at 5pm PST',
                point_value: '120',
                date: 'Friday, 5pm PST'
            }
        ]
    });
    
    return (
        <>
            <TVWrapper>
                <TVContainer>
                    <h1>{userContext.cohort || 'Web 22 Maxine'} {userContext.fname}</h1>

                    <TVSection>
                        <SectionTitle><h2>Teammates</h2></SectionTitle>
                        <SectionCTA><Link to='/teamList'>view all ></Link></SectionCTA>
                        {/* <Pagination className='carousel'></Pagination> */}
                        <ImageDial />
                    </TVSection>

                    <TVSection>
                        <SectionTitle><h2>Team Feed</h2></SectionTitle>
                        <SectionCTA></SectionCTA>
                        <SwipeableViews>
                            <Slide style={{...feedSlide.slide, ...feedSlide.slide1}}>
                                test 1
                            </Slide>

                            <div style={{...feedSlide.slide, ...feedSlide.slide2}}>
                                test 2
                            </div>

                            <div style={{...feedSlide.slide, ...feedSlide.slide3}}>
                                test 3
                            </div>
                        </SwipeableViews>
                    </TVSection>

                    <TVSection>
                        <SectionTitle><h2>Team Missions</h2></SectionTitle>
                        <SectionCTA><Link to='/createtm'>Create Mission</Link></SectionCTA>
                        
                        <SwipeableViews>
                            {missionSlide.slides.map((mission, i) => {
                                return (
                                    <Slide style={{...missionSlide.slide, ...mission}}>
                                        <h2>{mission.title}</h2>
                                        <span className='points'>{mission.point_value} pts</span>

                                        <p>{mission.description}</p>

                                        <span>{mission.date}</span>

                                        <button className='accept'>Accept</button>
                                        <button>Decline</button>
                                    </Slide>
                                );
                            })}
                        </SwipeableViews>

                        <Pagination />
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
`

const SectionCTA = styled.div`
        width: 50%;
        height: 4rem;
        color: #FFF;
        text-align: right;
        display: flex;
        flex-flow: row nowrap;
        justify-content: flex-end;
        align-items: center;
        letter-spacing: 0.15rem;

            a {
                color: #FFF;
                text-decoration: none;
            }
`

const Slide = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;

            h2 {
                font-weight: bold;
                color: #FFF;
            }

            p {
                color: #E6E6E6;
            }

            span.points {
                background-color: #E9CC2F;
                padding: 0.5rem;
                color: #4E4829;
                font-weight: bold;
                border-radius: 3px;
            }

            button {
                background-color: transparent;
                border: none;
                color: #FFF;
            }

            & .accept {
                color: #E05CB3;
            }
`


// EXPORT
export default TeamView;