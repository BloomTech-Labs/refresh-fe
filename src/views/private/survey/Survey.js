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
        <div>
          <h1>Your opinion in 5 minutes.</h1>
          <p>
            Earn 25 points by responding to this survey. Each survey helps us
            improve what kind of missions you can complete.
          </p>
          {/* onclick to actual survey */}
          <button onClick={()=> props.history.push("/coming-soon")}>Take the survey</button>
        </div>
      </StyledContainer>
    </>
  );
};

//styles
const StyledContainer = styled.div`
  margin-top: 25%;
`;

const StyledWrapper = styled.div`
  margin: 0 auto;
`;

export default Survey;
