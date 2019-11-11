import React from "react";
import styled from "styled-components";
// Fonts
import Fonts from "../../../styles/global/fonts";
// Colors
import Colors from "../../../styles/global/colors";
// Theme

const Icon = ({ ...props }) => {
  const {
    backgroundColor,
    color,
    cursor,
    width,
    height,
    padding,
    svg,
    display,
    styledIcon
  } = props;

  return (
    <StyledIcon
      className="base-icon"
      backgroundColor={backgroundColor}
      color={color}
      cursor={cursor}
      height={height}
      width={width}
      display={display}
      padding={padding}
    >
      {svg ? (
        <object type="image/svg+xml" data={svg} className="icon-object-svg">
          <img src={svg} alt="icon" className="icon-img-svg" />
        </object>
      ) : (
        <>{styledIcon}</>
      )}
    </StyledIcon>
  );
};

const StyledIcon = styled.div.attrs(props => ({
  backgroundColor: props.backgroundColor,
  color: props.color,
  width: props.width,
  height: props.height,
  cursor: props.cursor,
  display: props.display,
  padding: props.padding
}))`
  height: ${props => (props.height ? `${props.height}rem` : "100%")};
  width: ${props => (props.width ? `${props.width}rem` : "100%")};
  color: ${props => props.color};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : "transparent"};
  display: flex;
  justify-content: center;
  align-items: center;
  .icon-object-svg,
  .icon-img-svg {
    filter: ${props => props.color};
    cursor: ${props => (props.cursor ? props.cursor : "pointer")};
    pointer-events: ${props => (props.cursor ? props.cursor : "none")};
    color: ${props => props.color};
    padding: ${props => (props.padding ? `${props.padding}rem` : "1rem")};
  }
`;

export default Icon;