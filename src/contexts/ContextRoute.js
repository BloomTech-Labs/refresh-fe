import React from "react";
import {Redirect,Route} from 'react-router-dom'
const PrivateRoute = ({ privateView: PrivateView,  publicView:PublicView,userStatus,...rest }) => {
  // const Component = props.component
  return (
    <Route
      {...rest}
      render={() => {
        
      }}
    />
  );
};
export default PrivateRoute;