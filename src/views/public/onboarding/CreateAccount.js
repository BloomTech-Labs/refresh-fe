//IMPORTS
//react
import React from "react";
//styled components
import styled from "styled-components";
//images
import waves from "../../../images/Onboarding/waves.svg";
//logos
import fblogo from "../../../images/Onboarding/facebook_round_transparent_logo.svg";
import emailogo from "../../../images/Onboarding/email.svg";
import googlelogo from "../../../images/Onboarding/google_icon_round_color.svg";
//cube elements
import cubes from "../../../images/Onboarding/red_purple_cubes.svg";
//atoms
import Row from "../../../components/atoms/row/row";
import Col from "../../../components/atoms/col/col";
import Text from "../../../components/atoms/text/text";
import Image from "../../../components/atoms/image/image";

const CreateAccount = props => {
  //routes
  const routeToHome = e => {
    e.preventDefault();
    props.history.push("/");
  };

  const routeToLogin = e => {
    e.preventDefault();
    props.history.push("/login");
  };

  const routeToEmailSignUp = e => {
    e.preventDefault();
    props.history.push("/emailsignup");
  };

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
    console.log(userObject);
    localStorage.setItem("token", userObject.token);
    {
      userObject.newUser
        ? props.history.push("/firstlogin")
        : props.history.push("/dashboard");
    }
  };

  //render
  return (
      <OnBoardContainer>
        <TopHolder>
          <ButtonNoColor className="arrow" onClick={routeToHome}>
            &lt;
          </ButtonNoColor>
          <ButtonNoColor onClick={routeToLogin}>Log In</ButtonNoColor>
        </TopHolder>
        <HeaderHolder>
          <Header>
            Create <br /> Account.
          </Header>
          <Cubes src={cubes} />
        </HeaderHolder>
        <FlexHolder>
          <FBButton name="facebookAuth" onClick={auth}>
            Sign up with Facebook{" "}
            <Image src={fblogo} height={2} width={2} borderRadius={100} />{" "}
          </FBButton>
          <GoogleSignIn name="googleAuth" onClick={auth}>
            Sign up with Google{" "}
            <Image
              src={googlelogo}
              alt={"google image"}
              height={2}
              width={2}
              borderRadius={100}
            />
          </GoogleSignIn>
        </FlexHolder>
        <Row width={97} height={1} padding={"12% 0"}>
          <Col width={30} marginLeft={-2}>
            <Text fontSize={"1.6rem"} color={"#CFCDFF"} text={colText}></Text>
          </Col>
          <Col
            width={70}
            borderBottom={"1px solid white"}
            height={1}
            marginTop={1}
            marginBottom={3}
            marginLeft={-6}
          ></Col>
        </Row>
        <FlexHolder>
          <Button onClick={routeToEmailSignUp}>
            Sign up with Email <Image src={emailogo} height={2} width={2} />
          </Button>
        </FlexHolder>
      </OnBoardContainer>
  );
};

// STYLED COMPONENTS
// const OnBoardWrapper = styled.div`
//   display: flex;
//   width: 100vw;
//   height: 100vh;
//   max-height: 100vh;
//   background-color: #4742bc;
//   background-image: url(${waves});
//   overflow-x: hidden;
// `;

const OnBoardContainer = styled.div`
  font-family: "Catamaran", sans-serif;
  display:flex;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  background-color: #4742bc;
  background-image: url(${waves});
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
`;
const HeaderHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-content: center;
  margin-top: 10%;
`;

const OnboardTxt = styled.p`
  margin: auto;
  font-size: 2rem;
  line-height: 33px;
  letter-spacing: 0.035em;
  color: #ccc9ff;
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

  .arrow {
    font-size: calc(110% + 3vw);
  }
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
}
`;

const FBButton = styled.a`
display: flex;
justify-content: space-around;
border-radius: 0.5rem;
padding: 1.5rem 0;
width: 84%;
text-align: center;
margin: 16% auto 2%;
background: #4A639E;
color: white;
font-size: calc(110% + 0.5vw);
letter-spacing: 0.1rem;

`;

const GoogleSignIn = styled.a`
display: flex;
justify-content: space-around;
  border-radius: 0.5rem;
  padding: 1.5rem 0.8rem;
  width:84%;
  text-align:center;
  margin: 5% auto;
  background: #6997F2;
  color: white;
  font-size: calc(110% + 0.5vw);
  letter-spacing:0.1rem;
`;

const ButtonNoColor = styled.a`
  font-size: calc(110% + 0.5vw);
  font-style: medium;
  color: #ccc9ff;
`;
const Cubes = styled.img`
  max-width: 39%;
  width: 100%;
  height: auto;
  margin: auto;
  padding-top: 3rem;
`;

const Logo = styled.img``;

const GoogleLogo = styled(Logo)`
  border-radius: 50%;
`;

//EXPORT
export default CreateAccount;