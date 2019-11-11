import React from "react";
import styled from "styled-components";
// Fonts
import Fonts from "../../../styles/global/fonts";
// Colors
import Colors from "../../../styles/global/colors";
// Theme

const Text = ({ text, ...props }) => {
  const { fontSize, color, backgroundColor } = props;
  return (
    <StyledText
      className="styled-text"
      fontSize={fontSize}
      color={color}
      backgroundColor={backgroundColor}
    >
      {text}
    </StyledText>
  );
};

const StyledText = styled.img.attrs(props => ({
  fontSize: props.fontSize,
  color: props.color,
  backgroundColor: props.backgroundColor
}))`
  font-size: ${props =>
    props.fontSize ? props.fontSize : Fonts.fontSize.baseMd};
  color: ${props => (props.color ? props.color : Colors.primary)};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : Colors.white};
`;

export default Text;
