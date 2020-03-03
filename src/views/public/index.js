import React from "react";
import { Route, Redirect,Switch } from "react-router-dom";

// components
import Landing from "./onboarding/Landing";
import CreateAccount from "./onboarding/CreateAccount";
import Login from "./onboarding/Login";
import EmailSignUp from "./onboarding/EmailSignUp";
import EmailLogIn from "./onboarding/EmailLogin";
import UserProfile from '../private/user-profile/user-profile';


const PublicViewCanvas = () => {
  return (
    <Switch>
      <Route path="/signup" component={CreateAccount} />
      <Route path="/emailsignup" component={EmailSignUp} />
      <Route path="/emaillogin" component={EmailLogIn} />
      <Route path="/login" component={Login} />
      {/* <Route path="/admin" component={} /> */}
      <Route exact path="/" component={Landing} />
      <Route path="/userprofile" component={UserProfile} /> 
      <Redirect to="/" />
    </Switch>
  );
};

export default PublicViewCanvas;
