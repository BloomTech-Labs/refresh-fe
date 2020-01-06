import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import ComingSoon from "../../private/coming-soon/ComingSoon"
// This page is more or less a placeholder for next releases -- after clicking "take survey" it will need to send user to the individual
// survey based on the id from said "form group".  Use that to make an axios call to BE and it will retrieve questions.

const Survey = props => {
  return (
    <>
      <StyledContainer>
        <StyledInner>
          <h1>Your opinion in 5 minutes.</h1>
          <p>
            Earn 25 points by responding to this survey. Each survey helps us
            improve what kind of missions you can complete.
          </p>
          {/* onclick to actual survey, should put to questiongroups with in_progress: "true" */}
          <StyledButton onClick={() => props.history.push("/coming-soon")}>
            Take the survey
          </StyledButton>
        </StyledInner>
      </StyledContainer>
    </>
  );
};

//styles
const StyledContainer = styled.div`
  font-family: catamaran;
  display: flex;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  padding-top: 10rem;
  align-items: center;
  margin: 0 auto;
`;

const StyledButton = styled.button`
  position: absolute;
  padding: 1rem;
  width: 251px;
  margin: 0 auto;
  color: #e6e6e6;
  background-color: #e05cb3;
  border: none;
  border-radius: 5px;
  font-weight: bold;
`;

const StyledInner = styled.div`
  max-width: 80vw;
  margin: 0 auto;
  h1 {
    padding: 1rem;
    color: #e05cb3;
    font-weight: bold;
    font-size: 2.5rem;
    justify-content: center;
  }
  p {
    padding: 1rem;
    font-size: 1.5rem;
    color: #e6e6e6;
    line-spacing: 1rem;
  }
`;

export default Survey;
