import React from "react";
//styled components
import styled from "styled-components";
//react slider library
import ReactSlider from "react-slider";

const Slider = props => {
    const {
        defaultValue, 
        value,
        max,
        onChange
    } = props
  //slider thumb and track
  const Thumb = (props, state) => (
    <StyledThumb {...props}>{state.valueNow}</StyledThumb>
  );
  const Track = (props, state) => {
    return <StyledTrack {...props} index={state.index} value={7} />;
  };

  return(
  <StyledSlider
    defaultValue={defaultValue}
    max={max}
    value ={value}
    renderTrack={Track}
    renderThumb={Thumb}
    onChange={onChange}
  /> 
  );
};
// STYLED COMPONENTS
//Onboarding Reusable Styles
// we abstract out reusable global styles later on -JC
//slider style for react slider
const StyledSlider = styled(ReactSlider).attrs(props => ({
    height: props.height, 
    width: props.width,
    lineHeight: props.lineHeight,
    marginTop : props.marginTop,
    cusor: props.cursor
}))`
  width: ${props => (props.width ? `${props.width}%` : `100%` )};
  height: ${props => (props.height ? `${props.height}rem` : "0.2rem" )};
  margin: 8rem 0 13rem;
`;

//thumb style for react slider
const StyledThumb = styled.div`
  height: 2.5rem;
  line-height: 25px;
  width: 25px;
  text-align: center;
  background-color: #e05cb3;
  color: #fff;
  border-radius: 50%;
  cursor: grab;
  margin-top: -1rem;
`;

//track style for react slider
const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${props => (props.index === 1 ? "#ddd" : "#E05CB3")};
  border-radius: 2rem;
`;

export default Slider;