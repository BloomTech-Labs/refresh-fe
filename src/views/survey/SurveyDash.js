import React, { useEffect, useState } from "react";
import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import { axiosWithAuth } from "../../helpers/axiosWithAuth";
import SurveyForm from "./CreateSurvey"

const SurveyDash = () => {
  const [currentSurveys, addCurrentSurveys] = useState([]);

  useEffect(()=> {
    axiosWithAuth().get("https://apidevnow.com/questiongroups").then(res => {
      console.log(res)
    })
  })


  return (
    <>
      <h1>Weekly Surveys</h1>
      <h2>IN PROGRESS</h2>
      <div>{/* map in api call to surveys in prog */}</div>
      {/*Onclick for each div takes to corresponding survey via the splash screen in Survey.js
       */}
      <h2>NEW</h2>
      <div>
        {/* onclick as well, will need to spread in res and map for each of these boxes
         */}
      </div>
      {/* Onclick to survey creation */}
      <button>Create Survey</button>
    </>
  );
};

//styles

export default SurveyDash;
