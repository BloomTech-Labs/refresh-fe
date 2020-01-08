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
    className,
    boxShadow,
    borderRadius,
    zIndex,
    backgroundImage,
    backgroundRepeat
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
      boxShadow={boxShadow}
      borderRadius={borderRadius}
      zIndex={zIndex}
      backgroundImage={backgroundImage}
      backgroundRepeat={backgroundRepeat}
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
  boxShadow: props.boxShadow,
  borderRadius: props.borderRadius,
  zIndex: props.zIndex,
  backgroundImage: props.backgroundImage,
  backgroundRepeat: props.backgroundRepeat
}))`
  height: ${props => (props.height ? `${props.height}rem` : "100%")};
  width: ${props => (props.width ? `${props.width}rem` : `100vw`)};
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
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.05);
  border-radius: ${props =>
    props.borderRadius ? `${props.borderRadius}rem` : 0};
  z-index: ${props => (props.zIndex ? props.zIndex : "auto")};
  background-image: ${props =>
    props.backgroundImage ? `url(${props.backgroundImage})` : "none"};
  background-repeat: ${props =>
    props.backgroundRepeat ? props.backgroundRepeat : "no-repeat"};
`;

export default Container;
