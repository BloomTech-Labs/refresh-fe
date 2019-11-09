import React from "react";
import Colors from "../../styles/global/colors";
import Button from "../../components/atoms/button/button";
import Badge from "../../components/atoms/badge/badge";
import Input from "../../components/atoms/input/input";
import Link from "../../components/atoms/link/link";
import Row from "../../components/atoms/row/row";
import Card from "../../components/atoms/card/card";
import Col from "../../components/atoms/col/col";

const google = "https://www.google.com/";
const Atoms = props => {
  return (
    <div>
      <Button width={50}>Imma button yo</Button>
      <Badge width={15} text={"I am a badge"} />
      <Input
        // width={350}
        margin={2}
        placeholder={"base input"}
        type={"text"}
        name={"firstname"}
        value={"First Name"}
      />
      <Link className="baseLink" href={google} text={"I'm a link!"}></Link>
      <Row backgroundColor={Colors.red}>
        <p>I'm a row</p>
      </Row>
      <Row backgroundColor={"white"}>
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
    </div>
  );
};

export default Atoms;
