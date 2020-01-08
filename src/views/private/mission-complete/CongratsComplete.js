// libraries
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// atoms
import Icon from "../../../components/atoms/icon/icon";
import Container from "../../../components/atoms/container/container";
import Text from "../../../components/atoms/text/text";
import Button from "../../../components/atoms/button/button";
// images
import rocket from "../../../images/rocket.svg";
import waves from "../../../images/Onboarding/waves.svg";
import Confetti from "react-dom-confetti";


const CongratsComplete = ({ ...props }) => {
  const { status, submitMissionTracker } = props;
  const [confettiTime, setConfettiTime] = useState(false);

  useEffect(() => {
    status === "closed" ? setConfettiTime(false) : setConfettiTime(status);
  }, [status]);

  // Confetti config
  const config = {
    angle: 90,
    spread: 45,
    startVelocity: 45,
    elementCount: 50,
    dragFriction: 0.1,
    duration: 5000,
    stagger: 0,
    width: "10px",
    height: "10px",
    colors: ["#FC5454", "#FFA25F", "#1575FF", "#27AE60", "#9B51E0", "#FC54EB"]
  };

  return (
    <>
      <CongratsScreen className={status}>
        <Container>
          <Text
            text={"Congratulations!"}
            fontSize={3}
            fontWeight={600}
            position={"absolute"}
            width={21.4}
            top={17.5}
            left={8}
            letterSpacing={0.02}
          />
          <Icon
            svg={rocket}
            position={"absolute"}
            height={16.7}
            width={16.7}
            top={33.1}
            left={10.588}
          />
          <ConfettiWrapper className="confettiWrapper">
            <Confetti active={confettiTime} config={config} />
          </ConfettiWrapper>
          <Text
            text={`To get more points and badges,`}
            fontSize={1.5}
            fontWeight={600}
            position={"absolute"}
            top={55.7}
            left={5.7}
            width={26}
            letterSpacing={0.02}
          />
          <Text
            text={`complete more missions.`}
            fontSize={1.5}
            fontWeight={600}
            position={"absolute"}
            top={58.2}
            left={5.7}
            width={26}
          />
          <Link to="/dashboard">
            <Button
              backgroundColor={"#E05CB3"}
              fontSize={1.6}
              letterSpacing={0.035}
              position={"absolute"}
              left={5.7}
              top={61.4}
              onClick={submitMissionTracker}
            >
              <Text text={`Share with your team`} fontSize={1.6} letterSpacing={0.035} />
            </Button>
          </Link>
        </Container>
      </CongratsScreen>
    </>
  );
};

const CongratsScreen = styled.div`
  &.open {
    width: 100vw;
    height: 100%;
    margin: 0 auto;
    border-radius: 5px;
    position: fixed;
    bottom: 0;
    background-image: url(${waves});
    background-color: #4742bc;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
  }

  &.closed {
    width: 100vw;
    height: 0vh;
    margin: 0 auto;
    border-radius: 5px;
    position: fixed;
    bottom: -50vh;
    background-color: #6762e3;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    transition: 0.5s;
  }
`;

const ConfettiWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50vh;
  width: 50%;
  height: 100vh;
`;

export default CongratsComplete;
