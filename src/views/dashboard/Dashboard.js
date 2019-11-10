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
                hi from dashboard
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
    ${test.redBg}
`

// EXPORT
export default Dashboard;