import React from "react";
import styled from "styled-components";

const Image = ({ src, altText, ...props }) => {
  const { height, width } = props;
  return <StyledImage className="base-image" height={height} width={width} />;
};

const StyledImage = styled.img.attrs(props => ({
  height: props.height,
  width: props.width
}))`
  height: ${props => (props.height ? `${props.height}%` : "50%")};
  width: ${props => (props.width ? `${props.width}%` : `50%`)};
`;

export default Image;
