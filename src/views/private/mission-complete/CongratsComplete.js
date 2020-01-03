// IMPORTS
// react
import React from "react";

import Icon from "../../../components/atoms/icon/icon";
import Container from "../../../components/atoms/container/container";
import Text from "../../../components/atoms/text/text";
import Button from "../../../components/atoms/button/button";
// images
import rocket from "../../../images/rocket.svg";

const CongratsComplete = props => {
  const congratText = "Congratulations";
  const moreText = "To get more points and badges,";
  const moreText2 = "complete more missions.";
  return (
    <>
      <Container>
        <Text
          text={congratText}
          fontSize={3}
          color={"#E6E6E6"}
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
        <Text
          text={moreText}
          fontSize={1.5}
          color={"#E6E6E6"}
          fontWeight={600}
          position={"absolute"}
          top={55.7}
          left={5.7}
          width={26}
          letterSpacing={0.02}
        />
        <Text
          text={moreText2}
          fontSize={1.5}
          color={"#E6E6E6"}
          fontWeight={600}
          position={"absolute"}
          top={58.2}
          left={5.7}
          width={26}
        />
        <Button
          backgroundColor={"#E05CB3"}
          boxShadow={"0px 4px 10px rgba(21, 15, 172, 0.1)"}
          width={25.1}
          height={5.6}
          color={"#e6e6e6"}
          fontSize={1.6}
          letterSpacing={0.035}
          position={"absolute"}
          left={5.7}
          top={61.4}
        >
          Share with your team
        </Button>
      </Container>
    </>
  );
};

export default CongratsComplete;
