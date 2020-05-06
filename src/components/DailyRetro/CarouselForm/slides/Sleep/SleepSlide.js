import React from "react";

import SleepCard from "../../../../UserDashboard/Main/Metrics/SleepCard/SleepCard";
import SleepQuestion from "./SleepQuestion.js";
import SleepGoal from "./SleepGoal.js";


class SleepSlide extends React.Component {
  render() {
    return (
      <div>
        <SleepQuestion next={this.props.next} previous={this.props.previous}/>

        <div>
          <SleepCard />
          
          <a href="https://www.healthline.com/nutrition/10-reasons-why-good-sleep-is-important" target="_blank">
              <h4>The Benefits of Sleeping Well</h4>
            </a>
          
        </div>

        <SleepGoal/>
       
      </div>
    );
  }
}

export default SleepSlide;
