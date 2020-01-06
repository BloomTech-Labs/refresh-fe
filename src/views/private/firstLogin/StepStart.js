// IMPORTS
// react
import React from "react";
import {Route} from 'react-router-dom';
//intro component
import InfoIntro from "./InfoIntro";
import UserRole from "./UserRole";
import StepForm from "./StepForm";

//Start of Onboarding process after sign up, renders the intro to steps

const StepStart = props => {
  const {url} = props.match;
  return (
    <>
      <Route exact path={url} component={InfoIntro} {...props} />
      <Route exact path={`${url}/userrole`} component={UserRole} {...props} />
      <Route exact path={`${url}/questions`} component={StepForm} {...props} />
    </>
  );
};

//EXPORTS
export default StepStart;
