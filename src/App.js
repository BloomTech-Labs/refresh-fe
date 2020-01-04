import React from "react";

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
