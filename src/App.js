import React from "react";

import PrivateRoute from './helpers/PrivateRoute'
import PrivateRouteAdmin from './helpers/PrivateRouteAdmin'
import UserDashboard from './components/UserDashboard/UserDashboard'
import DailyRetro from './components/DailyRetro/DailyRetro'

import {Route, Switch} from 'react-router-dom';
import UserLogin from './components/Auth/UserLogin.js'
import UserSignUp from './components/Auth/UserSignUp.js'

import Leaderboard from '../src/views/private/admin-leaderboard/leaderboard.js'
import UserList from '../src/views/private/user-list/user-list.js'
import UserProfile from '../src/views/private/user-profile/user-profile.js'

const App = props => {
  return (
    <div className='app'>

        <Switch>
        <PrivateRoute exact path='/UserDashboard' component={UserDashboard} />
        <PrivateRoute exact path='/DailyRetro' component={DailyRetro} />
          <Route path="/sign-up" component={UserSignUp} />
          <Route exact path='/' component={UserLogin} />

        <PrivateRouteAdmin exact path="/leaderboard" component={Leaderboard} />
        <PrivateRouteAdmin exact path="/users" component={UserList} />
        <PrivateRouteAdmin path="/users/:id" component={UserProfile} />
        </Switch>

    </div>
  );
};

export default App;
