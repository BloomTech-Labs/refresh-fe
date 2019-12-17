import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Survey = () => {
  return (
    <>
      <h1>Your opinion in 5 minutes.</h1>
      <p>
        Earn 25 points by responding to this survey. Each survey helps us
        improve what kind of missions you can complete.
      </p>
      {/* Onclick takes to Survey dash */}
      <button>Take the survey</button>
    </>
  );
};
export default Survey;
