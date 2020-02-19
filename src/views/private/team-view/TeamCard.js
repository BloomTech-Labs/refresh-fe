import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const TeamCard = props => {
  const { display_name, bio, avatar } = props;

  return (
    <>
      <TMCard>
        <TMAvatar className="avatarpic" src={avatar} />
        <TMInfo>
          <TMName>{display_name}</TMName>
          <TMBio>{bio}</TMBio>
        </TMInfo>
      </TMCard>
    </>
  );
};

export const TLCard = props => {
  const { bio, avatar, display_name } = props;

  return (
    <>
      <TMCard>
        <TMAvatar src={avatar} />
        <TMInfo>
          <TMName>{display_name}</TMName>
          <TMBio>{bio}</TMBio>
        </TMInfo>
      </TMCard>
    </>
  );
};

const TMCard = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #3d3b91;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.05);
  border-radius: 3px;
  margin-bottom: 2%;
  min-height: 7rem;
`;

const TMName = styled.p`
  font-size: small;
  color: #e6e6e6;
  letter-spacing: 0.04em;
`;

const TMAvatar = styled.img`
  max-width: 100%;
  width: 5rem;
  max-height: 100%;
  height: 5rem;
  border-radius: 50%;
`;

const TMBio = styled.p`
  font-size: x-small;
  color: #e6e6e6;
  letter-spacing: 0.04em;
`;

const TMInfo = styled.div`
  flex-basis: 70%;
`;
