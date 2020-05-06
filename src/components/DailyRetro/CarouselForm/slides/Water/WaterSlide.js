import React from "react";

import WaterCard from "../../../../UserDashboard/Main/Metrics/WaterCard/WaterCard.js";
import WaterQuestion from "./WaterQuestion.js";
import WaterGoal from "./WaterGoal.js";


class WaterSlide extends React.Component {
  render() {
    return (
      <div>
        <WaterQuestion next={this.props.next} previous={this.props.previous} />

        <div>
          <WaterCard />
          
            <a href="https://brainmd.com/blog/6-amazing-health-benefits-of-drinking-water/" target="_blank">

              <h4>The Benefits of Drinking Water</h4>
            </a>
          
        </div>

        <WaterGoal/>
        
      </div>
    );
  }
}

export default WaterSlide;
