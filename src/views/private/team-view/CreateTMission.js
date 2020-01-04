//IMPORTS
//react
import React, { useState, useEffect } from "react";// eslint-disable-line no-unused-vars
//styled-components
import styled from "styled-components";
//axios with auth
import { axiosWithAuth } from "../../../helpers/axiosWithAuth"; // eslint-disable-line no-unused-vars
//images
import waves from "../../../images/Onboarding/waves.svg";

const CreateTMission = props => {
  const [missionInfo, setMissionInfo] = useState({
    name: "",
    date: "",
    desc: ""
  });

  const routeToTLView = e => {
    e.preventDefault();
    props.history.push("/team-view");
  };

  const handleChanges = e => {
    setMissionInfo({
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = e => {
    props.debug && console.log(missionInfo);
  };

  return (
    <TVContainer>
      <ButtonNoColor onClick={routeToTLView}>&lt;</ButtonNoColor>
      <Header>Create Team Mission</Header>
      <Form onSubmit={handleSubmit}>
        <FormHeader>Mission Name</FormHeader>
        <InputDiv>
          <Input
            type="text"
            name="name"
            placeholder="Create a name for this mission"
            onChange={handleChanges}
            value={missionInfo.name}
            width={100}
            border={"1px solid #3D3B91"}
            backgroundColor={"#3D3B91"}
          />
        </InputDiv>
        <FormHeader>Due Date</FormHeader>
        <InputDiv>
          <Input
            type="text"
            name="date"
            placeholder="mm/dd"
            onChange={handleChanges}
            value={missionInfo.date}
            width={100}
            border={"1px solid #3D3B91"}
            backgroundColor={"#3D3B91"}
          />
        </InputDiv>
        <FormHeader>Mission Description</FormHeader>
        <InputDiv>
          <Input
            type="text"
            name="desc"
            placeholder="Add a description for your mission..."
            onChange={handleChanges}
            value={missionInfo.desc}
            width={100}
            border={"1px solid #3D3B91"}
            backgroundColor={"#3D3B91"}
          />
        </InputDiv>
        <Button onClick={handleSubmit}>Share with your team</Button>
      </Form>
    </TVContainer>
  );
};

const TVContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "Catamaran", sans-serif;
  margin: auto;
  line-height: 1.5;
  background-color: #4742bc;
  background-image: url(${waves});
  background-size: contain;
  color: #7f7cca;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  padding: 8%;
  &:nth-child(*) {
    background-color: green;
    margin-bottom: 5%;
  }
`;

const Header = styled.h1`
  margin-right: 3rem;
  font-weight: bold;
  font-size: calc(110% + 2vw);
  line-height: 6.6rem;
  letter-spacing: 3.5px;
  color: #ffffff;
`;

const FormHeader = styled.p`
  font-size: calc(100% + 0.1vw);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 2.6rem;
  letter-spacing: 2px;
  color: #b8b7e1;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 89%;
  input {
    font-size: calc(100% + 0.2vw);
    ::-webkit-input-placeholder {
      font-family: "Catamaran", sans-serif;
      color: #a6a6a6;
    }
  }

  .disabledColor {
    opacity: 30%;
  }
`;
const InputDiv = styled.div`
  display: flex;
  border: 1px solid #3d3b91;
  margin: 3% 0;
  padding: 5%;
  width: 100%;
  border-radius: 3px;
  box-shadow: 1px 1px 1px 1px #35347f;
  background: #3d3b91;
  color: #ffffff;
  i {
    padding-top: 2%;
    margin-right: 2%;
    font-weight: lighter;
    font-size: calc(81%);
  }
`;
const Input = styled.input`
  border: 1px solid #3d3b91;
  background: #3d3b91;
  color: #ffffff;
  outline: none;
  font-size: calc(100%);
  ::-webkit-input-placeholder {
    font-family: "Catamaran", sans-serif;
    font-size: calc(100%);
  }
`;

const Button = styled.a`
  display: flex;
  justify-content: space-evenly;
  border-radius: 0.5rem;
  padding: 1.5rem 0.8rem;
  width:75%;
  text-align:center;
  margin: 13% auto auto;
  background: #E05CB3;
  color: white;
  font-size:calc(110% + 0.5vw);
  letter-spacing:0.1rem;
}
`;

const ButtonNoColor = styled.a`
  margin-right: 89%;
  font-size: 2rem;
  font-style: medium;
  color: #ccc9ff;
`;

export default CreateTMission;
