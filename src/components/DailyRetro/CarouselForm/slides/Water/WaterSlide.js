import React from "react";

import WaterCard from "../../../../UserDashboard/Main/Metrics/WaterCard/WaterCard.js";
import WaterQuestion from "./WaterQuestion.js";
import WaterGoal from "./WaterGoal.js";


class WaterSlide extends React.Component {
  render() {
    return (
      <div className='metric-slide'>
        <WaterQuestion next={this.props.next} previous={this.props.previous} />

        <div className='slide-content'>
          <div className='slide-card'>
            <WaterCard />
            <a href="https://brainmd.com/blog/6-amazing-health-benefits-of-drinking-water/" target="_blank">
            Why Drink Water?
            </a>
          </div>

          <WaterGoal/>
        
        </div>
      </div>
    );
  }
}

export default WaterSlide;
