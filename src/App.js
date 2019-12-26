import React, { useState } from "react";

import PrivateRoute from "./helpers/PrivateRoute";
import PrivateViewCanvas from "./views/private";
import PublicViewCanvas from "./views/public";

const App = props => {
  return (
    <PrivateRoute
      privateView={PrivateViewCanvas}
      publicView={PublicViewCanvas}
    />
  );
};

export default App;
