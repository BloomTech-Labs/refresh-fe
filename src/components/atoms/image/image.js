import React from "react";

import StyledAtom from "../../../styles/global/components.css";

const Image = ({ src, altText, ...props }) => {
  const { height, width } = props;
  return (
    <StyledAtom className="base-image" height={height} width={width}>
      <img className="base-image" src={src} alt={altText} />
    </StyledAtom>
  );
};

export default Image