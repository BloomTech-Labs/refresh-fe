import React from "react";

import Button from "../../components/atoms/button/button";
import Badge from "../../components/atoms/badge/badge";
import ButtonLink from "../../components/atoms/button/buttonLink";
import Input from "../../components/atoms/input/input";
import Link from "../../components/atoms/link/link";
import Row from "../../components/atoms/row/row";
import Card from "../../components/atoms/card/card";
import Col from "../../components/atoms/col/col";
import LoadingSpinner from "../../components/atoms/spinner/spinner.js";
import Image from "../../components/atoms/image/image";
import Text from "../../components/atoms/text/text";

import Colors from "../../styles/global/colors";
import Label from "../../components/atoms/label/label";
import Icon from "../../components/atoms/icon/icon";
import svgImage from "../../images/refresh-yo-guy.svg";
// import testImage from "../../images/two_cubes.png";

const testImage = 'require("../../images/two_cubes.png");'
const text =
  "Terrorize the hundred-and-twenty-pound rottweiler and steal his bed, not sorry leave dead animals as gifts who's the baby, cat fur is the new black destroy the blinds or please stop looking at your phone and pet me for run off table persian cat jump eat fish. Fat baby cat best buddy little guy kitty poochy so scratch me there, elevator butt favor packaging over toy somehow manage to catch a bird but have no idea what to do next, so play with it until it dies of shock stick butt in face scratch at the door then walk away. Experiences short bursts of poo-phoria after going to the loo sleep yet you call this cat food, or sit in a box for hours groom forever, stretch tongue and leave it slightly out, blep make meme, make cute face.";
const google = "https://www.google.com/";
const Atoms = ({ ...props }) => {
  return (
    <div>
      <Button>Imma button yo</Button>
      <ButtonLink
        href={google}
        textDecoration={"wavy underline purple"}
        color={"lime"}
      >
        This one links externally
      </ButtonLink>
      <Badge text={"Badge"} />
      <Label forId={"inputExample"} backgroundColor={"transparent"} />
      <Input
        id={"inputExample"}
        margin={2}
        placeholder={"Feed me words!"}
        type={"text"}
        name={"firstname"}
        value={"First Name"}
      />
      <Link href={google} text={"I'm a link!"}></Link>
      <Row height={10} backgroundColor={Colors.primary} color={Colors.white}>
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
        <LoadingSpinner />
      </Row>

      <Image src={testImage} alt={"stuff"} />
      <Row>
        <Col>
          <Text text={text} />
        </Col>
      </Row>
      <Icon svg={svgImage} />
    </div>
  );
};

export default Atoms;
