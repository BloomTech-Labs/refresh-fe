import styled from "styled-components";
// Fonts
import Fonts from "./fonts";
// Colors
import Colors from "./colors";
// Theme

const StyledAtom = styled.div.attrs(props => ({
  actionColor: props.actionColor,
  actionBackground: props.actionBackground,
  actionOpacity: props.actionOpacity,
  backgroundColor: props.backgroundColor,
  border: props.border,
  borderLeft: props.borderLeft,
  borderTop: props.borderTop,
  borderRight: props.borderRight,
  borderBottom: props.borderBottom,
  borderRadiusBottomLeft: props.borderRadiusBottomLeft,
  borderRadiusTopLeft: props.borderRadiusTopLeft,
  borderRadiusTopRight: props.borderRadiusTopRight,
  borderRadiusBottomRight: props.borderRadiusBottomRight,
  boxShadow: props.boxShadow,
  color: props.color,
  fontSize: props.fontSize,
  justifyContent: props.justifyContent,
  height: props.height,
  margin: props.margin,
  padding: props.padding,
  width: props.width,
  href: props.href,
  display: props.display,
  flexFlow: props.flexFlow,
  textAlign: props.textAlign
}))`

${"" /* Currently set to px for global, can go rem, %, etc */}
  height: ${props => (props.height ? `${props.height}%` : "100%")};
  width: ${props => (props.width ? `${props.width}%` : `100%`)};
  border: ${props => (props.border ? props.border : "none")};
  border-left: ${props => props.borderLeft};
  border-top: ${props => props.borderTop};
  border-right: ${props => props.borderRight};
  border-bottom: ${props => props.borderBottom};
  border-bottom-left-radius: ${props =>
    props.borderRadiusBottomLeft ? props.borderRadiusBottomLeft : "5px"};
  border-top-left-radius: ${props =>
    props.borderRadiusTopLeft ? props.borderRadiusTopLeft : "5px"};
  border-top-right-radius: ${props =>
    props.borderRadiusTopRight ? props.borderRadiusTopRight : "5px"};
  border-bottom-right-radius: ${props =>
    props.borderRadiusBottomRight ? props.borderRadiusBottomRight : "5px"};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : Colors.primary};
  color: ${props => (props.color ? props.color : Colors.font.white)};
  outline: none;
  cursor: pointer;
  ${"" /* I prefer to work in rems. Y'all? */}
  margin: ${props => (props.margin ? `${props.margin}rem` : ".1rem")};
  padding: ${props => (props.padding ? `${props.margin}rem` : ".1rem")};
  ${"" /* I want to create props passing for deeper flex options */}
  display: flex;
  flex-flow: row wrap;
  flex-wrap: nowrap;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "space-around"};
  align-items: center;

  .icon-object-svg,
  .icon-img-svg {
    filter: ${props => (props.color ? props.color : Colors.white)};
  }

  font-size: ${props =>
    props.fontSize ? props.fontSize : Fonts.fontSize.baseSm};

    text-align: ${props => (props.textAlign ? props.textAlign : "left")}

  &:hover,
  &:focus {
    background-color: ${props =>
      props.actionBackground ? props.actionBackground : Colors.secondary};
    color: ${props => props.actionColor};
    opacity: ${props => (props.actionOpacity ? props.actionOpacity : 0.85)};
    box-shadow: ${props =>
      props.boxShadow ? props.boxShadow : "0 1px 1px 1px rgba(84,84,84,0.4)"};
  }

  &:active {
    opacity: 1;
    box-shadow: none; 
    background-color: ${props => props.actionBackground};
    color: ${props => props.actionColor};
  }

  &:disabled {
    background-color: ${Colors.grey.muted};
    cursor: default;
    opacity: 1;
    outline: none;
  }
`;

export default StyledAtom;
