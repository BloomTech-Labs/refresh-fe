import React from "react";
import styled from "styled-components";
// Fonts
import Fonts from "../../../styles/global/fonts";
// Colors
import Colors from "../../../styles/global/colors";
// Theme

const Text = ({ text, ...props }) => {
  const { fontSize, color, fontWeight, letterSpacing, lineHeight } = props;
  return (
    <StyledText
      className="styled-text"
      fontSize={fontSize}
      color={color}
      fontWeight={fontWeight}
      letterSpacing={letterSpacing}
      lineHeight={lineHeight}
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
  lineHeight: props.lineHeight
}))`
  font-size: ${props =>
    props.fontSize ? props.fontSize : Fonts.fontSize.baseMd};
  color: ${props => (props.color ? props.color : Colors.primary)};
  font-weight: ${props => (props.fontWeight ? props.fontWeight : "normal")};
  letter-spacing: ${props =>
    props.letterSpacing ? props.letterSpacing : "normal"};
  line-height: ${props => (props.lineHeight ? props.lineHeight : "normal")};
`;

export default Text;
