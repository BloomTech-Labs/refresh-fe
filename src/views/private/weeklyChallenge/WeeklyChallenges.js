import React from "react";
import styled from "styled-components";
// helpers
import { flex } from "../../../styles/global/Mixins";
// dummy data
import { weeklyChallengeData } from "./dummyData";
// components
import Text from "../../../components/atoms/text/text";
import Container from "../../../components/atoms/container/container";
import ChallengeBox from "./ChallengeBox";
// set state to weeklyChallengeData
const WeeklyChallenge = props => {
  // console.log({ weeklyChallengeData });

  return (
    <>
      <Container className="weekly-challenges">
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

        <ChallengeHub className="challenge-hub">
          {weeklyChallengeData.map(challenge => {
            return (
              <ChallengeBox
                key={challenge.id}
                challenge={challenge}
                {...props}
              />
            );
          })}
        </ChallengeHub>
      </Container>
    </>
  );
};

const ChallengeHub = styled.div`
  padding-top: 15rem;
  width: 100%;
  max-height: 100%;
  overflow-y: scroll;
  ${flex.flexRowWrapAround}
  @media screen and (min-width: 1200px) {
    overflow-y: hidden;
  }
`;

export default WeeklyChallenge;
