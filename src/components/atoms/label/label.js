import React from "react";
import styled from "styled-components";
// Fonts
import Fonts from "../../../styles/global/fonts";
// Colors
import Colors from "../../../styles/global/colors";
// Theme

const Label = ({ forId, ...props }) => {
  const { fontSize, color, backgroundColor, padding } = props;
  return (
    <StyledLabel
      className="styled-label"
      fontSize={fontSize}
      color={color}
      backgroundColor={backgroundColor}
      padding={padding}
    >
      This is a styled label for the following input
    </StyledLabel>
  );
};

const StyledLabel = styled.label.attrs(props => ({
  fontSize: props.fontSize,
  color: props.color,
  backgroundColor: props.backgroundColor,
  padding: props.padding
}))`
  font-size: ${props =>
    props.fontSize ? props.fontSize : Fonts.fontSize.baseSm};
  color: ${props => (props.color ? props.color : Colors.primary)};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : Colors.white};
  padding: ${props => (props.padding ? `${props.margin}rem` : ".5rem")};
`;

export default Label;
