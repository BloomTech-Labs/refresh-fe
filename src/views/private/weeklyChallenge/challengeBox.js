import React from "react";
import styled from "styled-components";
// atoms
import Text from "../../../components/atoms/text/text";

const ChallengeBox = props => {
  const { id, points, due_by, challenge_title, description } = props.challenge;
  return (
    <>
      <ChallengeContainer>
        <Text
          text={points}
          position={"absolute"}
          height={1.9}
          width={5.2}
          top={17.2}
          left={27.8}
          fontSize={1}
        />
        <Text
          text={due_by}
          position={"absolute"}
          height={1.5}
          width={13.6}
          top={24.8}
          left={6.2}
          fontSize={1.2}
          fontWeight={"bold"}
          textAlign={"left"}
        />
        <Text
          text={challenge_title}
          position={"absolute"}
          height={2.5}
          width={17.2}
          top={16.9}
          left={6.2}
          fontSize={1.5}
          fontWeight={"bold"}
          letterSpacing={0.035}
          textAlign={"left"}
        />
        <Text
          text={description}
          position={"absolute"}
          height={2.4}
          width={24.9}
          top={20.4}
          left={6.2}
          fontSize={1.2}
          textAlign={"left"}
        />
      </ChallengeContainer>
    </>
  );
};

const ChallengeContainer = styled.div`
  position: relative;
  height: 15.2rem;
  width: 31.1rem;
  margin: 0 auto;
  /* background-color: #3d3b91; */
  border: 1px red solid;
`;

export default ChallengeBox;
