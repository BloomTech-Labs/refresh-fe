import React from "react";

import ExerciseCard from "../../../../UserDashboard/Main/Metrics/ExcerciseCard/ExcerciseCard.js"
import ExerciseQuestion from './ExerciseQuestion'

class ExerciseSlide extends React.Component {
  render() {
    return (
      <div>
        <ExerciseQuestion />
        <ExerciseCard />
      </div>
    );
  }
}

export default ExerciseSlide;
