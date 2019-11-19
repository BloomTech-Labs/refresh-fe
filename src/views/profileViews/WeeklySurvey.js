// IMPORTS
// react
import React from 'react';
// styled components
import styled from 'styled-components';
// helpers
import { test, flex } from '../../styles/global/Mixins';
// images
import Rocket from '../../images/profile/rocket.svg';

//This component tracks user weekly self-assessments

// COMPONENT
const WeeklySurvey = () => {
    return (
        <>
        <SurveyWidget>
            <SurveyImg src={Rocket} />
        </SurveyWidget>
        </>
    );
    
};

// STYLED COMPONENTS
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
`

const SurveyImg = styled.img`
    width: 45%;
    height: auto;
`





// const Rectangle48 = styled.div`
// position: absolute;
// width: 151px;
// height: 149px;
// left: 30px;
// top: 299px;

// /* primary / purple */

// background: #6762E3;
// /* mobile / dashboard dropshadow */

// box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
// border-radius: 2px;
// `

// const Survey= styled.h5`
// position: absolute;
// width: 151px;
// height: 21px;
// left: 29px;
// top: 379px;

// font-family: 'Catamaran', sans-serif;
// font-style: normal;
// font-weight: normal;
// font-size: 13px;
// line-height: 21px;
// text-align: center;
// letter-spacing: 0.035em;

// /* primary / disabled */

// color: #CCC9FF;
// `
// const SurveyComplete = styled.text`
// position: absolute;
// width: 151px;
// height: 12px;
// left: 30px;
// top: 424px;

// font-family: 'Catamaran', sans-serif;
// font-style: normal;
// font-weight: normal;
// font-size: 10px;
// line-height: 16px;
// text-align: center;
// letter-spacing: 0.035em;

// /* primary / disabled */

// color: #CCC9FF;
// `

// EXPORT
export default WeeklySurvey;