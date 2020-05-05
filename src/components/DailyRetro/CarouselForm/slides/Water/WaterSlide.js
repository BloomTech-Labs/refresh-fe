import React from "react";
import { Link } from "react-router-dom";

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
            <a>
              <Link to="https://www.mindful.org/how-to-meditate/" target="_blank">

                <h4>Why is tracking sleep important?</h4>
              </Link>
            </a>
          </div>

          <WaterGoal/>
        
        </div>
      </div>
    );
  }
}

export default WaterSlide;
