import React from "react";
import { Link } from "react-router-dom";

import BreaksCard from "../../../../UserDashboard/Main/Metrics/BreaksCard/BreaksCard.js";
import BreaksQuestion from "./BreaksQuestion";
import BreaksGoal from "./BreaksGoal";

class BreaksSlide extends React.Component {
  render() {
    return (
      <div>
        <BreaksQuestion previous={this.props.previous} />

        <div>
          <BreaksCard />
          
          <a href="https://www.psychologytoday.com/us/blog/changepower/201704/how-do-work-breaks-help-your-brain-5-surprising-answers" target="_blank">
              <h4>The Importance of Taking Breaks</h4>
            </a>
          
        </div>

        <BreaksGoal/>
        
      </div>
    );
  }
}

export default BreaksSlide;
