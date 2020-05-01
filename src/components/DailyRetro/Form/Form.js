import React from 'react'
import WaterSlide from '../CarouselForm/slides/Water/WaterSlide.js'
import ExerciseSlide from '../CarouselForm/slides/Exercise/ExerciseSlide.js'
import SleepSlide from '../CarouselForm/slides/Sleep/SleepSlide.js'
import BreaksSlide from '../CarouselForm/slides/Breaks/BreaksSlide.js'

class Form extends React.Component{
  render() {
    return (
      <div>

        {/* TODO: Put these inside a carousel */}

        <WaterSlide />
        <ExerciseSlide />
        <SleepSlide />
        <BreaksSlide />
      </div>
    )
  }
}

export default Form;