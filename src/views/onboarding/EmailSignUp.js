//IMPORTS
//react
import React, { useState, useEffect } from "react";
//styled-components
import styled from "styled-components";
//axios with auth
import { axiosWithAuth } from "../../helpers/axiosWithAuth";
//images
import waves from "../../images/Onboarding/waves.svg";
import welcome from "../../images/Onboarding/welcome.svg";
//atoms
// import Input from "../../components/atoms/input/input";

const EmailSignUp = props => {
  //hooks
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [err, setErr] = useState();
  const [enabledBtn, setEnabledBtn] = useState(false);

  let errors = {};
  useEffect(() => {
    errors.userName =
      user.name.length < 4
        && "username must be greater than 5 characters"
    errors.userEmail =
      user.email.length < 4
        && "user email must be greater than 5 characters"
    errors.userPassword =
    user.confirmPassword.length < 4 &&  user.password.length < 4
        && "user password must be greater than 5 characters"
    errors.userConfirmedPass =
      user.password === user.confirmPassword 
        && "please make sure passwords match"
    !errors.userName &&
      !errors.userEmail &&
      !errors.userPassword &&
      errors.userConfirmedPass.length > 4 &&
      !errors.confirmedPass &&
      setEnabledBtn(true);
    console.log("errors:", errors, "enabledBtn:", enabledBtn, "user:", user);
  }, [user]);
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
    console.log("handleSubmit enabledBtn:", enabledBtn);
    if (!enabledBtn) {
      alert(
        errors.userName ||
        errors.userEmail ||
        errors.userPassword ||
        errors.confirmedPass
      );
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

  let BtnStats = !enabledBtn && `disabledColor`
  //render
  return (
    <OnBoardContainer>
        <ButtonNoColor onClick={routeToSignUp}>&lt;</ButtonNoColor>
        <Logo src={welcome} />
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={user.name}
          width={100}
          border={"1px solid #3D3B91"}
          backgroundColor={"#3D3B91"}
          color={"#E6E6E6"}
        />
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
          type="password"
          name="password"
          autoComplete="new-password"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
          width={100}
          border={"1px solid #3D3B91"}
          backgroundColor={"#3D3B91"}
          color={"#E6E6E6"}
        />
        <Input
          type="password"
          name="confirmPassword"
          autoComplete="new-password"
          placeholder="Confirm password"
          onChange={handleChange}
          value={user.confirmPassword}
          width={100}
          border={"1px solid #3D3B91"}
          backgroundColor={"#3D3B91"}
          color={"#E6E6E6"}
        />
        <Button onClick={handleSubmit} className={BtnStats}>Sign Up</Button>
      </Form>
    </OnBoardContainer>
  );
};

// STYLED COMPONENTS
const OnBoardContainer = styled.div`
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

const Logo = styled.img`
height: calc(100vh / 3.5);
width: 100%;
max-width: 100%;
margin: auto;
`;

const Form = styled.form`
display: flex;
margin: auto 0;
flex-direction: column;
width: 89%;
  input {
    font-size: calc(100% + 0.2vw);
    ::-webkit-input-placeholder {
      font-family: "Catamaran", sans-serif;
      color:  #a6a6a6;
      font-size: calc(100%);
    }
  }

  .disabledColor{
    opacity: 30%;
  }
`;

const Input = styled.input`
  border: 1px solid #3d3b91;
  margin: 3% 0;
  padding: 5%;
  width: 100%;
  border-radius: 3px;
  box-shadow: 1px 1px 1px 1px #35347f;
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
  margin-right:89%;
  font-size: 2rem;
  font-style: medium;
  color: #ccc9ff;
`;

//EXPORT
export default EmailSignUp;
