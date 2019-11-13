// IMPORTS
// react
import React from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';

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

// COMPONENT
const Leaderboard = () => {
    return (
        <>
            <LBView>
            <LBWrapper>
                <LBContainer>
                    <ViewButtons>
                        <button>This Week</button>
                        <button>All Time</button>
                    </ViewButtons>
                </LBContainer>
            </LBWrapper>
            </LBView>
        </>
    );
};

// STYLED COMPONENTS
const LBView = styled.div`
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    padding-top: 10rem;
    background-color: #3a3699;
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

`

// EXPORT
export default Leaderboard;