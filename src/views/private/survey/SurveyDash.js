import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import { axiosWithAuth } from "../../../helpers/axiosWithAuth";
import SurveyForm from "./CreateSurvey";

const SurveyDash = props => {
  const [currentSurveys, addCurrentSurveys] = useState([]);
  const [allSurveys, setAllSurveys] = useState([]);
  const { url } = props.match;

  useEffect(() => {
    axiosWithAuth()
      .get("/questiongroups")
      .then(res => {
        console.log(res);
        if (res.data.forms.in_progress === true) {
          addCurrentSurveys(res.data.forms);
        } else {
          setAllSurveys(res.data.forms);
        }
      });
  }, []);

  console.log("currentSurveys", currentSurveys);
  console.log("allSurveys", allSurveys);
  return (
    <Wrapper>
      <StyledContainer>
        <h1>Weekly Surveys</h1>
        <h2>IN PROGRESS</h2>
        {currentSurveys.map((group, i) => {
          return (
            <div key={i}>
              <div onClick={() => props.history.push(url + "/surveyintro")}>
                {group.name}
              </div>
            </div>
          );
        })}

        <h2>NEW</h2>
        {allSurveys.map((group, i) => {
          return (
            <div key={i}>
              <div onClick={() => props.history.push(url + "/surveyintro")}>
                {group.name}
              </div>
            </div>
          );
        })}
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
`;

const StyledContainer = styled.div`
display: flex;
max-width: 500px;
flex-direction: column
margin: 0 auto;
`;

export default SurveyDash;
