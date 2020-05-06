import React from "react";

import SleepCard from "../../../../UserDashboard/Main/Metrics/SleepCard/SleepCard";
import SleepQuestion from "./SleepQuestion.js";
import SleepGoal from "./SleepGoal.js";


class SleepSlide extends React.Component {
  render() {
    return (
      <div className='metric-slide'>
        <SleepQuestion next={this.props.next} previous={this.props.previous}/>

        <div className='slide-content'>
          <div className='slide-card'>
          <SleepCard />
          
          <a href="https://www.healthline.com/nutrition/10-reasons-why-good-sleep-is-important" target="_blank">
            Why Sleep?
          </a>
          
        </div>

        <SleepGoal/>
        </div>
       
      </div>
    );
  }
}

export default SleepSlide;
