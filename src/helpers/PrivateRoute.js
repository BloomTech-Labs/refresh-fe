import React from "react";
import {Redirect,Route} from 'react-router-dom'
<<<<<<< HEAD
const PrivateRoute = ({ component: Component, ...rest }) => {
  // const Component = props.component

=======
const PrivateRoute = ({ privateView: PrivateView,  publicView:PublicView,userStatus,...rest }) => {
  // const Component = props.component
>>>>>>> romans-routing
  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          // if token is in localstorage, render the given component
<<<<<<< HEAD
          return <Component />;
        } else {
          return <Redirect to="/" />;
=======
          return <PrivateView />;
        } else {
          return <PublicView />;
>>>>>>> romans-routing
        }
      }}
    />
  );
};
export default PrivateRoute;

