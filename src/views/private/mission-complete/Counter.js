import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Counter = props => {
  const {
    missionTracker,
    setMissionTracker,
    selectedMission,
    drawerStatus
  } = props;

  const [answer, setAnswer] = useState(0);
  const { question_id } = selectedMission ? selectedMission : "";

  useEffect(() => {
    setAnswer(0);
  }, [drawerStatus]);

  const setAnswerValues = operator => {
    operator =
      operator === "+"
        ? setAnswer(answer > 0 ? answer - 1 : 0)
        : operator === "-"
        ? setAnswer(answer + 1)
        : setAnswer(answer);

    if (missionTracker.length < 1) {
      missionTracker.push({ question_id, answer });
    } else {
        let newAnswer = true
       missionTracker.map((mission, i) => {
        if (question_id === mission.question_id) {
          missionTracker[i] = { question_id, answer };
          newAnswer = false
        } 
      });
      newAnswer && missionTracker.push({ question_id, answer });
    }
    setMissionTracker(missionTracker);
  };

  return (
    <CounterWrapper>
      <button onClick={() => setAnswerValues("+")}>-</button>
      <Display>{answer}</Display>
      <button onClick={() => setAnswerValues("-")}>+</button>
    </CounterWrapper>
  );
};

// STYLED COMPONENTS
const CounterWrapper = styled.div`
  width: 100%;
  height: 5rem;
  margin: 2rem;
  margin-bottom: 4rem;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  button {
    width: 40px;
    height: 40px;
    border-radius: 5px;
    border: none;
    background-color: rgba(0, 0, 0, 0.5);
    color: #fff;
    font-size: 2rem;
    margin: 0 2rem;
    margin-top: auto;
    box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
  }
`;

const Display = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 5px;
  border: none;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 2rem;
  box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

// EXPORT
export default Counter;
