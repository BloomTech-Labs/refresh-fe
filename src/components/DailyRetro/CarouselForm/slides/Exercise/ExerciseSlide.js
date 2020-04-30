import React from "react";
import { Link } from "react-router-dom";

import ExerciseCard from "../../../../UserDashboard/Main/Metrics/ExcerciseCard/ExcerciseCard.js";
import ExerciseQuestion from "./ExerciseQuestion";

class ExerciseSlide extends React.Component {
  render() {
    return (
      <div>
        <ExerciseQuestion />

        <div>
          <ExerciseCard />
          <a>
            <Link to="https://www.mindful.org/how-to-meditate/" target="_blank">
              <h4>The importance of Fitness</h4>
            </Link>
          </a>
        </div>
      </div>
    );
  }
}

export default ExerciseSlide;
