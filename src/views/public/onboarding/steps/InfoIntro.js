//IMPORTS
//react
import React, { useState } from "react";
// styled components
import styled from "styled-components";
//images
import waves from "../../../../images/Onboarding/waves.svg";
import slogan from "../../../../images/Onboarding/need_to_know_more.svg";
//conditionally rendering steps component
import StepForm from "./StepForm";

const InfoIntro = props => {
  //hooks
  const [consent, setConsent] = useState(false);

  //if statement is true then render the steps component else stay on onboarding component
  if (consent) {
    return <StepForm {...props} />;
  } else {
    return <OnBoarding consent={consent} setConsent={setConsent} />;
  }
};

//render
const OnBoarding = ({ consent, setConsent }) => {
  return (
    <OnBoardContainer>
      <Logo src={slogan} />
      <Button onClick={() => setConsent(true)}>Continue</Button>
    </OnBoardContainer>
  );
};

// STYLED COMPONENTS
//Onboarding Reusable Styles

const OnBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  font-family: "Catamaran", sans-serif;
  line-height: 1.5;
  color: #7f7cca;
  background-color: #4742bc;
  background-image: url(${waves});
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
`;

const Button = styled.a`
  display: inline-block;
  border-radius: 0.5rem;
  padding: 1.5rem 0.8rem;
  width: 70%;
  text-align: center;
  margin: auto;
  background: #e05cb3;
  color: white;
  font-size: 1.6rem;
`;

const Logo = styled.img`
  width: 85%;
  max-width: 100%;
  height: calc(100vh / 2);
  margin: auto;
`;

export default InfoIntro;
