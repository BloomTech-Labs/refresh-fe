import React from "react";
// components
import Text from "../../../components/atoms/text/text";
import Container from "../../../components/atoms/container/container";

const ChallengeBox = props => {
  const { points, due_by, challenge_title, description } = props.challenge;
  return (
    <>
      <Container className="challenge-wrapper">
        <Text
          text={points}
          //   position={"absolute"}
          //   top={17.2}
          //   left={27.8}
          height={1.9}
          width={5.2}
          fontSize={1}
        />
        <Text
          text={due_by}
          //   position={"absolute"}
          //   top={24.8}
          //   left={6.2}
          height={1.5}
          width={13.6}
          fontSize={1.2}
          fontWeight={"bold"}
          textAlign={"left"}
        />
        <Text
          text={challenge_title}
          //   position={"absolute"}
          //   top={16.9}
          //   left={6.2}
          height={2.5}
          width={17.2}
          fontSize={1.5}
          fontWeight={"bold"}
          letterSpacing={0.035}
          textAlign={"left"}
        />
        <Text
          text={description}
          //   position={"absolute"}
          //   top={20.4}
          //   left={6.2}
          height={2.4}
          width={24.9}
          fontSize={1.2}
          textAlign={"left"}
        />
      </Container>
    </>
  );
};

export default ChallengeBox;
