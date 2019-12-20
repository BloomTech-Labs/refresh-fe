import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../../helpers/axiosWithAuth";

const Survey = () => {
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
          <button>Take the survey</button>
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
