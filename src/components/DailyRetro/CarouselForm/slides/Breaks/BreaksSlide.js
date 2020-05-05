import React from "react";
import { Link } from "react-router-dom";

import BreaksCard from "../../../../UserDashboard/Main/Metrics/BreaksCard/BreaksCard.js";
import BreaksQuestion from "./BreaksQuestion";
import BreaksGoal from "./BreaksGoal";

class BreaksSlide extends React.Component {
  render() {
    return (
      <div>
        <BreaksQuestion next={this.props.next} previous={this.props.previous} />

        <div>
          <BreaksCard />
          
            <Link to="https://www.mindful.org/how-to-meditate/" target="_blank">
              <h4>The importance of Taking Breaks</h4>
            </Link>
          
        </div>

        <BreaksGoal/>
        
      </div>
    );
  }
}

export default BreaksSlide;
