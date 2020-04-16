// IMPORTS
// react
import React, { useContext } from "react";
// styled components
import styled from "styled-components";
// images
import emailogo from "../../../images/Onboarding/email.svg";
//cube elements
import cubes from "../../../images/Onboarding/red_purple_cubes.svg";
// components
import Row from "../../../components/atoms/row/row";
import Col from "../../../components/atoms/col/col";
import Text from "../../../components/atoms/text/text";
import Image from "../../../components/atoms/image/image";
//Context
import { UserContext } from "../../../contexts/UserContext";
import { missionMasher } from "../../globalFunctions";
import {AdminContext} from "../../../contexts/AdminContext";

// COMPONENT
const Login = props => {
  // contexts
  const activeUser = useContext(UserContext);
  const adminUser = useContext(AdminContext);
  //routes
  const routeToHome = e => {
    e.preventDefault();
    props.history.push("/");
  };

  const routeToSignUp = e => {
    e.preventDefault();
    props.history.push("/signup");
  };

  const routeToEmailLogIn = e => {
    e.preventDefault();
    props.history.push("/emaillogin");
  };

  // const routeToAdminLogin = e => {
  //   e.preventDefault();
  //   props.history.push("/admin");
  // }

  //Or for Row variable -atoms styling
  const colText = "OR";

  //FaceBook or Google auth
  const auth = e => {
    //Open Popup and declare Size
    window.open(
      `https://refresh-yo-beta.herokuapp.com/${e.target.name}`,
      "Sign In With Facebook ;)",
      "width=400,height=500"
    );
    window.addEventListener(
      "message",
      response => {
        authSuccess(response.data); // e.data hold the message
      },
      false
    );
  };

  const authSuccess = userObject => {
    userObject = JSON.parse(userObject);
    const {
      mission_subscriptions,
      missions_in_progress
    } = userObject.user_missions;
    localStorage.setItem("token", userObject.token);
    {
      userObject.newUser === true
        ? props.history.push("/firstlogin")
        : props.history.push("/dashboard");
    }
  };

  return (
    <OnBoardContainer>
      <TopHolder>
        <ButtonNoColor onClick={routeToHome}>&lt;</ButtonNoColor>
        <ButtonNoColor onClick={routeToSignUp}>Sign Up</ButtonNoColor>
      </TopHolder>
      <HeaderHolder>
        <Header>
          Welcome <br /> Back.
        </Header>
        <Cubes src={cubes} />
      </HeaderHolder>
      <FlexHolder>
        <FlexWrapper>
          <p>OR</p>
          <div></div>
        </FlexWrapper>
        <Button onClick={routeToEmailLogIn}>
          Log In with Email <Image src={emailogo} height={2} width={2} />
        </Button>
      </FlexHolder>
      <Row width={97} height={1} padding={"12% 0"}>
      </Row>
      <FlexHolder></FlexHolder>
    </OnBoardContainer>
  );
};

// STYLED COMPONENTS

const OnBoardContainer = styled.div`
font-family: "Catamaran", sans-serif;
display:flex;
width: 100vw;
height: 100vh;
max-height: 100vh;
background-color: #4742bc;
overflow-x: hidden;
flex-direction:column;
justify-content:space-between;
align-items: flex-start
line-height: 1.5;
padding:10%;
&:nth-child(*){
  margin-bottom:5%;
}
`;

const Header = styled.h1`
  margin-right: 3rem;
  font-weight: bold;
  font-size: calc(110% + 6.7vw);
  line-height: 6.6rem;
  letter-spacing: 3.5px;
  color: #ffffff;

  @media screen and (min-width: 950px) {
    margin-top: -60px;
    line-height: 6rem;
    font-size: calc(110% + 5vw);
  }

  @media screen and (min-width: 700px) {
    font-size: calc(110% + 4vw);
    line-height: 5rem;
  }

  @media screen and (min-width: 1250px) {
    margin-top: -120px;
    line-height: 6rem;
  }
`;
const HeaderHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-top: 10%;
`;

const FlexHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: auto;
  align-items: flex-start;
  width: 100%;
`;

const TopHolder = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  width: 100%;
`;

const Button = styled.a`
display: flex;
justify-content: space-around;
border-radius: 0.5rem;
padding: 1.5rem 0;
width:84%;
text-align:center;
margin: auto;
background: #E05CB3;
color: white;
font-size: calc(110% + 0.5vw);
letter-spacing:0.1rem;
&:hover {
  cursor: pointer;
}
}
`;

const FlexWrapper = styled.div`
  margin: 15% auto;
  display: flex;
  align-items: center;
  flex-direction: row;
  color: #fff;
  width: 90%;
  div {
    border-bottom: 0.1rem solid #fff;
    margin: 0 1rem;
    width: 92%;
  }
  @media screen and (min-width: 450px) {
    display: none;
  }
`;

const ButtonNoColor = styled.a`
  font-size: calc(110% + 0.5vw);
  font-style: medium;
  color: #ccc9ff;
  &:hover {
    cursor: pointer;
  }
`;
const Cubes = styled.img`
  max-width: 39%;
  width: 100%;
  height: auto;
  margin: auto;
  padding-top: 3rem;

  @media screen and (min-width: 950px) {
    margin-top: -100px;
  }

  @media screen and (min-width: 1250px) {
    margin-top: -220px;
  }
`;

// const Logo = styled.img``;

// const GoogleLogo = styled(Logo)`
//   border-radius: 50%;
// `;

// EXPORT
export default Login;
