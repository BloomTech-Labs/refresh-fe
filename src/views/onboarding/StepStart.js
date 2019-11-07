// IMPORTS
// react
import React, {useState} from 'react';
import {useContext} from 'react';
import { userContext } from '../../contexts/UserContext';
// styled components
import styled from 'styled-components';
// images

const StepStart =(props) =>{
const context = useContext(UserContext);

const [form, setForm] = useState([]);
const [currentStep, setCurrentStep] = useState(0);

const onSubmit = form => {
    if(currentStep > 10){
        props.onboarding(form).then(() => props.history.push('/dashboard'))
    }
    setForm([...form, form ]), 
    setCurrentStep(currentStep + 1);
}

    return(
        <>
        {currentStep === 0 && <InfoIntro onSubmit={this.onSubmit} />}
        {currentStep === 1 && <StepOne onSubmit={this.onSubmit} />}
        {currentStep === 2 && <StepTwo onSubmit={this.onSubmit} />}
        {currentStep === 3 && <StepThree onSubmit={this.onSubmit} />}
        {currentStep === 4 && <StepFour onSubmit={this.onSubmit} />}
        {currentStep === 5 && <StepFive onSubmit={this.onSubmit} />}
        {currentStep === 6 && <StepSix onSubmit={this.onSubmit} />}
        {currentStep === 7 && <StepSeven onSubmit={this.onSubmit} />}
        {currentStep === 8 && <StepEight onSubmit={this.onSubmit} />}
        {currentStep === 9 && <StepNine onSubmit={this.onSubmit} />}
        {currentStep === 10 && 
        <>
        <StepTen  />
        <button onClick={this.onSubmit}>Continue</button>
        </>}
        </>
    )
}

// STYLED COMPONENTS
//Onboarding Reusable Styles 

const OnBoardWrapper = styled.div`
background-color: #3a3699;
width: 100vw;
height:100vh;
max-height:100vh;
`

const OnBoardContainer = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
font-family: 'Catamaran', sans-serif;
margin:auto;
line-height:1.5;
background-color: #3a3699;
color: #7f7cca;
`
const Refresh = styled.h1`
font-weight: bold;
font-size: 5rem;
line-height: 82px;
letter-spacing: 3.5px;
color: #FFFFFF;
`

const OnboardTxt = styled.p`
font-size: 2rem;
line-height: 33px;
letter-spacing: 0.035em;
color: #CCC9FF;
`
const Button = styled.a`
  display: inline-block;
  border-radius: 0.5rem;
  padding: 1.5rem 0.8rem;
  width:100%;
  text-align:center;
  margin: auto;
  background: #6487ff;
  color: white;
  font-size:1.6rem;
}
`

const FlexHolder = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin:auto;
align-items: flex-start;
width:100%;
padding: 2.5rem 4rem;
`


export default StepStart;