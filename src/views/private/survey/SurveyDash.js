import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import { axiosWithAuth } from "../../../helpers/axiosWithAuth";
import SurveyForm from "./CreateSurvey";

const SurveyDash = props => {
  const [currentSurveys, addCurrentSurveys] = useState([]);
  const { url } = props.match;

  useEffect(() => {
    axiosWithAuth()
      .get("/questiongroups")
      .then(res => {
        addCurrentSurveys(res.data.forms);
      });
  }, []);

  return (
    <Wrapper>
      <StyledContainer>
        <h1>Weekly Surveys</h1>
        <h2>IN PROGRESS</h2>
        {currentSurveys.map((group, i) => {
          return (
            <div key={i}>
              <div onClick={()=> props.history.push(url +"/surveyintro")}>{group.name}</div>
            </div>
          );
        })}

        <h2>NEW</h2>
        <div>
          {/* onclick as well, will need to spread in res and map for each of these boxes
           */}
        </div>
        {/* Onclick to survey creation */}
        <button onClick={() => props.history.push(url + "/createsurvey")}>
          Create Survey
        </button>
      </StyledContainer>
    </Wrapper>
  );
};

//styles
const Wrapper = styled.div`
display: flex;
margin: 0 auto;


`

const StyledContainer = styled.div`
display: flex;
max-width: 500px;
flex-direction: column
margin: 0 auto;
`

export default SurveyDash;
