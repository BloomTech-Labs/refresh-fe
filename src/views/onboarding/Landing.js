// IMPORTS
// react
import React from "react";
// styled components
import styled from "styled-components";
// images
import onboardlogo from "../../images/refresh-yo-guy.svg";
import waves from "../../images/Onboarding/waves.svg";

const Landing = props => {
  //routes
  const routeToSignUp = e => {
    e.preventDefault();
    props.history.push("/signup");
  };

  const routeToLogin = e => {
    e.preventDefault();
    props.history.push("/login");
  };

  // const routeToComponentTesting = e => {
  //   e.preventDefault();
  //   props.history.push('/atoms');
  // };

  //render
  return (
    <OnBoardWrapper>
      <OnBoardContainer>
        <Logo src={onboardlogo} />
        <FlexHolder>
          <Refresh>Refresh</Refresh>
          <OnboardTxt className="slogan">
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
      </OnBoardContainer>
    </OnBoardWrapper>
  );
};

// STYLED COMPONENTS
//Onboarding Reusable Styles
// we abstract out reusable global styles later on -JC
const OnBoardWrapper = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  background-color: #4742BC;
  background-image:url(${waves});
  overflow-x: auto;
`;

const OnBoardContainer = styled.div`
  font-family: "Catamaran", sans-serif;
  margin: auto;
  line-height: 1.5;
  color: #CCC9FF;
`;

const Logo = styled.img`
  max-width: 80%;
  width: 100%;
  height: auto;
  margin: 5rem auto 0 2rem;
`;

const FlexHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  align-items: flex-start;
  width: 100%;
  padding: 2.5rem 4rem;

  .slogan{
    font-size:calc(110% + 3.9vw);
    line-height:4.9rem;
  }
`;

const Refresh = styled.h1`
  font-weight: bold;
  font-size: calc(110% + 9vw);
  line-height: 82px;
  letter-spacing: 3.5px;
  color: #ffffff;
`;

const OnboardTxt = styled.p`
  font-size: calc(110% + 1.7vw);
  line-height: 33px;
  letter-spacing: 0.035em;
  color: #ccc9ff;
`;

const Button = styled.a`
  display: inline-block;
  border-radius: 0.5rem;
  padding: 1.5rem 0.8rem;
  width: 84%;
  text-align: center;
  margin: auto;
  background: #E05CB3;
  color: white;
  font-size: calc(110% + 0.5vw);
}
`;

const ButtonNoColor = styled.a`
  margin: auto;
  padding: 0.7rem;
  font-size: 1.6rem;
`;


//EXPORT
export default Landing;
