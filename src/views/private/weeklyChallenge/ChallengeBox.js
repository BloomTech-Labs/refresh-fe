import React from "react";
import styled from "styled-components";

// components
import Text from "../../../components/atoms/text/text";
import Container from "../../../components/atoms/container/container";

const ChallengeBox = props => {
  const { points, due_by, challenge_title, description } = props.challenge;
  return (
    <>
      <Container
        className="challenge-wrapper"
        backgroundColor={"#3D3B91"}
        margin={1}
        marginTop={1}
        marginBottom={1}
        width={31.1}
        height={15.2}
      >
        <PointsWrapper />
        <Text
          text={points}
          position={"absolute"}
          top={3.3}
          left={24.5}
          height={1.9}
          width={5.2}
          fontSize={1}
          fontWeight={"bold"}
          color={"#4E4829"}
        />
        <Text
          text={due_by}
          position={"absolute"}
          top={10.9}
          left={3}
          height={1.5}
          width={13.6}
          fontSize={1.2}
          fontWeight={"bold"}
          textAlign={"left"}
        />
        <Text
          text={challenge_title}
          position={"absolute"}
          left={3}
          top={3}
          height={2.5}
          width={17.2}
          fontSize={1.5}
          fontWeight={"bold"}
          letterSpacing={0.035}
          textAlign={"left"}
        />
        <Text
          text={description}
          position={"absolute"}
          top={6.5}
          left={3}
          height={2.4}
          width={24.9}
          fontSize={1.2}
          textAlign={"left"}
        />
        <Text
          text={description}
          position={"absolute"}
          top={6.5}
          left={3}
          height={2.4}
          width={24.9}
          fontSize={1.2}
          textAlign={"left"}
        />
        <Text
          text={"Accept"}
          color={"#E05CB3"}
          position={"absolute"}
          top={12.6}
          left={12.7}
          height={2.4}
          width={24.9}
          fontSize={1}
          textAlign={"left"}
        />
        <Text
          text={"Decline"}
          color={"#B8B7E1"}
          position={"absolute"}
          top={12.6}
          left={25}
          height={2.4}
          width={24.9}
          fontSize={1}
          textAlign={"left"}
        />
      </Container>
    </>
  );
};

const PointsWrapper = styled.div`
  background-color: #e9cc2f;
  position: absolute;
  top: 3.3rem;
  left: 24.5rem;
  height: 1.9rem;
  width: 5.2rem;
`;

export default ChallengeBox;
