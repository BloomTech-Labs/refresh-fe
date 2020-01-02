import React from 'react';
import styled from 'styled-components';


const SurveyContainer = styled.div`
position: absolute;
width: 162px;
height: 149px;
left: 31px;
top: 614px;
z-index: 100;
/* main / side */

background: #3D3B91;
/* mobile / dashboard dropshadow */

box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
border-radius: 2px;
`
const SurveyText = styled.text`
position: absolute;
left: 0%;
right: 0.66%;
top: 73.83%;
bottom: 12.08%;

font-family: Catamaran;
font-style: normal;
font-weight: normal;
font-size: 13px;
line-height: 21px;
text-align: center;
letter-spacing: 0.035em;

/* primary / disabled */

color: #CCC9FF;
`

const RocketVector = styled.div`
position: absolute;
left: 23.03%;
right: 22.37%;
top: 12.75%;
bottom: 31.54%;

background: #FFFFFF;
`

const WeeklySurvey = () =>{
  return (
    <>
      <SurveyContainer>
        <RocketVector/>
        <SurveyText>surveys of the week</SurveyText>
      </SurveyContainer>
    </>
  )
};

export default WeeklySurvey;