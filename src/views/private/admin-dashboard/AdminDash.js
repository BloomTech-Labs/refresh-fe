// IMPORTS
// react
import React from "react";
import { Route } from "react-router-dom";
// components
import WithNavigation from "../AdminNav";
import Leaderboard from "../admin-leaderboard/leaderboard";
import UserProfile from "../user-profile/user-profile";
import UserList from "../user-list/user-list";
// COMPONENT../team/modal
const AdminDash = props => {

  return (
    <div>
      <div>
        <WithNavigation />
        <Route exact path="/users" component={UserList} />
        <Route path="/users/:id" component={UserProfile} />
        <Route exact path="/leaderboard" component={Leaderboard} />
      </div>
    </div>
  );
};

// EXPORT
export default AdminDash;