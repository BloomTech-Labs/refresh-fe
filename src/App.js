import React from "react";

// import PrivateViewCanvas from "./views/private";
// import PublicViewCanvas from "./views/public";
// import AdminViewCanvas from "./views/private"
// import ContextRouter from "./contexts/ContextRouter";
import PrivateRoute from './helpers/PrivateRoute'
import UserDashboard from './components/UserDashboard/UserDashboard'

import {Route, Switch} from 'react-router-dom';
import UserLogin from './components/UserLogin.js'
import UserSignUp from './components/UserSignUp.js'

const App = props => {
  return (
    // <ContextRouter 
    //   privateView={PrivateViewCanvas}
    //   publicView={PublicViewCanvas}
    // />
    <div className='refresh-app'>
    <Switch>
    <PrivateRoute exact path='/UserDashboard' component={UserDashboard}/>
    <Route path="/sign-up" component={UserSignUp} />
    <Route exact path='/' component={UserLogin} />
    </Switch>
    </div>
  );
};

export default App;
