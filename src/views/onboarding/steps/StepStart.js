// IMPORTS
// react
import React from "react";
//intro component
import InfoIntro from "./InfoIntro";

//Start of Onboarding process after sign up, renders the intro to steps

const StepStart = props => {
  return (
    <>
      <InfoIntro {...props} />
    </>
  );
};

//EXPORTS
export default StepStart;
