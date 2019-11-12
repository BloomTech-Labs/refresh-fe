import React, { useState } from "react";
import styled from "styled-components";

const sliderThumbStyles = props => `
width: 25px;
height: 25px;
background: #28C96C;
cursor: pointer;
outline: 5px solid #333;

-webkit-transition: .2s;
transition: opacity .2s;

`;

const Styles = styled.div`
  display: flex;
  align-items: center;
  font-size: 3rem;
  margin: 0 auto;

  padding: 20px;
  width: 80%;
  justify-content: space-between;

  .value {
    flex: 1;
    padding-left: 10px;
  }
  .slider {
    -webkit-appearance: none;
    width: 70%;
    height: 3px;
    outline: none;

    border-radius: 5px;
    display: flex;
    justify-content: center;

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      ${props => sliderThumbStyles(props)};
    }
  }
`;

const Slider = ({ initialSize, minSize, maxSize }) => {
  const [sliderValue, setSliderValue] = useState(initialSize);

  const handleOnChange = event => {
    event.preventDefault();
    setSliderValue(event.target.value);
  };

  return (
    <Styles>
      <input
        type="range"
        min={minSize}
        max={maxSize}
        value={sliderValue}
        className="slider"
        onChange={handleOnChange}
      />
      <div className="value">{sliderValue}</div>
    </Styles>
  );
};

export { Slider };
