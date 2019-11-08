import React, { useState, useRef } from "react";
import styled from "styled-components";
import { inputTypes } from "../../../styles/global/constants";
import StyledInput from "../../../styles/global/components.css";
import Colors from "../../../styles/global/colors";

const Input = ({ callback = () => {}, ...props }) => {
  const [value, setValue] = useState("");
  const node = useRef();

  const {
    id,
    name,
    form,
    placeholder,
    type = inputTypes.TEXT,
    required = false,
    readOnly,
    disabled,
    autocomplete = true,
    autofocus = false,
    border,
    borderLeft,
    borderTop,
    borderRight,
    borderBottom,
    borderRadiusBottomLeft,
    borderRadiusTopLeft,
    borderRadiusTopRight,
    borderRadiusBottomRight,
    padding,
    height,
    width
  } = props;

  const updateValue = e => {
    e.preventDefault();
    setValue(e.target.value);
    //
    callback(node.current.value);
  };

  const removeFocus = event => {
    // Defocus on escape
    if (event.keyCode === 27) {
      event.target.blur();
    }
  };

  return (
    <BaseInput
      className="baseInput"
      id={id}
      form={form}
      name={name}
      placeholder={placeholder}
      type={type}
      value={value}
      ref={node}
      required={required}
      readOnly={readOnly}
      disabled={disabled}
      onChange={updateValue}
      onKeyUp={removeFocus}
      //
      autoComplete={autocomplete.toString()}
      autoFocus={autofocus}
      border={border}
      borderLeft={borderLeft}
      borderTop={borderTop}
      borderRight={borderRight}
      borderBottom={borderBottom}
      borderRadiusBottomLeft={borderRadiusBottomLeft}
      borderRadiusTopLeft={borderRadiusTopLeft}
      borderRadiusTopRight={borderRadiusTopRight}
      borderRadiusBottomRight={borderRadiusBottomRight}
      padding={padding}
      height={height}
      width={width}
    />
  );
};

const BaseInput = styled.input`
  ${StyledInput} + & {
    ${"" /* stuff */}
  }
  height: ${props => (props.height ? `${props.height}px` : "40px")};
  width: ${props => (props.width ? `${props.width}px` : `50%`)};
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
  ${"" /* I prefer to work in rems. Y'all? */}
  margin: ${props => (props.margin ? `${props.margin}rem` : ".5rem")};
  padding: ${props => (props.padding ? `${props.margin}rem` : ".25rem")};
`;

export default Input;
