import React from 'react';

import SleepCard from '../../../../UserDashboard/Main/Metrics/SleepCard/SleepCard'
import SleepQuestion from './SleepQuestion.js'

class SleepSlide extends React.Component{
  render() {
    return (
      <div>
        <SleepQuestion />
        <SleepCard />
      </div>
    )
  }
}

export default SleepSlide;