import React from "react";
import StyledButton from "../../../styles/global/components.css";

const Button = ({ callback = () => {}, ...props }) => {
  const {
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
    fontSize,
    height,
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
      justifyContent={justifyContent}
      margin={margin}
      padding={padding}
      type={type}
      width={width}
      onMouseDown={preventFocus}
      onKeyUp={removeFocus}
      onClick={handleClick}
    >
      {props.children}
    </StyledButton>
  );
};

export default Button;
