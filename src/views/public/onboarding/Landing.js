// IMPORTS
// react
import React from "react";
// styled components
import styled from "styled-components";
// images
import onboardlogo from "../../../images/refresh-yo-guy.svg";

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
      <FlexHolder2>
        <Button onClick={routeToSignUp}>Get Started</Button>
        <ButtonNoColor onClick={routeToLogin}>
          I already have an account
        </ButtonNoColor>
        <AdminSignIn onClick={routeToAdmin}>Admin Login Here</AdminSignIn>
      </FlexHolder2>
    </OnBoardContainer>
  );
};


const OnBoardContainer = styled.div`
  display: flex;
  flex-direction:column;
  width: 120vw;
  height: 100vh;
  overflow-y: auto;
  font-family: "Catamaran", sans-serif;
  margin: 5% auto;
  line-height: 1.5;
  &:nth-child(*) {
    margin-top: 20%;
  }
`;

const Logo = styled.img`
  display: flex;
  justify-content: center;
  width: 90%;
  max-width: 72%;
  height: auto;
  margin: 10% auto auto auto;
  border: 5px;
  border-color: black;

  @media screen and (min-width: 1000px) {
    padding-left: 300px;
    margin-top: 20px;
  }
`;

const FlexHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 auto 10%;
  align-items: flex-start;
  width: 50%;
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

const FlexHolder2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 0 auto 3%;
  align-items: left;
  width: 50%;
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
  color: black;
  margin-left:10%;
  @media screen and (min-width: 1000px) {
    font-size: calc(100% + 6.5vw);
    margin-top: -20px;
  }
`;

const OnboardTxt = styled.p`
  font-size: calc(100% + 1.7vw);
  line-height: 40px;
  letter-spacing: 0.035em;
  color: black;
  margin-left:10%;
`;

const Button = styled.a`
  display: inline-block;
  border-radius: 0.5rem;
  padding: 1.5rem 0.8rem;
  width: 50%;
  text-align: center;
  margin: 10px auto;
  background: #E05CB3;
  color: white;
  font-size: calc(100% + 0.5vw);
  &:hover {
    cursor: pointer;
  }
`;

const AdminSignIn = styled.a`
display: inline-block;
border-radius: 0.5rem;
padding: 1.5rem 0.8rem;
width: 50%;
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

//EXPORT
export default Landing;
