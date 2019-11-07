// IMPORTS
// react
import React from 'react';
// styled components
import styled from 'styled-components';
// images
import onboardlogo from '../../images/refresh-yo-guy.svg';
const Landing = props => {
  const routeToSignUp = e => {
    e.preventDefault();
    props.history.push('/signup');
  };
  const routeToLogin = e => {
    e.preventDefault();
    props.history.push('/login');
  };
  const routeToComponentTesting = e => {
    e.preventDefault();
    props.history.push('/atoms');
  };
  return (
    <OnBoardWrapper>
      <OnBoardContainer>
        <Logo src={onboardlogo} />
        <FlexHolder>
          <Refresh>Refresh</Refresh>
          <OnboardTxt>
            Made for students,
            <br /> by students.
          </OnboardTxt>
          <br />
          <OnboardTxt>
            Because success starts with the <br /> body in mind.
          </OnboardTxt>
        </FlexHolder>
        <FlexHolder>
          <Button onClick={routeToSignUp}>Get Started</Button>
          <ButtonNoColor onClick={routeToLogin}>
            I already have an account
          </ButtonNoColor>
        </FlexHolder>
        <Button onClick={routeToComponentTesting}>Component Testing</Button>
      </OnBoardContainer>
    </OnBoardWrapper>
  );
};

// STYLED COMPONENTS
//Onboarding Reusable Styles
// we abstract out reusable global styles later on -JC
const OnBoardWrapper = styled.div`
  background-color: #3a3699;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
`;

const OnBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: 'Catamaran', sans-serif;
  margin: auto;
  line-height: 1.5;
  background-color: #3a3699;
  color: #7f7cca;
`;
const Refresh = styled.h1`
  font-weight: bold;
  font-size: 5rem;
  line-height: 82px;
  letter-spacing: 3.5px;
  color: #ffffff;
`;

const OnboardTxt = styled.p`
  font-size: 2rem;
  line-height: 33px;
  letter-spacing: 0.035em;
  color: #ccc9ff;
`;
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
`;
const ButtonNoColor = styled.a`
  margin: auto;
  font-size: 1.6rem;
`;

const FlexHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  align-items: flex-start;
  width: 100%;
  padding: 2.5rem 4rem;
`;

const Logo = styled.img`
  width: 100%;
  max-width: 82%;
  height: auto;
  margin: auto;
`;

export default Landing;
