import React from "react";
import styled from "styled-components";
// Fonts
import Fonts from "../../../styles/global/fonts";
// Colors
import Colors from "../../../styles/global/colors";
// Theme

const Badge = ({ text, ...props }) => {
  const {
    borderRadius,
    backgroundColor,
    color,
    width,
    height,
    border,
    borderLeft,
    borderRight,
    borderBottom,
    borderRadiusBottomLeft,
    borderRadiusTopLeft,
    borderRadiusTopRight,
    borderRadiusBottomRight,
    boxShadow,
    fontSize,
    margin,
    padding,
    textAlign,
    flex,
    alignItems,
    justifyContent
  } = props;
  return (
    <StyledBadge
      className="base-badge"
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      color={color}
      width={width}
      height={height}
      border={border}
      borderLeft={borderLeft}
      borderRight={borderRight}
      borderBottom={borderBottom}
      borderRadiusBottomLeft={borderRadiusBottomLeft}
      borderRadiusTopLeft={borderRadiusTopLeft}
      borderRadiusTopRight={borderRadiusTopRight}
      borderRadiusBottomRight={borderRadiusBottomRight}
      boxShadow={boxShadow}
      fontSize={fontSize}
      margin={margin}
      padding={padding}
      textAlign={textAlign}
      display={flex}
      alignItems={alignItems}
      justifyContent={justifyContent}
    >
      {text}
    </StyledBadge>
  );
};

const StyledBadge = styled.div.attrs(props => ({
  backgroundColor: props.backgroundColor,
  border: props.border,
  borderLeft: props.borderLeft,
  borderTop: props.borderTop,
  borderRight: props.borderRight,
  borderBottom: props.borderBottom,
  borderRadiusBottomLeft: props.borderRadiusBottomLeft,
  borderRadiusTopLeft: props.borderRadiusTopLeft,
  borderRadiusTopRight: props.borderRadiusTopRight,
  borderRadiusBottomRight: props.borderRadiusBottomRight,
  boxShadow: props.boxShadow,
  color: props.color,
  fontSize: props.fontSize,
  height: props.height,
  margin: props.margin,
  padding: props.padding,
  width: props.width,
  href: props.href,
  textAlign: props.textAlign,
  flex: props.flex,
  alignItems: props.alignItems,
  justifyContent: props.justifyContent
}))`
  height: ${props => (props.height ? `${props.height}rem` : "5rem")};
  width: ${props => (props.width ? `${props.width}rem` : `5rem`)};
  border: ${props => (props.border ? props.border : "none")};
  border-left: ${props => props.borderLeft};
  border-top: ${props => props.borderTop};
  border-right: ${props => props.borderRight};
  border-bottom: ${props => props.borderBottom};
  border-bottom-left-radius: ${props =>
    props.borderRadiusBottomLeft ? props.borderRadiusBottomLeft : ".5rem"};
  border-top-left-radius: ${props =>
    props.borderRadiusTopLeft ? props.borderRadiusTopLeft : ".5rem"};
  border-top-right-radius: ${props =>
    props.borderRadiusTopRight ? props.borderRadiusTopRight : ".5rem"};
  border-bottom-right-radius: ${props =>
    props.borderRadiusBottomRight ? props.borderRadiusBottomRight : ".5rem"};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : Colors.primary};
  color: ${props => (props.color ? props.color : Colors.font.white)};
  outline: none;
  cursor: default;

  margin: ${props => (props.margin ? `${props.margin}rem` : "1rem")};
  padding: ${props => (props.padding ? `${props.margin}rem` : "1rem")};

  font-size: ${props =>
    props.fontSize ? props.fontSize : Fonts.fontSize.baseSm};
  text-align: ${props => (props.textAlign ? props.textAlign : "center")};
  display: flex;
  align-items: center;
  justify-content: center;
  .icon-object-svg,
  .icon-img-svg {
    filter: ${props => (props.color ? props.color : Colors.white)};
  }
`;

export default Badge;
