import React, { useState } from "react";

import PrivateRoute from "./helpers/PrivateRoute";
import PrivateViewCanvas from "./views/private";
import PublicViewCanvas from "./views/public";
import ContextRouter from "./contexts/ContextRouter";

const App = props => {
  return (
    <ContextRouter
      privateView={PrivateViewCanvas}
      publicView={PublicViewCanvas}
    />
  );
};

export default App;
