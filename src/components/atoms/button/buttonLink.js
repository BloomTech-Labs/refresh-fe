import React from "react";
import styled from "styled-components";
// Fonts
import Fonts from "../../../styles/global/fonts";
// Colors
import Colors from "../../../styles/global/colors";
// Theme

const ButtonLink = ({ callback = () => {}, ...props }) => {
  const {
    href,
    actionBackground,
    actionColor,
    actionOpacity,
    backgroundColor,
    border,
    borderLeft,
    borderTop,
    borderRight,
    borderBottom,
    borderRadiusBottomLeft,
    borderRadiusTopLeft,
    borderRadiusTopRight,
    borderRadiusBottomRight,
    boxShadow,
    color,
    disabled,
    cursor,
    fontSize,
    textDecoration,
    height,
    display,
    alignItems,
    justifyContent,
    margin,
    padding,
    width,
    type = "button"
  } = props;

  const handleClick = event => {
    return callback(event);
  };

  const preventFocus = event => {
    event.preventDefault();
  };

  const removeFocus = event => {
    // Defocus on escape
    if (event.keyCode === 27) {
      event.target.blur();
    }
  };

  return (
    <StyledButton
      className="base-button"
      actionBackground={actionBackground}
      actionColor={actionColor}
      actionOpacity={actionOpacity}
      backgroundColor={backgroundColor}
      border={border}
      borderLeft={borderLeft}
      borderTop={borderTop}
      borderRight={borderRight}
      borderBottom={borderBottom}
      borderRadiusBottomLeft={borderRadiusBottomLeft}
      borderRadiusTopLeft={borderRadiusTopLeft}
      borderRadiusTopRight={borderRadiusTopRight}
      borderRadiusBottomRight={borderRadiusBottomRight}
      boxShadow={boxShadow}
      color={color}
      disabled={disabled}
      fontSize={fontSize}
      height={height}
      display={display}
      alignItems={alignItems}
      textDecoration={textDecoration}
      justifyContent={justifyContent}
      margin={margin}
      padding={padding}
      type={type}
      width={width}
      cursor={cursor}
      href={href}
      onMouseDown={preventFocus}
      onKeyUp={removeFocus}
      onClick={handleClick}
    >
      {props.children}
    </StyledButton>
  );
};

const StyledButton = styled.a.attrs(props => ({
  actionColor: props.actionColor,
  actionBackground: props.actionBackground,
  actionOpacity: props.actionOpacity,
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
  display: props.display,
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
  textAlign: props.textAlign,
  textDecoration: props.textDecoration,
  cursor: props.cursor
}))`
  height: ${props => (props.height ? `${props.height}rem` : "5rem")};
  width: ${props => (props.width ? `${props.width}rem` : `10rem`)};
  border: ${props => (props.border ? props.border : "none")};
  border-left: ${props => props.borderLeft};
  border-top: ${props => props.borderTop};
  border-right: ${props => props.borderRight};
  border-bottom: ${props => props.borderBottom};
  border-bottom-left-radius: ${props =>
    props.borderRadiusBottomLeft
      ? `${props.borderRadiusBottomLeft}rem`
      : ".5rem"};
  border-top-left-radius: ${props =>
    props.borderRadiusTopLeft ? `${props.borderRadiusTopLeft}rem` : ".5rem"};
  border-top-right-radius: ${props =>
    props.borderRadiusTopRight ? `${props.borderRadiusTopRight}rem` : ".5rem"};
  border-bottom-right-radius: ${props =>
    props.borderRadiusBottomRight
      ? `${props.borderRadiusBottomRight}rem`
      : ".5rem"};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : Colors.primary};
  color: ${props => (props.color ? props.color : Colors.font.primary)};
  outline: none;
  cursor: pointer;
  margin: ${props => (props.margin ? `${props.margin}rem` : "1rem")};
  padding: ${props => (props.padding ? `${props.margin}rem` : "1rem")};
  display: flex;
  align-items: center;
  justify-content: center;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "space-around"};
  align-items: center;
  font-size: ${props =>
    props.fontSize ? props.fontSize : Fonts.fontSize.baseSm};
  text-align: ${props => (props.textAlign ? props.textAlign : "center")};
  text-decoration: ${props =>
    props.textDecoration ? props.textDecoration : "none"};

  .icon-object-svg,
  .icon-img-svg {
    filter: ${props => (props.color ? props.color : Colors.white)};
  }

  &:hover,
  &:focus {
    background-color: ${props =>
      props.actionBackground ? props.actionBackground : Colors.secondary};
    color: ${props => props.actionColor};
    opacity: ${props => (props.actionOpacity ? props.actionOpacity : 0.85)};
    box-shadow: ${props =>
      props.boxShadow ? props.boxShadow : "0 1px 1px 1px 4px rgba(0,0,0,0.2)"};
  }

  &:active {
    opacity: 1;
    box-shadow: none;
    background-color: ${props => props.actionBackground};
    color: ${props => props.actionColor};
  }

  &:disabled {
    background-color: ${Colors.grey.muted};
    cursor: default;
    opacity: 1;
    outline: none;
  }
`;

export default ButtonLink;
