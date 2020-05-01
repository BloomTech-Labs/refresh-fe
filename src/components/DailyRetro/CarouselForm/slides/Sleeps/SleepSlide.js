import React from "react";
import { Link } from "react-router-dom";

import SleepCard from "../../../../UserDashboard/Main/Metrics/SleepCard/SleepCard";
import SleepQuestion from "./SleepQuestion.js";

class SleepSlide extends React.Component {
  render() {
    return (
      <div>
        <SleepQuestion />

        <div>
          <SleepCard />
          <a>
            <Link to="https://www.mindful.org/how-to-meditate/" target="_blank">
              <h4>Why is tracking sleep important?</h4>
            </Link>
          </a>
        </div>
      </div>
    );
  }
}

export default SleepSlide;
