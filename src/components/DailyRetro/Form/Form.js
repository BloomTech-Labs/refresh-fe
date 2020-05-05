import React, { useState, useEffect } from "react";
import WaterSlide from "../CarouselForm/slides/Water/WaterSlide.js";
import ExerciseSlide from "../CarouselForm/slides/Exercise/ExerciseSlide.js";
import SleepSlide from "../CarouselForm/slides/Sleep/SleepSlide.js";
import BreaksSlide from "../CarouselForm/slides/Breaks/BreaksSlide.js";
import {
  Carousel,
  CarouselItem
} from "reactstrap";


function Form(props) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const temp = localStorage.getItem("currentIndex") || 0;
    setActiveIndex(JSON.parse(temp));
  }, []);

  useEffect(() => {
    localStorage.setItem("currentIndex", activeIndex);
  });

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

 

  const items = [
  {
    src: <WaterSlide next={next} previous={previous}/>,
  },
  {
    src: <ExerciseSlide next={next} previous={previous}/>,
  },
  {
    src: <SleepSlide next={next} previous={previous}/>,
  },
  {
    src: <BreaksSlide next={next} previous={previous}/>,
  },
];

  const slides = items.map((item, index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={`${item.src}- ${index}`}
      >
        {item.src}
      </CarouselItem>
    );
  });

  return (
    <div>
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        interval={null}
        // slide={false}
      >
        {slides}
    
      </Carousel>
    </div>
  );
}

export default Form;
