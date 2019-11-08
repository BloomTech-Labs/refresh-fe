// IMPORTS
// react
import React, {useState, useContext} from 'react';
// styled components
import styled from 'styled-components';


const StepOne = (props) => {

    const [profile, setProfile] = useState({
        weight:"",
    });

    const handleChanges = e => {
        setProfile({
            ...profile,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit(profile);
    };
    
    return(
        <OnBoardWrapper>
        <OnBoardContainer>
            <form>
                <Question>What do you <br /> currently weigh?</Question>
                <OnboardTxt>Dont worry, this stays between us</OnboardTxt>    
                <Button onClick = {handleSubmit}>Continue</Button>
                <ButtonNoColor onClick = {handleSubmit}>I don't feel comfortable answering</ButtonNoColor>
            </form>
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
height:100vh;
padding: 2.5rem 4rem;
`
const Question = styled.h1`
font-weight: 600;
font-size: 3rem;
line-height: 4.9rem;
letter-spacing: 3.5px;
color: #FFFFFF;
margin: 6rem 0 2rem;
`
const OnboardTxt = styled.p`
font-size: 1.6rem;
line-height: 2.6rem;
letter-spacing: 2px;
text-align:center
color: #A7A4E6;
margin: 0 auto;
`
const Button = styled.a`
display: flex;
justify-content: space-evenly;
border-radius: 0.5rem;
padding: 1.5rem 0.8rem;
width:100%;
text-align:center;
margin: auto;
background: #6487ff;
color: white;
font-size:1.6rem;
letter-spacing:0.1rem;
`
const ButtonNoColor = styled.a`
    font-weight:500;
    font-size:1.6rem;
    letter-spacing: 2px;
    color: #A7A4E6;
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
export default StepOne; 