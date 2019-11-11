import React from "react";
import styled from "styled-components";
import StyledLink from "../../../styles/global/components.css";
import Fonts from "../../../styles/global/fonts";
import Colors from "../../../styles/global/colors";

const Link = ({ text, linkUrl, ...props }) => {
  const {
    borderRadius,
    backgroundColor,
    margin,
    padding,
    color,
    fontSize,
    href
  } = props;
  return (
    <BaseLink
      className="baseLink"
      href={href}
      color={color}
      fontSize={fontSize}
      borderRadius={borderRadius}
      backgroundColor={backgroundColor}
      margin={margin}
      padding={padding}
    >
      {text}
    </BaseLink>
  );
};

const BaseLink = styled.a.attrs(props => ({
  // Do I need this?
}))`
  ${StyledLink} + & {
    ${"" /* stuff */}
  }
${"" /* Link Specific */}
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
  ${"" /* I prefer to work in rems. Y'all? */}
  margin: ${props => (props.margin ? `${props.margin}rem` : ".5rem")};
  padding: ${props => (props.padding ? `${props.margin}rem` : ".25rem")};
  ${"" /* I want to create props passing for deeper flex options */}
  display: flex;
  flex-wrap: nowrap;
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "center"};
  align-items: center;
  font-size: ${props =>
    props.fontSize ? props.fontSize : Fonts.fontSize.baseSm};
`;

export default Link;
