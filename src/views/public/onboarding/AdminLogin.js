//IMPORTS
//react
import React, { useState, useEffect, useContext } from "react";
import Popup from 'react-popup';
import ModalButton from './modal.js'
//styled-components
import styled from "styled-components";
//axios with auth
import { axiosWithAuth } from "../../../helpers/axiosWithAuth";
//images
import waves from "../../../images/Onboarding/waves.svg";
import welcome from "../../../images/Onboarding/welcome.svg";


const AdminLogin = props => {
  //hooks
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [err, setErr] = useState(false);
  const [enabledBtn, setEnabledBtn] = useState(false);

  let errors = {};
  useEffect(() => {
    errors.userEmail =
    user.email.length < 4 && "user email must be greater than 5 characters";
  errors.userPassword =
    user.password.length < 4 &&
    "user password must be greater than 5 characters";
    !errors.userEmail && !errors.userPassword && setEnabledBtn(true);
    props.debug &&
      console.log("errors:", errors, "enabledBtn:", enabledBtn, "user:", user);
  }, [user]);
  
  //route to sign up page
  const routeToLanding = e => {
    e.preventDefault();
    props.history.push("/");
  };

  //handle change for user info
  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value.toLowerCase()
    });
  };

  //handle submit of user info to backend
  const handleSubmit = e => {
      axiosWithAuth()
        .post("/admin/login", { email: user.email, password: user.password })
        .then(res => {
          console.log(res.data.token);
          if (res.data.token) {
            localStorage.setItem("token", res.data.token);
            props.history.push("/");
          } else {
            console.log(err.message)
            props.debug && console.log(err);
          }
        })
        .catch(err => {
          props.debug && console.log(err);
          alert('Invalid Credentials')
        });
  };

  let BtnStats = !enabledBtn && `disabledColor`;
  //render
  return (
    <OnBoardContainer>
      <Popup className="mm-popup"/>
      <ButtonNoColor onClick={routeToLanding}>&lt;</ButtonNoColor>
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
        />
        <Button onClick={handleSubmit} className={BtnStats}>
          Sign In
        </Button>
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
  margin: auto auto 0 auto;
  line-height: 1.5;
  background-color: #4742bc;
  background-image: url(${waves});
  background-size: contain;
  color: #4742bc;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  padding: 8%;
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-box-shadow: #ddd;
    -webkit-text-fill-color: #fff;
    transition: background-color 5000s ease-in-out 0s;
  }
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

  @media screen and (max-width: 1000px) {
    margin-top: auto;
  }
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
      color: #a6a6a6;
      font-size: calc(100%);
    }
  }

  .disabledColor {
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
  &:hover {
    cursor: pointer;
  }
}
`;

const ButtonNoColor = styled.a`
  margin-right: 89%;
  font-size: 2rem;
  font-style: medium;
  color: #ccc9ff;
`;

const ErrorMessage = styled.div`
color: red;
font-size: 3rem
`

//EXPORT
export default AdminLogin;
