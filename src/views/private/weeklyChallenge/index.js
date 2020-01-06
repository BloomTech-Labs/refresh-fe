import React from "react";
import styled from "styled-components";
// dummy data
import { weeklyChallengeData } from "./dummyData";
// components
import ChallengeBox from "./challengeBox";
import Text from "../../../components/atoms/text/text";
import Container from "../../../components/atoms/container/container";

const WeeklyChallenge = props => {
  return (
    <>
      <Text
        text={"Weekly Challenges"}
        position={"absolute"}
        height={2.2}
        width={37.5}
        top={9.7}
        left={0}
        fontSize={2.4}
        fontWeight={"bold"}
        letterSpacing={0.035}
      />
      <Container marginTop={3}>
        {weeklyChallengeData.map(challenge => {
          return (
            <ChallengeBox key={challenge.id} challenge={challenge} {...props} />
          );
        })}
      </Container>
    </>
  );
};

export default WeeklyChallenge;
