// IMPORTS
// react
import React, { useState } from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../../styles/global/Mixins';
// components
import Scorecards from './Scorecards';

import waves from "../../../images/Onboarding/waves.svg";

// DUMMY DATA
const data = [
    {
        fname: 'Bob',
        lname: 'Bobberton',
        cohort: 'Web22',
        sectionLead: 'Bryan',
        points: 100
    },
    {
        fname: 'Tom',
        lname: 'Tommerton',
        cohort: 'Web26',
        sectionLead: 'Hannah',
        points: 120
    },
    {
        fname: 'Jim',
        lname: 'Jimbob',
        cohort: 'UX5',
        sectionLead: 'Jessica',
        points: 140
    },
    {
        fname: 'John',
        lname: 'Doe',
        cohort: 'DS3',
        sectionLead: 'Hank',
        points: 160
    },
    {
        fname: 'Susan',
        lname: 'Susan',
        cohort: 'UX6',
        sectionLead: 'George',
        points: 180
    }
];

const data2 = [
    {
        fname: 'Bob',
        lname: 'Bobberton',
        cohort: 'Web22',
        sectionLead: 'Bryan',
        points: 600
    },
    {
        fname: 'Tom',
        lname: 'Tommerton',
        cohort: 'Web26',
        sectionLead: 'Hannah',
        points: 520
    },
    {
        fname: 'Jim',
        lname: 'Jimbob',
        cohort: 'UX5',
        sectionLead: 'Jessica',
        points: 240
    },
    {
        fname: 'John',
        lname: 'Doe',
        cohort: 'DS3',
        sectionLead: 'Hank',
        points: 560
    },
    {
        fname: 'Susan',
        lname: 'Susan',
        cohort: 'UX6',
        sectionLead: 'George',
        points: 580
    }
];

// COMPONENT
const Leaderboard = () => {
    // state hooks
    const [buttons, setButtons] = useState({
        thisWeek: true,
        allTime: false
    });

    // handlers
    const viewToggle = e => {
        setButtons({ ...buttons, thisWeek: !buttons.thisWeek, allTime: !buttons.allTime })
    };
    
    return (
        <>
            <LBView>
            <LBWrapper>
                <LBContainer>
                    <ViewButtons>
                        <button className={`${buttons.thisWeek ? 'active' : 'inactive'}`} onClick={viewToggle}>This Week</button>
                        <button className={`${buttons.allTime ? 'active' : 'inactive'}`} onClick={viewToggle}>All Time</button>
                    </ViewButtons>

                    <LBScores>
                        <Scorecards 
                            data={data}
                        />
                    </LBScores>
                </LBContainer>
            </LBWrapper>
            </LBView>
        </>
    );
};

// STYLED COMPONENTS
const LBView = styled.div`
    width: 100vw;
    padding-top: 10rem;
    background-color: #4742BC;
    background-image:url(${waves})
`

const LBWrapper = styled.div`
    width: 100%;
`

const LBContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    ${flex.flexCol}
`

const ViewButtons = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    button {
        width: 14rem;
        height: 5rem;
        margin: 1rem;
        border: none;
        border-radius: 2px;
        font-weight: bold;
        letter-spacing: 0.15rem;
    }

    button.active {
        background-color: #E5E5E5;
        color: #3A3699;
    }

    button.inactive {
        background-color: #CCC9FF;
        color: #FFF;
        opacity: 0.5;
    }
    
`

const LBScores = styled.div`
    width: 100%;
    margin: 1rem;
`

// EXPORT
export default Leaderboard;