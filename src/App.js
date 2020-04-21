import React from "react";

import PrivateViewCanvas from "./views/private";
import PublicViewCanvas from "./views/public";
import AdminViewCanvas from "./views/private"
import ContextRouter from "./contexts/ContextRouter";

import {Route} from 'react-router-dom';
import UserLogin from './components/UserLogin.js'
import UserSignUp from './components/UserSignUp.js'

const App = props => {
  return (
    // <ContextRouter 
    //   privateView={PrivateViewCanvas}
    //   publicView={PublicViewCanvas}
    // />

    <>
    <Route path="/sign-up" component={UserSignUp} />
    <Route exact path='/' component={UserLogin} />
    </>
  );
};

export default App;
