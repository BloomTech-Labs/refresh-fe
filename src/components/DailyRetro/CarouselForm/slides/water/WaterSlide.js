import React from "react";
import { Link } from "react-router-dom";

import WaterCard from "../../../../UserDashboard/Main/Metrics/WaterCard/WaterCard.js";
import WaterQuestion from "./WaterQuestion.js";

class WaterSlide extends React.Component {
  render() {
    return (
      <div>
        <WaterQuestion />

        <div>
          <WaterCard />
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

export default WaterSlide;
