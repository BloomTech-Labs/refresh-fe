import React from "react";
//styled components
import styled from "styled-components";
//react slider library
import ReactSlider from "react-slider";

const Slider = props => {
    const {
        defaultValue, 
        value,
        trackValue,
        max,
        onChange, 
        height, 
        width,
        margin,
        cursor,
        marginTop, 
        lineHeight,
        heightThumb,
        widthThumb,
        lineTrack
    } = props
  //slider thumb and track
  const Thumb = (props, state) => (
    <StyledThumb {...props} marginTop ={marginTop} lineHeight={lineHeight} cursor={cursor} heightThumb={heightThumb} widthThumb={widthThumb}>{state.valueNow}</StyledThumb>
  );
  const Track = (props, state) => {
    return <StyledTrack {...props} index={state.index} value={trackValue} lineTrack={lineTrack}/>;
  };

  return(
  <StyledSlider
    defaultValue={defaultValue}
    max={max}
    value ={value}
    renderTrack={Track}
    renderThumb={Thumb}
    onChange={onChange}
    height={height}
    width={width}
    margin={margin}
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
    margin: props.margin,
}))`
  width: ${props => (props.width ? `${props.width}%` : `80%` )};
  height: ${props => (props.height ? `${props.height}rem` : "0.2rem" )};
  margin: ${props => (props.margin? `${props.margin}` : `8rem 0 13rem` )};
`;

//thumb style for react slider
const StyledThumb = styled.div.attrs(props => ({
  marginTop : props.marginTop,
  lineHeight: props.lineHeight,
  cursor: props.cursor,
  heightThumb : props.heightThumb,
  widthThumb : props.widthThumb
}))`
  height: ${props => (props.heightThumb ? `${props.heightThumb}rem` : "2.5rem")};
  line-height: ${props => (props.lineHeight ? `${props.lineHeight}rem` : "2.5rem")};
  width: ${props => (props.widthThumb ? `${props.widthThumb}rem` : "2.5rem")};
  text-align: center;
  background-color: #e05cb3;
  color: #fff;
  border-radius: 50%;
  cursor: ${props => (props.cursor ? `${props.cursor}` : "grab")};
  margin-top: ${props => (props.marginTop ? `${props.marginTop}rem` : "-1rem")};
`;

//track style for react slider
const StyledTrack = styled.div.attrs(props => ({
  lineTrack : props.lineTrack
}))`
  top: 0;
  bottom: 0;
  background: ${props => (props.index === 1 ? "#ddd" : "#E05CB3")};
  border-radius: 2rem;
  line-height: ${props => (props.lineTrack ? `${props.lineTrack}rem` : "0" )}
`;

export default Slider;