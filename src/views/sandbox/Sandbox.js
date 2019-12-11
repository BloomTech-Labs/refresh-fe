// WELCOME TO THE SANDBOX
// There are a lot of people testing things in random places and adding random routes.
// Instead of doing that please use this sandbox for anything that you need to test.
// If I need to come back and add default page styling so that you guys can see things
// in line with what you would see on a normal page, just let me know and I will fix
// -JC

// IMPORTS

import React from "react";
// import { Router } from "react-router-dom";
// import styled from "styled-components";
// helpers
// import { test, flex } from "../../styles/global/Mixins";
import WaterGauge from "../../components/molecules/gauge/waterGauge";
import ActivityGauge from "../../components/molecules/gauge/activityGauge";
import SleepGauge from "../../components/molecules/gauge/sleepGauge"
import HealthyEatingGauge from "../../components/molecules/gauge/healthyEatingGauge"
// Views to test

// COMPONENT
const Sandbox = () => {
  return (
    <>
      welcome to the sandbox
      {/* <WaterGauge /> */}
      {/* <ActivityGauge /> */}
      {/* <SleepGauge /> */}
      <HealthyEatingGauge />

    </>
  );
};

// STYLED COMPONENTS
// todo

// EXPORT
export default Sandbox;
