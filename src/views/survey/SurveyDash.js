import React from "react";
import { Route, Link } from "react-router-dom";

const SurveyDash = () => {
    return (
      <>
        <h1>Weekly Surveys</h1>
        <h2>IN PROGRESS</h2>
        <div>
            {/* map in api call to surveys in prog */}
        </div>
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
}

export default SurveyDash;