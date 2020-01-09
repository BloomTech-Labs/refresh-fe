import React, { useState, useRef } from "react";
import styled from "styled-components";
import Colors from "../../../styles/global/colors";
const Input = ({ callback = () => {}, ...props }) => {  
  const [value, setValue] = useState("");
  const node = useRef();
  const {
    id,
    name,
    form,
    placeholder,
    required = false,
    readOnly,
    disabled,
    autocomplete = true,
    autofocus = false,
    backgroundColor,
    border,
    borderRadius,
    color,
    padding,
    height,
    width,
    actionColor,
    actionBackground,
    position,
    left,
    top
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
      className="base-input"
      id={id}
      form={form}
      name={name}
      placeholder={placeholder}
      value={value}
      ref={node}
      required={required}
      readOnly={readOnly}
      disabled={disabled}
      onChange={updateValue}
      onKeyUp={removeFocus}
      autoComplete={autocomplete.toString()}
      autoFocus={autofocus}
      backgroundColor={backgroundColor}
      border={border}
      borderRadius={borderRadius}
      color={color}
      padding={padding}
      height={height}
      width={width}
      actionColor={actionColor}
      actionBackground={actionBackground}
      position={position}
      left={left}
      top={top}
    />
  );
};
const BaseInput = styled.input.attrs(props => ({
  actionColor: props.actionColor,
  actionBackground: props.actionBackground,
  actionOpacity: props.actionOpacity,
  backgroundColor: props.backgroundColor,
  border: props.border,
  borderRadius: props.borderRadius,
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
  cursor: props.cursor,
  position: props.position,
  left: props.left,
  top: props.top
}))`
  height: ${props => (props.height ? `${props.height}rem` : "4rem")};
  width: ${props => (props.width ? `${props.width}rem` : `30rem`)};
  border: ${props => (props.border ? props.border : "1px solid #3d3b91")};
  border-radius: ${props =>
    props.borderRadius ? props.borderRadius : "0.2rem"};

  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "#3D3B91"};
  color: ${props => (props.color ? props.color : Colors.font.primary)};
  outline: none;
  cursor: text;
  margin: ${props => (props.margin ? `${props.margin}rem` : ".5rem")};
  padding: ${props => (props.padding ? `${props.padding}rem` : ".25rem")};
  position: ${props => (props.position ? props.position : "relative")};
  left: ${props => (props.left ? `${props.left}rem` : 0)};
  top: ${props => (props.top ? `${props.top}rem` : 0)};
`;
export default Input;
