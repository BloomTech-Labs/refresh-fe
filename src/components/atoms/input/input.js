import React, { useState, useRef } from "react";
import styled from "styled-components";
import { inputTypes } from "../../../styles/global/constants";
import Colors from "../../../styles/global/colors";

const Input = ({ ...props }) => {
  const [value, setValue] = useState("");
  const node = useRef();

  const {
    changeCallback = () => {},
    eventCallback = () => {},
    blurCallback = () => {},
    id,
    name,
    form,
    placeholder,
    type, 
    required, 
    resetValue, // boolean
    readOnly,
    disabled,
    autocomplete = true,
    autofocus = false,
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
    color,
    padding,
    height,
    width,
    actionColor,
    actionBackground
  } = props;

  const updateValue = e => {
    e.preventDefault();
    setValue(e.target.value);
    //
    changeCallback(node.current.value);
  };

  const removeFocus = e => {
    // Defocus on escape
    if (e.keyCode === 27) {
      e.target.blur();
    }
    props.debug && console.log(`[removeFocus Fired]`);
  };

  const handleEnter = e => {
    if (e.keyCode === 13) {
      if (value.length > 0) {
        eventCallback(e);
        //
        if (resetValue) setValue("");
      }
    }
    props.debug && console.log(`[handleEnter Fired]`);
  };

  const handleBlur = e => {
    blurCallback(value)
    props.debug && console.log(`[handleBlur Fired]`);
    
  }

  return (
    <BaseInput
      className="base-input"
      id={id}
      form={form}
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      ref={node}
      resetValue={resetValue}
      required={required}
      readOnly={readOnly}
      disabled={disabled}
      onChange={updateValue}
      onKeyUp={removeFocus}
      onKeyDown={handleEnter}
      onBlur={handleBlur}
      autoComplete={autocomplete.toString()}
      autoFocus={autofocus}
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
      color={color}
      padding={padding}
      height={height}
      width={width}
      actionColor={actionColor}
      backgroundColor={backgroundColor}
      actionBackground={actionBackground}
    />
  );
};

const BaseInput = styled.input.attrs(props => ({
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
  cursor: props.cursor
}))`
  height: ${props => (props.height ? `${props.height}rem` : "4rem")};
  width: ${props => (props.width ? `${props.width}%` : `50%`)};
  border: ${props => (props.border ? props.border : "1px solid primary")};
  border-left: ${props => props.borderLeft};
  border-top: ${props => props.borderTop};
  border-right: ${props => props.borderRight};
  border-bottom: ${props => props.borderBottom};
  border-bottom-left-radius: ${props =>
    props.borderRadiusBottomLeft ? props.borderRadiusBottomLeft : "5px"};
  border-top-left-radius: ${props =>
    props.borderRadiusTopLeft ? props.borderRadiusTopLeft : "5px"};
  border-top-right-radius: ${props =>
    props.borderRadiusTopRight ? props.borderRadiusTopRight : "5px"};
  border-bottom-right-radius: ${props =>
    props.borderRadiusBottomRight ? props.borderRadiusBottomRight : "5px"};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : Colors.white};
  color: ${props => (props.color ? props.color : Colors.font.primary)};
  outline: none;
  cursor: text;
  margin: ${props => (props.margin ? `${props.margin}rem` : ".5rem")};
  padding: ${props => (props.padding ? `${props.padding}rem` : ".25rem")};
`;

export default Input;
