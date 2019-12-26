import React, { useState } from "react";

import PrivateRoute from "./helpers/PrivateRoute";
import PrivateViewCanvas from "./views/private";
import PublicViewCanvas from "./views/public";

const App = props => {
  const [userStatus, setUserStatus] = useState(false);
  return (
    <PrivateRoute
      component={PrivateViewCanvas}
      public={PublicViewCanvas}
      userStatus={setUserStatus}
    />
  );
};

export default App;
