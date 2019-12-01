import React from 'react';
import styled from 'styled-components';
import Rocket from '../../images/profile/rocket.svg';

const SurveyWidget = styled.div`
    width: 90%;
    height: 15rem;
    margin: 2rem 0;
    background-color: #6762E3;
    box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
    border-radius: 2px;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    color: rgba(255, 255, 255, 0.6);

        h3 {
            font-size: 1.25rem;
            margin-top: auto;
        }

        span {
            margin-bottom: 2rem;
        }
`

const SurveyImg = styled.img`
    width: 45%;
    height: auto;
    margin-top: auto;
`


//This component tracks user weekly self-assessments
const WeeklySurvey = () => {
    return (
        <>
        <SurveyWidget>
            <SurveyImg src={Rocket} />
            <h3>Survey of the Week</h3>
            <span>0% complete</span>
        </SurveyWidget>
        </>
    );
    
};

export default WeeklySurvey;