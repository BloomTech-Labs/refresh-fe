import React from "react";
import { Link } from "react-router-dom";

import ExerciseCard from "../../../../UserDashboard/Main/Metrics/ExcerciseCard/ExcerciseCard.js";
import ExerciseQuestion from "./ExerciseQuestion";
import ExerciseGoal from "./ExerciseGoal";

class ExerciseSlide extends React.Component {
  render() {
    return (
<<<<<<< HEAD
      <div className='slides'>
        <ExerciseQuestion />
=======
      <div>
        <ExerciseQuestion next={this.props.next} previous={this.props.previous} />
>>>>>>> 9cb0c326a696db61b344db7fc6baf6ac15d2a2d6

        <div>
          <ExerciseCard />
          <a>
            <Link to="https://www.mindful.org/how-to-meditate/" target="_blank">
              <h4>The importance of Fitness</h4>
            </Link>
          </a>
        </div>

        <ExerciseGoal/>
        
      </div>
    );
  }
}

export default ExerciseSlide;
