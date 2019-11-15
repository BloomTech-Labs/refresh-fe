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
                        Your best streak for this mission is <span>25 days</span>
                    </MissionStreak>

                    <DailyProgress>
                        Daily progress stuff
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
    justify-content: center;
    align-items: center;
    margin: 0 auto;

`

const MissionHeading = styled.div`

`

const MissionSubHeading = styled.div`

`

// this is a temporary component for prototyping purposes and will
// be removed once we have data pulled in and can start to work
// on data visualization -JC
const DummyStats = styled.div`

`

const MissionStreak = styled.div`

`

const DailyProgress = styled.div`

`

// EXPORT
export default MissionStats;