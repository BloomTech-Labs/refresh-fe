import React from "react";
import {Redirect,Route} from 'react-router-dom'
const PrivateRoute = ({ component: Component, ...rest }) => {
  // const Component = props.component
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem("token")) {
          // if token is in localstorage, render the given component
          return <Component {...props} />;
        } else {
          return <Redirect to="/" />;
        }
      }}
    />
  );
};
export default PrivateRoute;

