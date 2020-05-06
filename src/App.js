import React from "react";

// import PrivateViewCanvas from "./views/private";
// import PublicViewCanvas from "./views/public";
// import AdminViewCanvas from "./views/private"
// import ContextRouter from "./contexts/ContextRouter";
import PrivateRoute from './helpers/PrivateRoute'
import UserDashboard from './components/UserDashboard/UserDashboard'
import DailyRetro from './components/DailyRetro/DailyRetro'

import {Route, Switch} from 'react-router-dom';
import UserLogin from './components/Auth/UserLogin.js'
import UserSignUp from './components/Auth/UserSignUp.js'

const App = props => {
  return (
    <div className='app'>
        <Switch>
        <PrivateRoute exact path='/UserDashboard' component={UserDashboard} />
        <PrivateRoute exact path='/DailyRetro' component={DailyRetro} />
          <Route path="/sign-up" component={UserSignUp} />
          <Route exact path='/' component={UserLogin} />
        </Switch>

    </div>
  );
};

export default App;
