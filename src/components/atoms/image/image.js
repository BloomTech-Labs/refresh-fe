import React from "react";


const Image = ({ src, altText, ...props }) => {
  const { height, width } = props;
  return (
    <StyledAtom className="base-image" height={height} width={width}>
      <img className="base-image" src={src} alt={altText} />
    </StyledAtom>
  );
};

export default Image