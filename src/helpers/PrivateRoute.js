import React from "react";
import {Redirect,Route} from 'react-router-dom'
const PrivateRoute = ({ privateView: PrivateView,  publicView:PublicView,userStatus,...rest }) => {
  // const Component = props.component
  console.log('here')

  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          console.log('private')
          // if token is in localstorage, render the given component
          return <PrivateView />;
        } else {
          console.log('public')
          return <PublicView />;
        }
      }}
    />
  );
};
export default PrivateRoute;

