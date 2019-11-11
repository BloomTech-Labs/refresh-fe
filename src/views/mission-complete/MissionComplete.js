// IMPORTS
// react
import React from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';
// components
import MissionCard from './MissionCard';

// DUMMY DATA
// adding some dummy data so that i can work out basic props drilling
// this will probably change a lot after BE figures out all of the data models
// but we can use it for now to move forward on FE -JC

const dummyMissions = [
    {
        id: 1,
        description: 'drank a glass of water',
        color: '#CEE2FF'
    },
    {
        id: 2,
        description: 'got active',
        color: '#FECDCD'
    },
    {
        id: 3,
        description: 'ate healthy',
        color: '#D5F6E3'
    },
    {
        id: 4,
        description: 'took a break',
        color: '#FFE2CC'
    },
    {
        id: 5,
        description: 'got some sleep',
        color: '#FECDF9'
    },
    {
        id: 6,
        description: 'pet quality time',
        color: '#DFC5F7'
    }
];

// COMPONENT
const MissionComplete = () => {
    return (
        <MCView>
        <MCWrapper>
            <MCContainer>
                    <h2 className='mission-message'>What mission did you complete?</h2>

                    <MissionsWrapper>
                        {dummyMissions.map(mission => {
                            return (
                                <MissionCard 
                                    key={mission.id}
                                    description={mission.description}
                                    color={mission.color}
                                />
                            )
                        })}
                    </MissionsWrapper>

                    <ContinueButton>Continue</ContinueButton>
            </MCContainer>
        </MCWrapper>
        </MCView>
    );
};

// STYLED COMPONENTS

const MCView = styled.div`
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    padding-top: 10rem;
    background-color: #3a3699;
`

const MCWrapper = styled.div`
    width: 100%;
`

const MCContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    ${flex.flexCol}

        .mission-message {
            font-size: 3.5rem;
            letter-spacing: 0.25rem;
            font-weight: bold;
            color: #FFF;
            margin: 3rem 2rem;
        }
`

const MissionsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    align-items: top;
`

const ContinueButton = styled.button`
    width: 80%;
    height: 5rem;
    background-color: #6487FF;
    border: none;
    border-radius: 3px;
    box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
    margin: 2rem 0;
    font-size: 1.5rem;
    color: #FFF;
    font-weight: normal;
    letter-spacing: 0.15rem;
`


// EXPORT
export default MissionComplete;