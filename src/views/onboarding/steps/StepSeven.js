// IMPORTS
// react
import React, {useState} from 'react';
// styled components
import styled from 'styled-components';
// images
import SevenDaySlider from '../sliders/SleepSlider'

const Landing = (props) => {
    const [profile, setProfile] = useState({
        hydration:"",
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
                <Question>How many times did you drink at least 8 glasses of water in a day this past week?</Question>           
                <SevenDaySlider />
                <Button onClick = {handleSubmit}>Continue</Button>
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
font-size: 2.5rem;
line-height: 4.1rem;
letter-spacing: 0.035em;
color: #FFFFFF;
margin: 10rem 0 2rem;
`
const OnboardTxt = styled.p`
font-size: 2rem;
line-height: 33px;
letter-spacing: 0.035em;
color: #CCC9FF;
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
    margin:auto;
    font-size:1.6rem;
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
export default Landing; 