import React from 'react';
import StyledBadge from '../../../styles/global/components.css';

const Badge = ({ text, ...props }) => {
  const { borderRadius, backgroundColor, color } = props;
  return (
    <StyledBadge
      className="baseBadge"
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      color={color}
    >
      {text}
    </StyledBadge>
  );
};

export default Badge;
