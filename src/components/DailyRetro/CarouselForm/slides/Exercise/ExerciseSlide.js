import React from "react";

import ExerciseCard from "../../../../UserDashboard/Main/Metrics/ExcerciseCard/ExcerciseCard.js";
import ExerciseQuestion from "./ExerciseQuestion";
import ExerciseGoal from "./ExerciseGoal";

class ExerciseSlide extends React.Component {
  render() {
    return (
      <div>
        <ExerciseQuestion next={this.props.next} previous={this.props.previous} />

        <div>
          <ExerciseCard />
          
          <a href="https://www.healthline.com/nutrition/10-benefits-of-exercise" target="_blank">
              <h4>The Benefits of Regular Exercise</h4>
            </a>
          
        </div>

        <ExerciseGoal/>
        
      </div>
    );
  }
}

export default ExerciseSlide;
