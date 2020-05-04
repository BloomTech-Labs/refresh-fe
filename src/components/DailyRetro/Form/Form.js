import React, { useState, useEffect } from "react";
import WaterSlide from "../CarouselForm/slides/Water/WaterSlide.js";
import ExerciseSlide from "../CarouselForm/slides/Exercise/ExerciseSlide.js";
import SleepSlide from "../CarouselForm/slides/Sleep/SleepSlide.js";
import BreaksSlide from "../CarouselForm/slides/Breaks/BreaksSlide.js";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";

//in documentation, items are in an object form? may need to change if we have any trouble
const items = [
  {
    src: <WaterSlide />,
  },
  {
    src: <ExerciseSlide />,
  },
  {
    src: <SleepSlide />,
  },
  {
    src: <BreaksSlide />,
  },
];

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

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

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
        slide={false}
      >
        {slides}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={previous}
          key="prev"
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={next}
          key="next"
        />
      </Carousel>
    </div>
  );
}

export default Form;
