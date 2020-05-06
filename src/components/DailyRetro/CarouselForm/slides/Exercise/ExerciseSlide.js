import React from "react";

import ExerciseCard from "../../../../UserDashboard/Main/Metrics/ExcerciseCard/ExcerciseCard.js";
import ExerciseQuestion from "./ExerciseQuestion";
import ExerciseGoal from "./ExerciseGoal";

class ExerciseSlide extends React.Component {
  render() {
    return (
        <div className='metric-slide'>
          <ExerciseQuestion next={this.props.next} previous={this.props.previous} />

          <div className='slide-content'>
            <div className='slide-card'>
              <ExerciseCard />
              
              <a href="https://www.healthline.com/nutrition/10-benefits-of-exercise" target="_blank">
              Why Exercise?
              </a>
            </div>

          <ExerciseGoal/>
        
        </div>
      </div>
    );
  }
}

export default ExerciseSlide;
