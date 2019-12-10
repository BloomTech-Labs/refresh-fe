import React, { useState, useEffect } from "react";

import { inputTypes } from "../../../styles/global/constants";

const Radio = ({ callback = () => {}, labelText, ...props }) => {
  const {
    isSelected = false,
    disabled,
    form,
    id,
    margin,
    name,
    required = false,
    readOnly,
    type = inputTypes.RADIO
  } = props;

  const handleSelect = () => setSelected(!selected);
  const [selected, setSelected] = useState(isSelected);

  useEffect(
    () => {
      // return boolean to parent
      callback(selected);
    },
    [selected] // Only call if term changes
  );

  return (
    <BaseRadio
      className="base-radio"
      selected={selected}
      disabled={disabled}
      form={form}
      id={id}
      margin={margin}
      name={name}
      readOnly={readOnly}
      required={required}
      type={type}
    >
      <div className="base-radio-content-wrapper">
        <div
          onClick={handleSelect}
          tabIndex="0"
          className="base-radio-input-outer"
        >
          <span className="base-radio-input-inner" />
        </div>

        <div className="base-radio-label" onClick={handleSelect}>
          <span>{labelText}</span>
          {props.children}
        </div>
      </div>
    </BaseRadio>
  );
};

const BaseRadio = styled.div`
  margin: 0;

  .base-radio-content-wrapper {
    display: inline-flex;
    align-items: center;
  }

  .base-radio-input-outer {
    cursor: pointer;
    width: 20px;
    height: 20px;
    background-color: ___CSS_1___;
    border: 1px solid ___CSS_2___;
    display: flex;
    justify-content: center;
    align-items: center;
    outline: none;

    &:hover,
    &:focus {
      border: 1px solid ___CSS_3___;
      box-shadow: ___CSS_4___;
    }
  }

  .base-radio-input-outer,
  .base-radio-input-inner {
    border-radius: 100%;
  }

  .base-radio-input-inner {
    width: 10px;
    height: 10px;
    display: ___CSS_5___;
    background-color: ___CSS_6___;
  }

  .base-radio-label {
    cursor: pointer;
    padding: 0 10px;
  }
`;

export default Radio;
