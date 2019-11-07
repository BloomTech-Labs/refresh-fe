import React from 'react';
import StyledLink from '../../../styles/global/components.css';

const Link = ({ text, linkURL, ...props }) => {
  const { width, height, color } = props;
  return (
    <StyledLink
      className="linkBase"
      href={linkURL}
      width={width}
      height={height}
      color={color}
    >
      {text}
    </StyledLink>
  );
};

export default Link;
