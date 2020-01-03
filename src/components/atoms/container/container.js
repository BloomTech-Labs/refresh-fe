import React from "react";
import styled from "styled-components";

const Container = ({ ...props }) => {
  const {
    position,
    width,
    height,
    alignItems,
    backgroundColor,
    margin,
    padding
  } = props;

  return (
    <StyledRow
      className="container"
      position={position}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      margin={margin}
      padding={padding}
      alignItems={alignItems}
    >
      {props.children}
    </StyledRow>
  );
};

const StyledRow = styled.div.attrs(props => ({
  height: props.height,
  width: props.width,
  margin: props.margin,
  padding: props.padding,
  position: props.position,
  alignItems: props.alignItems
}))`
  height: ${props => (props.height ? `${props.height}%` : "100%")};
  width: ${props => (props.width ? `${props.width}%` : `100vw`)};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  margin: ${props => (props.margin ? `${props.margin}rem` : 'inherit')};
  padding: ${props => (props.padding ? `${props.padding}rem` : "1rem")};
  position: ${props => (props.position ? `${props.position}` : "relative")};
  align-items: ${props =>
    props.alignItems ? `${props.alignItems}` : "center"};
`;

export default Container;
