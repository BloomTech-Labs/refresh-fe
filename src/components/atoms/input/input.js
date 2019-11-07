import React, { useState, useRef } from 'react';
import StyledInput from '../../../styles/global/inputs.css';
import { inputTypes } from '../../../styles/global/constants';

const Input = ({ callback = () => {}, ...props }) => {
  const [value, setValue] = useState('');
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

  return (
    <StyledInput
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
      //
      autoComplete={autocomplete.toString()}
      autoFocus={autofocus}
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

export default Input;
