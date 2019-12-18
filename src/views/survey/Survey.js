import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../../helpers/axiosWithAuth";

const Survey = () => {


  return (
    <>
      <h1>Your opinion in 5 minutes.</h1>
      <p>
        Earn 25 points by responding to this survey. Each survey helps us
        improve what kind of missions you can complete.
      </p>
{/* onclick to actual survey */}
      <button>Take the survey</button>
    </>
  );
};


//styles
export default Survey;
