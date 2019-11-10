import React from "react";


const Text = ({ text, ...props }) => {
  const { fontSize, color, backgroundColor } = props;
  return (
    <StyledAtom
      className="styled-text"
      fontSize={fontSize}
      color={color}
      backgroundColor={backgroundColor}
    >
      {text}
    </StyledAtom>
  );
};

export default Text;
