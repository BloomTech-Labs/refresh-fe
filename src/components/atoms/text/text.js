import React from "react";


const Text = ({ text, ...props }) => {
  const { fontSize, color, backgroundColor } = props;
  return (
    <StyledText
      className="styled-text"
      fontSize={fontSize}
      color={color}
      backgroundColor={backgroundColor}
    >
      {text}
    </StyledText>
  );
};

export default Text;
