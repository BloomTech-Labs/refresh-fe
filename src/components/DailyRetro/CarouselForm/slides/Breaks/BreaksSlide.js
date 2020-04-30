import React from "react";

import BreaksCard from "../../../../UserDashboard/Main/Metrics/BreaksCard/BreaksCard.js"
import BreaksQuestion from './BreaksQuestion'

class BreaksSlide extends React.Component {
  render() {
    return (
      <div>
        <BreaksQuestion />
        <BreaksCard />
      </div>
    );
  }
}

export default BreaksSlide;