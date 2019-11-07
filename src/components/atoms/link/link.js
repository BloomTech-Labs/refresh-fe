import React from 'react';
import styled from 'styled-components';
import StyledLink from '../../../styles/global/components.css';

const Link = ({ text, linkUrl, ...props }) => {
  const { width, height, color, fontSize } = props;
  return (
    <BaseLink
      className="baseLink"
      href={linkUrl}
      width={width}
      height={height}
      color={color}
      fontSize={fontSize}
    >
      {text}
    </BaseLink>
  );
};

const BaseLink = styled.a`
  ${StyledLink} + & {
    ${'' /* stuff */}
  }
`;

export default Link;
