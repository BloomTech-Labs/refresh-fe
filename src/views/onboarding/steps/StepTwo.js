// IMPORTS
// react
import React from 'react';
// styled components
import styled from 'styled-components';
// images

const StepTwo = (props) => {
    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit();
    };
    
    return(
        <OnBoardWrapper>
        <OnBoardContainer>
            
            <FlexHolder>
                <Question>How tall are you?</Question>
                <OnboardTxt>Dont worry, this stays between us</OnboardTxt>
               
            </FlexHolder>
            <FlexHolder>
                <Button onClick = {handleSubmit}>Continue</Button>
                <ButtonNoColor onClick = {handleSubmit}>I don't feel comfortable answering</ButtonNoColor>
            </FlexHolder>
      </OnBoardContainer>
      </OnBoardWrapper>
    )
}
// STYLED COMPONENTS
//Onboarding Reusable Styles 
// we abstract out reusable global styles later on -JC
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
const Question = styled.h1`
font-weight: bold;
font-size: 4rem;
line-height: 82px;
letter-spacing: 3.5px;
color: #FFFFFF;
margin-top: 140px;
margin-left: 20px;
width: fit-content;
`
const OnboardTxt = styled.p`
font-size: 2.2rem;
line-height: 33px;
letter-spacing: 0.095em;
color: #CCC9FF;
margin: 0 auto;
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
const ButtonNoColor = styled.a`
    margin:auto;
    font-size:1.8rem;
    padding: 15px;
    letter-spacing: 0.090em;
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
export default StepTwo; 