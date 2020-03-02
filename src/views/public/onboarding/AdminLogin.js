//IMPORTS
//react
import React, { useState, useEffect, useContext } from "react";
//styled-components
import styled from "styled-components";
//axios with auth
import { axiosWithAuth } from "../../../helpers/axiosWithAuth";
//images
import waves from "../../../images/Onboarding/waves.svg";
import welcome from "../../../images/Onboarding/welcome.svg";

//Context
import { UserMissionsContext } from "../../../contexts/UserMissionsContext";
import { UserContext } from "../../../contexts/UserContext";
import { missionMasher } from "../../globalFunctions";

const AdminLogin = props => {
  //hooks
  const [user, setUser] = useState({
    // name: "",
    email: "",
    password: ""
    // confirmPassword: ""
  });
  const [err, setErr] = useState();
  const [enabledBtn, setEnabledBtn] = useState(false);

  // contexts
  const activeUser = useContext(UserContext);
  const userMissions = useContext(UserMissionsContext);

  let errors = {};
  useEffect(() => {
    // errors.userName =
    //   user.name.length < 3 && "username must be greater than 4 characters";
    // errors.userEmail =
    //   user.email.length < 3 && "user email must be greater than 4 characters";
    // errors.userPassword =
    //   user.confirmPassword.length < 3 &&
    //   user.password.length < 3 &&
    //   "user password must be greater than 5 characters";
    // errors.userConfirmedPass =
    //   user.password === user.confirmPassword &&
    //    "please make sure passwords match";
    //  !errors.userName &&
    //   !errors.userEmail &&
    //   !errors.userPassword &&
    //   errors.userConfirmedPass.length > 3 &&
    //    !errors.confirmedPass &&
      setEnabledBtn(true);
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
      [e.target.name]: e.target.value
    });
  };

  //handle submit of user info to backend
  const handleSubmit = e => {
    props.debug && console.log("handleSubmit enabledBtn:", enabledBtn);
    if (!enabledBtn) {
      alert(
        errors.userName ||
          errors.userEmail ||
          errors.userPassword ||
          errors.confirmedPass
      );
    } else {
      axiosWithAuth()
        .post("/login", { email: user.email, password: user.password })
        .then(res => {
          if (res.data.token) {
            props.debug && console.log(res.data);
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
            props.history.push("/admindash");
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

//EXPORT
export default AdminLogin;
