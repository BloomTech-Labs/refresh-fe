import React from "react";
import Button from "../../components/atoms/button/button";
import Badge from "../../components/atoms/badge/badge";
import Input from "../../components/atoms/input/input";
import Link from "../../components/atoms/link/link";

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
    </div>
  );
};

export default Atoms;
