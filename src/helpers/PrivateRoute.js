import React from "react";
import {Redirect,Route} from 'react-router-dom'
const PrivateRoute = ({ component: Component,  public:Public,userStatus,...rest }) => {
  // const Component = props.component
  console.log('here')

  return (
    <Route
      {...rest}
      render={() => {
        if (localStorage.getItem("token")) {
          console.log('private')
          // if token is in localstorage, render the given component
          return <Component />;
        } else {
          console.log('public')
          return <Public />;
        }
      }}
    />
  );
};
export default PrivateRoute;

