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
  );
};

// STYLED COMPONENTS
//Onboarding Reusable Styles
// we abstract out reusable global styles later on -JC
// const OnBoardWrapper = styled.div`
//   display: flex;
//   width: 100vw;
//   height: 100vh;
//   max-height: 100vh;
//   background-color: #4742BC;
//   background-image:url(${waves});
//   overflow-x: auto;
// `;

const OnBoardContainer = styled.div`
  display: flex;
  flex-direction:column;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  background-color: #4742bc;
  background-image: url(${waves});
  font-family: "Catamaran", sans-serif;
  margin: auto;
  line-height: 1.5;
  color: #ccc9ff;
  &:nth-child(*) {
    margin-top: 10%;
  }
`;

const Logo = styled.img`
  width: 100%;
  max-width: 82%;
  height: auto;
  margin: 10% auto auto;
`;

const FlexHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto auto;
  align-items: flex-start;
  width: 100%;

  .slogan {
    font-size: calc(100% + 3.9vw);
    line-height: 3.9rem;
  }
`;

const Refresh = styled.h1`
  font-weight: bold;
  font-size: calc(100% + 9vw);
  line-height: 82px;
  letter-spacing: 3.5px;
  color: #ffffff;
  margin-left:10%;
`;

const OnboardTxt = styled.p`
  font-size: calc(100% + 1.7vw);
  line-height: 33px;
  letter-spacing: 0.035em;
  color: #ccc9ff;
  margin-left:10%;
`;

const Button = styled.a`
  display: inline-block;
  border-radius: 0.5rem;
  padding: 1.5rem 0.8rem;
  width: 64%;
  text-align: center;
  margin: auto;
  background: #E05CB3;
  color: white;
  font-size: calc(100% + 0.5vw);
}
`;

const ButtonNoColor = styled.a`
  margin: auto;
  padding: 0.7rem;
  font-size: 1.6rem;
`;

//EXPORT
export default Landing;
