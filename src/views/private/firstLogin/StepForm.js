// IMPORTS
//react
import React, { useState, useEffect, useContext } from "react"; // eslint-disable-line no-unused-vars
import { Redirect } from "react-router-dom";
//context
//axios with auth
import { axiosWithAuth } from "../../../helpers/axiosWithAuth";
//styled components
import styled from "styled-components";
//images
import waves from "../../../images/Onboarding/waves.svg";
//slider component
import Slider from "../../../styles/global/Slider";
//weight and height dials
import Weight from "./Weight";
import Height from "./Height";
//loading spinner
import LoadingSpinner from "../../../components/atoms/spinner/spinner";
const StepForm = props => {
  //context
  // const user = useContext(UserContext);
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
      .catch(err => props.debug && console.log(err));
  }, []);
  //set values for slider
  const handleChanges = value => {
    setAnswer(value);
  };
  //handle submit to backend
  const handleSubmit = e => {
    props.debug && console.log(e.target);
    e.preventDefault();
    if (currentStep === questions.length - 1) {
      props.debug && console.log("here", questions[currentStep]);
      postAnswer({ answer, question_id: questions[currentStep].id });
      setQuestions([]);
      setDone(true);
    } else {
      const defaultAnswer = answer ? answer : "Chose not to answer";
      props.debug && console.log("here", questions[currentStep]);
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
      .then(res => props.debug && console.log(res));
  };
  // //slider thumb and track
  // const Thumb = (props, state) => (
  //   <StyledThumb {...props}>{state.valueNow}</StyledThumb>
  // );
  // const Track = (props, state) => {
  //   return <StyledTrack {...props} index={state.index} value={7} />;
  // };
  //StepDot helper function for styled component
  const StepDotCount = currentStep => {
    return `&:nth-child(-n + ${currentStep + 1}){
      background: #E05CB3;
      opacity:100%;
      `;
  };
  if (done) {
    return <Redirect to="/dashboard" />;
  } else {
    //render
    return questions.length ? (
      <OnBoardContainer>
        <QuestionForm onSubmit={handleSubmit}>
          <StepDots currentDot={StepDotCount} currentStep={currentStep}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </StepDots>
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
              <OnboardTxt>Don't worry, this stays between us</OnboardTxt>
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
              <OnboardTxt>Don't worry, this stays between us</OnboardTxt>
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
              <Option onClick={() => setAnswer("Never")}>
                <input
                  type="radio"
                  id="optionOne"
                  name="overWhelmed"
                  value="Never"
                />
                <label for="optionOne">Never</label>
                <div className="check"></div>
              </Option>
              <Option onClick={() => setAnswer("Sometimes")}>
                <input
                  type="radio"
                  id="optionTwo"
                  name="overWhelmed"
                  value="Sometimes"
                />
                <label for="optionTwo">Sometimes</label>
                <div className="check"></div>
              </Option>
              <Option onClick={() => setAnswer("Often")}>
                <input
                  type="radio"
                  id="optionThree"
                  name="overWhelmed"
                  value="Never"
                />
                <label for="optionThree">Often</label>
                <div className="check"></div>
              </Option>
              <Option onClick={() => setAnswer("Always")}>
                <input
                  type="radio"
                  id="optionFour"
                  name="overWhelmed"
                  value="Never"
                />
                <label for="optionFour">Always</label>
                <div className="check"></div>
              </Option>
            </FlexHolder>
          )}
          {/* Slider Group , Questions 4 - 10*/}
          {currentStep >= 3 && (
            <Slider defaultValue={3} max={7} onChange={handleChanges} />
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
        </QuestionForm>
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
const OnBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly
  align-items: flex-start;
  font-family: "Catamaran", sans-serif;
  margin: auto;
  background-color: #4742bc;
  background-image: url(${waves});
  color: #7f7cca;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
`;
//top arrow for dial components
const TopArrow = styled.div`
  position: relative;
  margin: 0 auto;
  svg {
    position: absolute;
    top: 30px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
  }
`;
const QuestionForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-height: 100vh
  &:nth-child(*) {
    margin: auto;
  }
`;
const Question = styled.h1`
  font-weight: 600;
  font-size: calc(100% + 5.5vw);
  height: calc(100vh / 6);
  letter-spacing: 3.5px;
  text-align: center;
  color: #ffffff;
`;
const LongQuestion = styled.h1`
  font-weight: 600;
  font-size: calc(100% + 5.5vw);
  height: calc(100vh / 6);
  letter-spacing: 3.5px;
  text-align: center;
  color: #ffffff;
`;
const OnboardTxt = styled.p`
  font-size: calc(100% + 0.1vw);
  line-height: 2.6rem;
  letter-spacing: 2px;
  text-align: center;
  color: #ffffff;
`;
const Option = styled.a`
  display: flex;
  flex-direction: row-reverse;
  font-size: 2.5rem;
  line-height: 41px;
  letter-spacing: 2px;
  margin-bottom: calc(100vh / 50);
  color: #e6e6e6;
  cursor:pointer;
  input {
    position: absolute;
    visibility: hidden;
  }
  label{
    display: flex;
    position: relative;
    font-size: calc(100% + .1vw);
    padding-left: 4rem;
    cursor: pointer;
    -webkit-transition: all 0.25s linear;
    &:hover {
      color:#f3bfe1;
    }
  }
  .check {
    display: flex;
    position: relative;
    border: 5px solid #e05cb3;
    border-radius: 100%;
    height: 40px;
    width: 40px;
    transition: border 0.25s linear;
    -webkit-transition: border 0.25s linear;
  }
  &:hover .check {
    border: 5px solid #f3bfe1;
  }
  .check::before {
    position: relative;
    content: '';
    border-radius: 100%;
    height: 20px;
    width: 20px;
    margin: auto;
    transition: background 0.25s linear;
    -webkit-transition: background 0.25s linear;
  }
  input[type=radio]:checked ~ .check {
    border: 5px solid #e05cb3;
  }
  input[type="radio"]:checked ~ .check::before {
    background: #e05cb3;
  }
  input[type="radio"]:checked ~ label {
    color: #e05cb3;
  }
`;
const Button = styled.a`
  display: flex;
  justify-content: space-evenly;
  border-radius: 0.5rem;
  padding: 1.5rem 0.8rem;
  width: 65%;
  text-align: center;
  margin: 8% auto;
  background: #e05cb3;
  color: white;
  font-size: calc(100% + 0.5vw);
  letter-spacing: 0.1rem;
`;
const ButtonNoColor = styled.a`
  font-weight: 500;
  font-size: calc(100% + 0.1vw);
  letter-spacing: 2px;
  color: #a7a4e6;
`;
const FlexHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
`;
//current step marker
const StepDots = styled.div`
  display: flex;
  font-size: calc(100% + 19vw);
  margin: 0 auto calc(100vh / 10);
  div {
    height: 4px;
    border-radius: 50%;
    width: 0px;
    margin: 0px 1rem 0 auto;
    padding: 0.3rem;
    background: #a7a4e6;
    opacity: 45%;
    ${props => props.currentDot(props.currentStep)}
  }
`;
export default StepForm;