import React from 'react';
import WaterCard from '../../../../UserDashboard/Main/Metrics/WaterCard/WaterCard.js'
import WaterQuestion from './WaterQuestion.js'

class WaterSlide extends React.Component{
  render() {
    return (
      <div>
        <WaterQuestion />
        <WaterCard />
      </div>
    )
  }
}

export default WaterSlide;
