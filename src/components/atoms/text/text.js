import React from "react";
import styled from "styled-components";

// Colors
import Colors from "../../../styles/global/colors"; // eslint-disable-line no-unused-vars
// Fonts
import Fonts from "../../../styles/global/fonts";

// Theme

const Text = ({ text, ...props }) => {
  const {
    fontSize,
    fontFamily,
    color,
    fontWeight,
    letterSpacing,
    lineHeight,
    position,
    left,
    top,
    textAlign,
    width,
    height,
    textDecoration,
    bottom
  } = props;
  return (
    <StyledText
      className="styled-text"
      fontSize={fontSize}
      color={color}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
      lineHeight={lineHeight}
      position={position}
      left={left}
      top={top}
      bottom={bottom}
      textAlign={textAlign}
      width={width}
      height={height}
      textDecoration={textDecoration}
      fontFamily={fontFamily}
    >
      {text}
    </StyledText>
  );
};

const StyledText = styled.p.attrs(props => ({
  fontSize: props.fontSize,
  color: props.color,
  fontWeight: props.fontWeight,
  letterSpacing: props.letterSpacing,
  lineHeight: props.lineHeight,
  position: props.position,
  left: props.left,
  top: props.top,
  textAlign: props.textAlign,
  height: props.height,
  width: props.width,
  textDecoration: props.textDecoration,
  fontFamily: props.fontFamily,
  bottom: props.bottom
}))`
  font-size: ${props =>
    props.fontSize ? `${props.fontSize}rem` : Fonts.fontSize.baseMd};
  font-family: Catamaran;
  color: ${props => (props.color ? props.color : "#E6E6E6")};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "normal")};
  letter-spacing: ${props =>
    props.letterSpacing ? `${props.letterSpacing}em` : "normal"};
  line-height: ${props =>
    props.lineHeight ? `${props.lineHeight}rem` : "normal"};
  text-align: ${props => (props.textAlign ? props.textAlign : "center")};
  position: ${props => (props.position ? props.position : "relative")};
  left: ${props => (props.left ? `${props.left}rem` : 0)};
  top: ${props => (props.top ? `${props.top}rem` : 0)};
  bottom: ${props => (props.bottom ? `${props.bottom}rem` : 0)};
  height: ${props => (props.height ? `${props.height}rem` : "100%")};
  width: ${props => (props.width ? `${props.width}rem` : `100%`)};
  text-decoration: ${props =>
    props.textDecoration ? props.textDecoration : "none"};
`;

export default Text;
