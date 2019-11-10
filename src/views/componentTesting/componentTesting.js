import React from "react";
import Colors from "../../styles/global/colors";
import Button from "../../components/atoms/button/button";
import Badge from "../../components/atoms/badge/badge";
import Input from "../../components/atoms/input/input";
import Link from "../../components/atoms/link/link";
import Row from "../../components/atoms/row/row";
import Card from "../../components/atoms/card/card";
import Col from "../../components/atoms/col/col";
import LoadingSpinner from "../../components/atoms/spinner/spinner.js";
import Image from "../../components/atoms/image/image";
import Text from "../../components/atoms/text/text";

import testImage from "../../images/two_cubes.png";

const text =
  "Terrorize the hundred-and-twenty-pound rottweiler and steal his bed, not sorry leave dead animals as gifts who's the baby, cat fur is the new black destroy the blinds or please stop looking at your phone and pet me for run off table persian cat jump eat fish. Fat baby cat best buddy little guy kitty poochy so scratch me there, elevator butt favor packaging over toy somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock stick butt in face scratch at the door then walk away. Experiences short bursts of poo-phoria after going to the loo sleep yet you call this cat food, or sit in a box for hours groom forever, stretch tongue and leave it slightly out, blep make meme, make cute face.";
const google = "https://www.google.com/";
const Atoms = props => {
  return (
    <div>
      <Button backgroundColor={Colors.primary} width={50}>
        Imma button yo
      </Button>
      <Badge text={"Badge"}/>
      <Input
        // width={350}
        margin={2}
        placeholder={"base input"}
        type={"text"}
        name={"firstname"}
        value={"First Name"}
      />
      <Link href={google} text={"I'm a link!"}></Link>
      <Row backgroundColor={Colors.red} color={Colors.white}>
        <p>I'm a row</p>
      </Row>
      <Row backgroundColor={Colors.primary}>
        <Card textAlign={"center"}>
          <p>Hi! I am a card inside of a row!</p>
        </Card>
        <Card textAlign={"center"}>
          <p>Me too!</p>
        </Card>
        <Card textAlign={"center"}>
          <p>Me three!</p>
        </Card>
      </Row>
      <Row>
        <Col>
          <p>Hi! I am a column inside of a row!</p>
        </Col>
        <Col>
          <p>Me too!</p>
        </Col>
        <Col>
          <p>Me three!</p>
        </Col>
      </Row>
      <Row>
        <LoadingSpinner height={75} width={75} />
      </Row>

      <Image src={testImage} alt={"stuff"} />
      <Row>
        <Col>
          <Text text={text} />
        </Col>
      </Row>
    </div>
  );
};

export default Atoms;
