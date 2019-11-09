import React, { useContext } from "react";
// styled components
import { UserContext } from "../../../contexts/UserContext";
import styled from "styled-components";

const InfoIntro = () => {
  const profile = useContext(UserContext);
  // const handleSubmit = e => {
  //     e.preventDefault();
  //     props.onSubmit();
  // };
  return (
    <OnBoardWrapper>
      <OnBoardContainer>
        <Refresh>
          We need to learn a little more about <GreenSpan>you</GreenSpan>
        </Refresh>
        <OnboardTxt>
          We just need some data to set up your profile. All of your information
          will stay private.
        </OnboardTxt>
        <Button onClick={profile.handleSubmit}>Continue</Button>
      </OnBoardContainer>
    </OnBoardWrapper>
  );
};

// STYLED COMPONENTS
//Onboarding Reusable Styles
const GreenSpan = styled.span`
  color: #28c96c;
`;

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
  justify-content: space-around;
  font-family: "Catamaran", sans-serif;
  margin: auto;
  line-height: 1.5;
  background-color: #3a3699;
  color: #7f7cca;
  height: 100vh;
  padding: 2.5rem 4rem;
`;
const Refresh = styled.h1`
  margin: 4rem 0;
  font-weight: 600;
  font-size: 4rem;
  line-height: 6.6rem;
  letter-spacing: 5px;
  color: #ffffff;
`;

const OnboardTxt = styled.p`
  font-size: 1.6rem;
  line-height: 26px;
  letter-spacing: 2px;
  color: #a7a4e6;
  margin-bottom: 5rem;
`;
const Button = styled.a`
  display: inline-block;
  border-radius: 0.5rem;
  padding: 1.5rem 0.8rem;
  width: 100%;
  text-align: center;
  margin: auto;
  background: #6487ff;
  color: white;
  font-size: 1.6rem;
`;

const FlexHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: auto;
  align-items: flex-start;
  width: 100%;
  padding: 2.5rem 4rem;
`;
export default InfoIntro;
