import React from "react";

import StyledAtom from "../../../styles/global/components.css";

const Image = ({ src, altText, ...props }) => {
  const { height, width } = props;
  return (
    <StyledAtom className="baseImage" height={height} width={width}>
      <img src={src} alt={altText} />
    </StyledAtom>
  );
};

export default Image