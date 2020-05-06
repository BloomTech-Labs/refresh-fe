import React from "react";
import { Link } from "react-router-dom";

import BreaksCard from "../../../../UserDashboard/Main/Metrics/BreaksCard/BreaksCard.js";
import BreaksQuestion from "./BreaksQuestion";
import BreaksGoal from "./BreaksGoal";

class BreaksSlide extends React.Component {
  render() {
    return (
      <div className='metric-slide'>
        
        <BreaksQuestion previous={this.props.previous} />

        <div className='slide-content'>
          <div className='slide-card'>
            <BreaksCard />
            
            <a href="https://www.psychologytoday.com/us/blog/changepower/201704/how-do-work-breaks-help-your-brain-5-surprising-answers" target="_blank">
              Why take Breaks?
            </a>
          
          </div>

          <BreaksGoal/>
        </div>
      </div>
    );
  }
}

export default BreaksSlide;
