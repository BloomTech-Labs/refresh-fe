//IMPORTS
//react
import React, { useState } from "react";
//styled-components
import styled from "styled-components";
//axios with auth
import { axiosWithAuth } from "../../helpers/axiosWithAuth";

const EmailSignUp = props => {
  //hooks
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [err, setErr] = useState();

  //route to sign up page
  const routeToSignUp = e => {
    e.preventDefault();
    props.history.push("/signup");
  };

  //handle change for user info
  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  //handle submit of user info to backend
  const handleSubmit = e => {
    if (user.password !== user.confirmPassword) {
      alert("Please make sure to enter the same password for confirm password");
    } else {
      axiosWithAuth()
        .post("/register", { email: user.email, password: user.password })
        .then(res => {
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            props.history.push("/firstlogin");
          } else {
            setErr(res.data);
            console.log(err);
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  //render
  return (
    <OnBoardContainer>
      <div>
        <ButtonNoColor onClick={routeToSignUp}>&lt;</ButtonNoColor>
        <Header>Sign up.</Header>
      </div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={user.name}
        />
        <Input
          type="text"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={user.email}
        />
        <Input
          type="text"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
        />
        <Input
          type="text"
          name="confirmPassword"
          placeholder="Confirm password"
          onChange={handleChange}
          value={user.confirmPassword}
        />
        <Button onClick={handleSubmit}>Continue</Button>
      </Form>
    </OnBoardContainer>
  );
};

// STYLED COMPONENTS
const OnBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Catamaran", sans-serif;
  margin: auto;
  line-height: 1.5;
  background-color: #3a3699;
  color: #7f7cca;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  padding: 2.5rem 4rem;
`;

const Header = styled.h1`
  font-weight: bold;
  font-size: 4rem;
  line-height: 82px;
  letter-spacing: 3.5px;
  color: #ffffff;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin-left: 2rem;
`;

const Input = styled.input`
  border: 0;
  border-bottom: 1px solid #ccc9ff;
  margin: 25px 0;
  background: transparent;
  color: #ccc9ff;
  outline: none;
  font-size:1.4rem ::-webkit-input-placeholder {
    color: #ccc9ff;
  }
`;
const Button = styled.a`
  display: flex;
  justify-content: space-evenly;
  border-radius: 0.5rem;
  padding: 1.5rem 0.8rem;
  width:100%;
  text-align:center;
  margin: auto;
  background: #E05CB3;
  color: white;
  font-size:1.6rem;
  letter-spacing:0.1rem;
}
`;

const ButtonNoColor = styled.a`
  margin: auto;
  font-size: 1.6rem;
  font-style: medium;
  color: #ccc9ff;
`;

//EXPORT
export default EmailSignUp;
