import React from "react";
import styled from "styled-components";
import Fonts from "../../../styles/global/fonts";
import Colors from "../../../styles/global/colors";

const Link = ({ text, linkUrl, ...props }) => {
  const { margin, padding, color, fontSize, href } = props;
  return (
    <BaseLink
      className="base-link"
      href={href}
      color={color}
      fontSize={fontSize}
      margin={margin}
      padding={padding}
    >
      {text}
    </BaseLink>
  );
};

const BaseLink = styled.a.attrs(props => ({
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
  height: props.height,
  margin: props.margin,
  padding: props.padding,
  width: props.width,
  href: props.href,
  display: props.display,
  justifyContent: props.justifyContent,
  alignItems: props.alignItems,
  textAlign: props.textAlign,
  cursor: props.cursor
}))`
  text-decoration: ${props => (props.textDecoration ? `underline` : `none`)};
  height: ${props => (props.height ? `${props.height}px` : "40px")};
  width: ${props => (props.width ? `${props.width}px` : `50%`)};
  border: ${props => (props.border ? props.border : "none")};
  border-left: ${props => props.borderLeft};
  border-top: ${props => props.borderTop};
  border-right: ${props => props.borderRight};
  border-bottom: ${props =>
    props.borderBottom ? `${props.borderBottom}` : `none`};
  border-bottom-left-radius: ${props =>
    props.borderRadiusBottomLeft ? props.borderRadiusBottomLeft : "5px"};
  border-top-left-radius: ${props =>
    props.borderRadiusTopLeft ? props.borderRadiusTopLeft : "5px"};
  border-top-right-radius: ${props =>
    props.borderRadiusTopRight ? props.borderRadiusTopRight : "5px"};
  border-bottom-right-radius: ${props =>
    props.borderRadiusBottomRight ? props.borderRadiusBottomRight : "5px"};
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : Colors.white};
  color: ${props => (props.color ? props.color : Colors.font.primary)};
  outline: none;
  cursor: pointer;
  margin: ${props => (props.margin ? `${props.margin}rem` : ".5rem")};
  padding: ${props => (props.padding ? `${props.margin}rem` : ".25rem")};
  display: flex;
  flex-wrap: nowrap;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: center;
  font-size: ${props =>
    props.fontSize ? props.fontSize : Fonts.fontSize.baseSm};
`;

export default Link;
