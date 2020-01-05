import React from "react";
import styled from "styled-components";
// dummy data
import { weeklyChallengeData } from "./dummyData";
// components
import ChallengeBox from "./challengeBox";

const WeeklyChallenge = props => {
  return (
    <>
      {weeklyChallengeData.map(challenge => {
        return (
          <ChallengeBox key={challenge.id} challenge={challenge} {...props} />
        );
      })}
    </>
  );
};

export default WeeklyChallenge;
