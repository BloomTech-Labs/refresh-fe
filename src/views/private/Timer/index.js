import React from "react";
import { Switch, Route } from "react-router-dom";
import TimerOne from "./TimerOne";
import TimerTwo from "./TimerTwo";
import TimerThree from "./TimerThree";
import TimerFour from "./TimerFour";
import TimerShortBreakOne from "./TimerShortBreakOne";
import TimerShortBreakTwo from "./TimerShortBreakTwo";
import TimerShortBreakThree from "./TimerShortBreakThree";
import TimerLongBreak from "./TimerLongBreak";
const TimerCanvas = props => {
  const { url } = props.match;
  console.log('url',url)
  console.log(props)
  return (
    <Switch>
      <Route exact path={url} component={TimerOne} />
      <Route path={url + "/timer-2"} component={TimerTwo} />
      <Route path={url + "/timer-3"} component={TimerThree} />
      <Route path={url + "/timer-4"} component={TimerFour} />
      <Route path={url + "/break-1"} component={TimerShortBreakOne} />
      <Route path={url + "/break-2"} component={TimerShortBreakTwo} />
      <Route path={url + "/break-3"} component={TimerShortBreakThree} />
      <Route path={url + "/break-4"} component={TimerLongBreak} />
    </Switch>
  );
};

export default TimerCanvas;
