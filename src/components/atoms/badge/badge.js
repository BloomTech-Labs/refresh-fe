import React from 'react';
import StyledBadge from '../../../styles/global/components.css';

const Badge = ({ text, ...props }) => {
  const { borderRadius, backgroundColor, color,  width,
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
    justifyContent, } = props;
  return (
    <StyledBadge
      className="baseBadge"
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
      justifyContent={justifyContent}
    >
      {text}
    </StyledBadge>
  );
};

export default Badge;
