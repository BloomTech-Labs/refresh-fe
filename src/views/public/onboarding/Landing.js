// IMPORTS
// react
import React from "react";
// styled components
import styled from "styled-components";
// images
import onboardlogo from "../../../images/refresh-yo-guy.svg";
import waves from "../../../images/Onboarding/waves.svg";

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

  const routeToAdmin = e => {
    e.preventDefault();
    props.history.push("/adminlogin");
  };

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
        <AdminSignin onClick={routeToAdmin}>Admin Login Here</AdminSignin>
      </FlexHolder>
    </OnBoardContainer>
  );
};


const OnBoardContainer = styled.div`
  display: flex;
  flex-direction:column;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
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

  @media screen and (min-width: 1000px) {
    padding-left: 300px;
    margin-top: 20px;
  }
`;

const FlexHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto auto;
  align-items: flex-start;
  width: 80%;

  .slogan {
    font-size: calc(100% + 3.9vw);
    line-height: 3.9rem;
    @media screen and (min-width: 1000px) {
      font-size: calc(100% + 2vw);
      line-height: 3rem;
      margin-top: 10px;
    }
  }
`;

const Refresh = styled.h1`
  font-weight: bold;
  font-size: calc(100% + 9vw);
  line-height: 82px;
  letter-spacing: 3.5px;
  color: #ffffff;
  margin-left:10%;
  @media screen and (min-width: 1000px) {
    font-size: calc(100% + 6.5vw);
    margin-top: -20px;
  }
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
  margin: 10px auto;
  background: #E05CB3;
  color: white;
  font-size: calc(100% + 0.5vw);
  &:hover {
    cursor: pointer;
  }
`;

const AdminSignin = styled.a`
display: inline-block;
border-radius: 0.5rem;
padding: 1.5rem 0.8rem;
width: 64%;
text-align: center;
margin: 10px auto;
background: #6997F2;
color: white;
font-size: calc(100% + 0.5vw);
&:hover {
  cursor: pointer;
}
`;

const ButtonNoColor = styled.a`
  margin: auto;
  padding: 0.7rem;
  font-size: 1.6rem;
  &:hover {
    cursor: pointer;
  }
`;

const FBButton = styled.a`
  display: flex;
  justify-content: space-around;
  border-radius: 0.5rem;
  padding: 1.5rem 0;
  width: 84%;
  text-align: center;
  margin: 3% auto%;
  background: #4a639e;
  color: white;
  font-size: calc(110% + 0.5vw);
  letter-spacing: 0.1rem;
  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 1000px) {
    margin: 3% auto;
  }

  @media screen and (max-width: 1000px) {
    margin: 4% auto;
  }

  @media screen and (max-width: 500px) {
    margin: 7% auto;
  }
`;

//EXPORT
export default Landing;
