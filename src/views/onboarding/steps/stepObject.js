import React, {useState} from "react";
import styled from "styled-components";
import ReactSlider from "react-slider";
import WeightHeight from "./WeightHeight";

const Thumb = (props, state) => <StyledThumb {...props}>{state.valueNow}</StyledThumb>;
const Track = (props, state) =>{return ( <StyledTrack {...props} index={state.index} value={7} />)};

const StepObject = ({profile, question}) => {
  const [qa, setQa] = useState();
  const handleChanges = value => {
    setQa(value)    
};
const sliderValue =  3;
  return (
          <OnBoardContainer>
            <form onSubmit={profile.handleSubmit}>
              {profile.currentStep < 4 &&
              <Question>{question.question}</Question>
              }
              {profile.currentStep >=4 &&
              <LongQuestion>{question.question}</LongQuestion>
              }
              {profile.currentStep <= 2 &&
              <OnboardTxt>Dont worry, this stays between us</OnboardTxt>
              }
            {profile.currentStep <=2 && (<WeightHeight  />)}
            {profile.currentStep == 3 && (  
            <FlexHolder>
                <Option onClick={() => handleChanges("Never")}>Never</Option>
                <Option onClick={() => handleChanges("Sometimes")}>Sometimes</Option>
                <Option onClick={() => handleChanges("Always")}>Always</Option>
            </FlexHolder> )}
            {profile.currentStep >=4 && (             
                <StyledSlider
                defaultValue={sliderValue}
                max={7}
                renderTrack={Track}
                renderThumb={Thumb}
                onAfterChange={handleChanges}
              />
)}
              <Button onClick={profile.handleSubmit} data-answer={qa} data-question={question.id}>Continue</Button>
              {profile.currentStep <= 2 && (
                <ButtonNoColor onClick={profile.handleSubmit} value={"blurb"}>
                  I don't feel comfortable answering
                </ButtonNoColor>
              )}
            </form>
          </OnBoardContainer>
    );
};

// export const SlideNugget = ({start, max, profile}) => { 
//   return (
//   <StyledSlider
//   defaultValue={start}
//   max={max}
//   renderTrack={Track}
//   renderThumb={Thumb}
//   onAfterChange={handleChanges}
// />)}

// STYLED COMPONENTS
//Onboarding Reusable Styles
// we abstract out reusable global styles later on -JC

const StyledSlider = styled(ReactSlider)`
    width: 100%;
    height: 0.2rem;
    margin: 8rem 0 13rem;
`;

const StyledThumb = styled.div`
    height: 2.5rem;
    line-height: 25px;
    width: 25px;
    text-align: center;
    background-color: #28C96C;
    color: #fff;
    border-radius: 50%;
    cursor: grab;
    margin-top:-1rem;
`;

const StyledTrack = styled.div`
    top: 0;
    bottom: 0;
    background: ${props =>  props.index === 1 ? '#ddd' : '#28C96C'};
    border-radius: 2rem;
`;

const OnBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Catamaran", sans-serif;
  margin: auto;
  line-height: 1.5;
  background-color: #3a3699;
  color: #7f7cca;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  padding: 2.5rem 4rem;
`;
const Question = styled.h1`
  font-weight: 600;
  font-size: 3rem;
  line-height: 4.9rem;
  letter-spacing: 3.5px;
  color: #ffffff;
  margin: 6rem 0 2rem;
`;

const LongQuestion = styled.h1`
font-weight: 600;
font-size: 2.5rem;
line-height: 4.1rem;
letter-spacing: 0.035em;
color: #ffffff;
margin: 6rem 0 2rem;`


const OnboardTxt = styled.p`
font-size: 1.6rem;
line-height: 2.6rem;
letter-spacing: 2px;
text-align:center
color: #A7A4E6;
margin: 0 auto;
`;

const Option = styled.a`
font-size: 1.6rem;
line-height:26px;
letter-spacing: 2px;
color: #FFFFFF;
&:hover {
    background: #28C96C;
    padding: 0 1rem;
    border-radius: 0.3rem;
  }
`

const Button = styled.a`
  display: flex;
  justify-content: space-evenly;
  border-radius: 0.5rem;
  padding: 1.5rem 0.8rem;
  width: 100%;
  text-align: center;
  margin: auto;
  background: #6487ff;
  color: white;
  font-size: 1.6rem;
  letter-spacing: 0.1rem;
`;
const ButtonNoColor = styled.a`
  font-weight: 500;
  font-size: 1.6rem;
  letter-spacing: 2px;
  color: #a7a4e6;
`;
const FlexHolder = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 5rem auto;
  align-items: flex-start;
  width: 100%;
  padding: 2.5rem 0 9rem;
`;
export default StepObject;