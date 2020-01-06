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
    marginBottom,
    marginTop,
    padding, 
    className
  } = props;

  return (
    <StyledRow
      className={className}
      position={position}
      width={width}
      height={height}
      backgroundColor={backgroundColor}
      margin={margin}
      marginBottom={marginBottom}
      marginTop={marginTop}
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
  marginBottom: props.marginBottom,
  padding: props.padding,
  position: props.position,
  alignItems: props.alignItems,
  marginTop: props.marginTop,
}))`
  height: ${props => (props.height ? `${props.height}%` : "100%")};
  width: ${props => (props.width ? `${props.width}%` : `100vw`)};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  margin: ${props => (props.margin ? `${props.margin}rem` : "inherit")};
  margin-bottom: ${props =>
    props.marginBottom ? `${props.marginBottom}rem` : "inherit"};
    margin-top: ${props =>
    props.marginTop ? `${props.marginTop}rem` : "inherit"};
  padding: ${props => (props.padding ? `${props.padding}rem` : "1rem")};
  position: ${props => (props.position ? `${props.position}` : "relative")};
  align-items: ${props =>
    props.alignItems ? `${props.alignItems}` : "center"};
`;

export default Container;
