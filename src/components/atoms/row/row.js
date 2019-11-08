import React from 'react';
import styled from 'styled-components';
import StyledRow from '../../../styles/global/components.css';
import Fonts from '../../../styles/global/fonts';
import Colors from '../../../styles/global/colors';
import { defaultCipherList } from 'constants';

const Row = ({ ...props }) => {
  const {
    display,
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
    color,
    fontSize,
    margin,
    padding
  } = props;
};

export default Row;
