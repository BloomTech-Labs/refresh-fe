import React from "react";
import { Route } from "react-router-dom";

// components
import Landing from "./onboarding/Landing";
import CreateAccount from "./onboarding/CreateAccount";
import StepStart from "./onboarding/steps/StepStart";
import Login from "./onboarding/Login";
import EmailSignUp from "./onboarding/EmailSignUp";
import EmailLogIn from "./onboarding/EmailLogin";

const PublicViewCanvas = () => {
  return (
    <>
      <Route path="/firstlogin" component={StepStart} />
      <Route path="/signup" component={CreateAccount} />
      <Route path="/emailsignup" component={EmailSignUp} />
      <Route path="/emaillogin" component={EmailLogIn} />
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Landing} />
    </>
  );
};

export default PublicViewCanvas;