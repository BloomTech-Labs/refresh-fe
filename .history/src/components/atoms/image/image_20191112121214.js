import React from "react";
import styled from "styled-components";

const Image = ({ src, altText, ...props }) => {
  const { height, width } = props;
  return <StyledImage src={src} className="base-image" height={height} width={width} />;
};

const StyledImage = styled.img.attrs(props => ({
  height: props.height,
  width: props.width
}))`
  height: ${props => (props.height ? `${props.height}rem` : "100%")};
  width: ${props => (props.width ? `${props.width}rem` : `100%`)};
`;

export default Image;