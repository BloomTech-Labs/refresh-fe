import React from "react";
import {Redirect,Route} from 'react-router-dom'
const PrivateRoute = ({ privateView: PrivateView,  publicView:PublicView,userStatus,...rest }) => {
  // const Component = props.component
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          // if token is in localstorage, render the given component
          return <PrivateView />;
        } else {
          return <PublicView />;
        }
      }}
    />
  );
};
export default PrivateRoute;

