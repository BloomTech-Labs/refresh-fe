// IMPORTS
//react
import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
//context
import { UserContext } from "../../../contexts/UserContext";
//axios with auth
import { axiosWithAuth } from "../../../helpers/axiosWithAuth";
//styled components
import styled from "styled-components";
//images
import waves from "../../../images/Onboarding/waves.svg";
//react slider library
import ReactSlider from "react-slider";
//weight and height dials
import Weight from "./Weight";
import Height from "./Height";
//loading spinner
import LoadingSpinner from "../../../components/atoms/spinner/spinner";

const StepForm = props => {
  //context
  const user = useContext(UserContext);

  //hooks
  const [questions, setQuestions] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [answer, setAnswer] = useState();
  const [done, setDone] = useState(false);

  //Get Questions on Mount
  useEffect(() => {
    axiosWithAuth()
      .get("/questiongroups/1")
      .then(res => {
        setQuestions(res.data.questions);
      })
      .catch(err => console.log(err));
  }, []);

  //set values for slider
  const handleChanges = value => {
    console.log(value);
    setAnswer(value);
  };

  //handle submit to backend
  const handleSubmit = e => {
    console.log(e.target);
    e.preventDefault();
    if (currentStep === questions.length - 1) {
      console.log("here", questions[currentStep]);
      postAnswer({ answer, question_id: questions[currentStep].id });
      setQuestions([]);
      setDone(true);
    } else {
      const defaultAnswer = answer ? answer : "Chose not to answer";
      console.log("here", questions[currentStep]);
      postAnswer({
        answer: defaultAnswer,
        question_id: questions[currentStep].id
      });
      setCurrentStep(currentStep + 1);
    }
  };

  //axios post
  const postAnswer = answer => {
    return axiosWithAuth()
      .post("/answers", answer)
      .then(res => console.log(res));
  };

  //slider thumb and track
  const Thumb = (props, state) => (
    <StyledThumb {...props}>{state.valueNow}</StyledThumb>
  );
  const Track = (props, state) => {
    return <StyledTrack {...props} index={state.index} value={7} />;
  };

  //StepDot helper function for styled component
  const StepDotCount = currentStep => {
    return `&:nth-of-type(${currentStep + 1}){
      color: #E05CB3;
      `;
  };

  if (done) {
    return <Redirect to="/dashboard" />;
  } else {
    //render
    return questions.length ? (
      <OnBoardContainer>
        <StepDots currentDot={StepDotCount} currentStep={currentStep}>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
          <p>.</p>
        </StepDots>
        <form onSubmit={handleSubmit}>
          {/* First Question, Concent Button*/}
          {currentStep < 3 && (
            <Question>{questions[currentStep].question}</Question>
          )}
          {/* First Question, Concent Button*/}
          {currentStep >= 3 && (
            <LongQuestion>{questions[currentStep].question}</LongQuestion>
          )}
          {/* Returns First and second Question */}
          {currentStep === 0 && (
            <>
              <OnboardTxt>Dont worry, this stays between us</OnboardTxt>
              <TopArrow>
                <svg
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.463 3.10599e-06L1.5392 2.40994e-06C0.324938 2.35686e-06 -0.412842 1.37207 0.248087 2.42873L8.20996 15.2663C8.34859 15.491 8.54036 15.6762 8.76744 15.8044C8.99452 15.9327 9.24954 16 9.50876 16C9.76799 16 10.023 15.9327 10.2501 15.8044C10.4772 15.6762 10.6689 15.491 10.8076 15.2663L18.7541 2.42873C18.904 2.19085 18.9886 1.91586 18.9989 1.63276C19.0092 1.34967 18.9449 1.06896 18.8127 0.820256C18.6805 0.571552 18.4853 0.364073 18.2477 0.219705C18.0102 0.0753375 17.7391 -0.000565655 17.463 3.10599e-06Z"
                    fill="#E05CB3"
                  />
                </svg>
              </TopArrow>
              <Weight setAnswer={setAnswer} />
            </>
          )}
          {currentStep === 1 && (
            <>
              <OnboardTxt>Dont worry, this stays between us</OnboardTxt>
              <TopArrow>
                <svg
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17.463 3.10599e-06L1.5392 2.40994e-06C0.324938 2.35686e-06 -0.412842 1.37207 0.248087 2.42873L8.20996 15.2663C8.34859 15.491 8.54036 15.6762 8.76744 15.8044C8.99452 15.9327 9.24954 16 9.50876 16C9.76799 16 10.023 15.9327 10.2501 15.8044C10.4772 15.6762 10.6689 15.491 10.8076 15.2663L18.7541 2.42873C18.904 2.19085 18.9886 1.91586 18.9989 1.63276C19.0092 1.34967 18.9449 1.06896 18.8127 0.820256C18.6805 0.571552 18.4853 0.364073 18.2477 0.219705C18.0102 0.0753375 17.7391 -0.000565655 17.463 3.10599e-06Z"
                    fill="#E05CB3"
                  />
                </svg>
              </TopArrow>
              <Height setAnswer={setAnswer} />
            </>
          )}
          {/* WILL GIVE OVERWHELMED OPTIONS, Question 3*/}
          {currentStep === 2 && (
            <FlexHolder>
              <Option onClick={() => setAnswer("Never")}>Never</Option>
              <Option onClick={() => setAnswer("Sometimes")}>Sometimes</Option>
              <Option onClick={() => setAnswer("Always")}>Always</Option>
            </FlexHolder>
          )}
          {/* Slider Group , Questions 4 - 10*/}
          {currentStep >= 3 && (
            <StyledSlider
              defaultValue={3}
              max={7}
              renderTrack={Track}
              renderThumb={Thumb}
              onChange={handleChanges}
            />
          )}
          <Button onClick={handleSubmit} data-answer={answer}>
            Continue
          </Button>
          {/* Bypass weight and height answering, Questions 1 and 2 */}
          {currentStep <= 1 && (
            <ButtonNoColor onClick={handleSubmit} data-answer={answer}>
              I don't feel comfortable answering
            </ButtonNoColor>
          )}
        </form>
      </OnBoardContainer>
    ) : (
      <OnBoardContainer>
        <LoadingSpinner />
      </OnBoardContainer>
    );
  }
};

// STYLED COMPONENTS
//Onboarding Reusable Styles
// we abstract out reusable global styles later on -JC
//slider style for react slider
const StyledSlider = styled(ReactSlider)`
  width: 100%;
  height: 0.2rem;
  margin: 8rem 0 13rem;
`;

//thumb style for react slider
const StyledThumb = styled.div`
  height: 2.5rem;
  line-height: 25px;
  width: 25px;
  text-align: center;
  background-color: #e05cb3;
  color: #fff;
  border-radius: 50%;
  cursor: grab;
  margin-top: -1rem;
`;

//track style for react slider
const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${props => (props.index === 1 ? "#ddd" : "#E05CB3")};
  border-radius: 2rem;
`;

const OnBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Catamaran", sans-serif;
  margin: auto;
  line-height: 1.5;
  background-color: #4742bc;
  background-image: url(${waves});
  color: #7f7cca;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  padding: 2.5rem 4rem;
`;

//top arrow for dial components
const TopArrow = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 0;
  height: 0;
`;

const Question = styled.h1`
  font-weight: 600;
  font-size: 3rem;
  line-height: 4.9rem;
  letter-spacing: 3.5px;
  text-align:center;
  color: #ffffff;
  margin: 6rem 0 2rem;
`;

const LongQuestion = styled.h1`
  font-weight: 600;
  font-size: 2.5rem;
  line-height: 4.1rem;
  letter-spacing: 0.035em;
  text-align:center;
  color: #ffffff;
  margin: 6rem 0 2rem;
`;

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
  line-height: 26px;
  letter-spacing: 2px;
  color: #ffffff;
  &:hover {
    background: #e05cb3;
    padding: 0 1rem;
    border-radius: 0.3rem;
  }
`;

const Button = styled.a`
  display: flex;
  justify-content: space-evenly;
  border-radius: 0.5rem;
  padding: 1.5rem 0.8rem;
  width: 100%;
  text-align: center;
  margin: 0 auto 2.4rem;
  background: #e05cb3;
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

//current step marker
const StepDots = styled.div`
  display: flex;
  font-size: 8rem;
  margin: 0 auto;
  p {
    padding-right: 1rem;
    color: #a7a4e6;
    opacity:85%;
    ${props => props.currentDot(props.currentStep)}
  }
`;

export default StepForm;
