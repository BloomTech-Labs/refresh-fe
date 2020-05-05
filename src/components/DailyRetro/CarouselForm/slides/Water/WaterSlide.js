import React from "react";
import { Link } from "react-router-dom";

import WaterCard from "../../../../UserDashboard/Main/Metrics/WaterCard/WaterCard.js";
import WaterQuestion from "./WaterQuestion.js";
import WaterGoal from "./WaterGoal.js";


class WaterSlide extends React.Component {
  render() {
    return (
<<<<<<< HEAD
      <div className='slides'>
        <WaterQuestion />
=======
      <div>
        <WaterQuestion next={this.props.next} previous={this.props.previous} />
>>>>>>> 9cb0c326a696db61b344db7fc6baf6ac15d2a2d6

        <div>
          <WaterCard />
          <a>
            <Link to="https://www.mindful.org/how-to-meditate/" target="_blank">

              <h4>Why is tracking sleep important?</h4>
            </Link>
          </a>
        </div>

        <WaterGoal/>
        
      </div>
    );
  }
}

export default WaterSlide;
