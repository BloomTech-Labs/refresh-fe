import React from "react";
import styled from "styled-components";

const Image = ({ src, altText, ...props }) => {
  const { height, width, borderRadius } = props;
  return (
    <StyledImage
      src={src}
      altText={altText}
      className="base-image"
      height={height}
      width={width}
      borderRadius={borderRadius}
    />
  );
};

const StyledImage = styled.img.attrs(props => ({
  height: props.height,
  width: props.width,
  borderRadius: props.borderRadius
}))`
  height: ${props => (props.height ? `${props.height}rem` : "100%")};
  width: ${props => (props.width ? `${props.width}rem` : `100%`)};
  border-bottom-radius: ${props =>
    props.borderRadiusBottomLeft ? props.borderRadiusBottomLeft : "5px"};
`;

export default Image;
