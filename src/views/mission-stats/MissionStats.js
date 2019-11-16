// IMPORTS
// react
import React from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';

// COMPONENT
const MissionStats = () => {
    return (
        <>
        <StatsView>
            <StatsWrapper>
                <StatsContainer>
                    <MissionHeading>
                        <h1>Stay Hydrated</h1>
                        <i className="fas fa-tint"></i>
                    </MissionHeading>

                    <MissionSubHeading>
                        <p>Drinking at least glasses of water is recommended to prevent dehydration</p>
                    </MissionSubHeading>

                    <DummyStats>
                        Mission stats coming soon!
                    </DummyStats>

                    <MissionStreak>
                        Your best streak for this mission is<br /> <span>25 days</span>
                    </MissionStreak>

                    <DailyProgress>
                        <p>Progress bar goes here</p>

                        <MissionButton>+</MissionButton>
                    </DailyProgress>
                </StatsContainer>
            </StatsWrapper>
        </StatsView>
        </>
    );
};

// STYLED COMPONENTS
const StatsView = styled.div`
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    padding-top: 10rem;
    background-color: #3a3699;
    color: #FFF;
`

const StatsWrapper = styled.div`
    width: 100%;
`

const StatsContainer = styled.div`
    width: 90%;
    height: 80vh;
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    div {
        margin: 1rem 0;
    }
`

const MissionHeading = styled.div`
    width: 100%;
    ${flex.flexRowNoWrapBetween}

        h1 {
            width: 10rem;
            font-size: 5rem;
            font-weight: bold;
            letter-spacing: 0.1rem;
        }

        i {
            font-size: 5rem;
            margin-right: 3rem;
            color: #1575FF;
        }
`

const MissionSubHeading = styled.div`
    width: 80%;
    align-self: flex-start;
    font-size: 1.5rem;
    letter-spacing: 0.1rem;
    line-height: 2rem;
`

// this is a temporary component for prototyping purposes and will
// be removed once we have data pulled in and can start to work
// on data visualization -JC
const DummyStats = styled.div`
        width: 90%;
        height: 15rem;
        background-color: #4088F0;
        box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
        border-radius: 3px;
        ${flex.flexCol}
        font-size: 1.5rem;
        letter-spacing: 0.1rem;
`

const MissionStreak = styled.div`
    font-size: 2rem;
    font-weight: normal;
    letter-spacing: 0.1rem;
    line-height: 2.75rem;
    align-self: flex-start;

        span {
            color: #28C96C;
        }
`

const DailyProgress = styled.div`
    width: 100%;
    ${flex.flexRowNoWrapAround}
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
export default MissionStats;