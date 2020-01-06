//IMPORTS
//react
import React, { useState, useEffect, useContext } from "react";
//styled components
import styled from "styled-components";
//axios with auth
import { axiosWithAuth } from "../../../helpers/axiosWithAuth";
//images
import waves from "../../../images/Onboarding/waves.svg";
import welcome from "../../../images/Onboarding/welcome_back.svg";
//atoms
// import Input from "../../components/atoms/input/input";
//Context
import { UserMissionsContext } from "../../../contexts/UserMissionsContext";
import { UserContext } from "../../../contexts/UserContext";
import { missionMasher } from "../../globalFunctions";

const EmailLogin = props => {
  //hooks
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [err, setErr] = useState();
  const [enabledBtn, setEnabledBtn] = useState(false);
  // contexts
  const activeUser = useContext(UserContext);
  const userMissions = useContext(UserMissionsContext);

  //errors useEffect
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
    if (!enabledBtn) {
      alert(errors.userEmail || errors.userPassword);
    } else {
      axiosWithAuth()
        .post("/login", { email: user.email, password: user.password })
        .then(res => {
          if (res.data.token) {
            const userObject = res.data;
            const {
              mission_subscriptions,
              missions_in_progress
            } = userObject.user_missions;

            activeUser.setUser(userObject.user_profile);
            userMissions.setUserMissions(
              missionMasher(mission_subscriptions, missions_in_progress)
            );
            localStorage.setItem("token", res.data.token);
            props.history.push("/dashboard");
          } else {
            setErr(res.data);
            props.debug && console.log(err);
          }
        })
        .catch(err => {
          props.debug && console.log(err);
        });
    }
  };

  let BtnStats = !enabledBtn && `disabledColor`;
  //render
  return (
    <OnBoardContainer>
      <ButtonNoColor onClick={routeToLogin}>&lt;</ButtonNoColor>
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
          type="text"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          value={user.password}
          width={100}
          border={"1px solid #3D3B91"}
          backgroundColor={"#3D3B91"}
        />
        <ButtonNoColor className="smallTxt">Forgot password?</ButtonNoColor>
        <Button onClick={handleSubmit} className={BtnStats}>
          Log In
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
  .smallTxt {
    font-size: calc(80% + 0.1vw);
    margin-top: 2rem;
    width: 100%;
    text-align: center;
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
  margin-right: 89%;
  font-size: 2rem;
  font-style: medium;
  color: #ccc9ff;
`;

//EXPORT
export default EmailLogin;
