//IMPORTS
//react
import React, { useState } from "react";
//styled components
import styled from "styled-components";
//axios with auth
import { axiosWithAuth } from "../../helpers/axiosWithAuth";
//images
import waves from "../../images/Onboarding/waves.svg";
import welcome from "../../images/Onboarding/welcome_back.svg";
//atoms
// import Input from "../../components/atoms/input/input";

const EmailLogin = props => {
  //hooks
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [err, setErr] = useState();

  //route to login
  const routeToLogin = e => {
    e.preventDefault();
    props.history.push("/login");
  };

  //handle change for state
  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  //handle submit to backend
  const handleSubmit = () => {
    axiosWithAuth()
      .post("/login", { email: user.email, password: user.password })
      .then(res => {
        if (res.data.token) {
          localStorage.setItem("token", res.data.token);
          props.history.push("/dashboard");
        } else {
          setErr(res.data);
          console.log(err);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  //render
  return (
    <OnBoardContainer>
      <div>
        <ButtonNoColor onClick={routeToLogin}>&lt;</ButtonNoColor>
      </div>
      <Logo src={welcome} />
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="email"
          placeholder="Email address"
          onChange={handleChange}
          value={user.email}
          width={100}
          border={"1px solid #3D3B91"}
          backgroundColor={"#3D3B91"}
          color={"#E6E6E6"}
        />
        <Input
          type="text"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
          width={100}
          border={"1px solid #3D3B91"}
          backgroundColor={"#3D3B91"}
          color={"#E6E6E6"}
        />
        <ButtonNoColor className="smallTxt">Forgot password?</ButtonNoColor>
        <Button onClick={handleSubmit}>Log In</Button>
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
  background-color: #4742bc;
  background-image: url(${waves});
  color: #7f7cca;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  padding: 2.5rem 4rem;

  .smallTxt {
    font-size: 1rem;
    margin-top:2rem;
  }
`;

const Header = styled.h1`
  font-weight: bold;
  font-size: 4rem;
  line-height: 82px;
  letter-spacing: 3.5px;
  color: #ffffff;
`;

const Logo = styled.img`
  width: 100%;
  max-width: 90%;
  height: auto;
  margin: 0 auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 85%;
  margin-left: 2rem;

  input{
    margin: 0.5rem 0.5rem 2rem;
    ::-webkit-input-placeholder {
      font-family: "Catamaran", sans-serif;
      color: #E6E6E6;
    }
`;

const Input = styled.input`
  border: 0;
  border: 1px solid #3D3B91;
  margin: 2.5rem 0;
  padding: 1rem 0.5rem;
  width:100%;
  background: #3D3B91;
  color: #ccc9ff;
  outline: none;
  font-size:1.4rem ::-webkit-input-placeholder {
    font-family: "Catamaran", sans-serif;
    color: #E6E6E6;
  }
`;

const Button = styled.a`
display: flex;
justify-content: space-evenly;
border-radius: 0.5rem;
padding: 1.2rem 0.8rem;
width:85%;
text-align:center;
margin: 6rem auto 0;
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
export default EmailLogin;
