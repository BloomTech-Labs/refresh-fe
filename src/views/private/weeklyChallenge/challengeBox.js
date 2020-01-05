import React from "react";
import Container from "../../../components/atoms/container/container";
import Text from "../../../components/atoms/text/text";

const ChallengeBox = props => {
  const { id, points, due_by, challenge_title, description } = props.challenge;
  return (
    <>
      <Container>
        <Text text={points} />
        <Text text={due_by} />
        <Text text={challenge_title} />
        <Text text={description} />
      </Container>
    </>
  );
};

export default ChallengeBox;
