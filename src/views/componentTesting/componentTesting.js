import React from "react";
import Colors from "../../styles/global/colors";
import Button from "../../components/atoms/button/button";
import Badge from "../../components/atoms/badge/badge";
import Input from "../../components/atoms/input/input";
import Link from "../../components/atoms/link/link";
import Row from "../../components/atoms/row/row";

const google = "https://www.google.com/";
const Atoms = props => {
  return (
    <div>
      <Button width={150}>Imma button yo</Button>
      <Badge text={22} />
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
    </div>
  );
};

export default Atoms;
