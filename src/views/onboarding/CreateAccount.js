import React from "react";
import styled from "styled-components";
import fblogo from "../../images/facebook-icon.png";
import googlelogo from "../../images/flat-color-icons_google.png";
import emailogo from "../../images/email.png";
import cubes from "../../images/two_cubes.png";
import GoogleSignIn from "./GoogleSignInButton";

const CreateAccount = props => {
  const routeToHome = e => {
    e.preventDefault();
    props.history.push("/");
  };

  const routeToLogin = e => {
    e.preventDefault();
    props.history.push("/login");
  };

  const fbAuth = () => {
    window.open(
      "https://apidevnow.com/facebookAuth",
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
    console.log(JSON.parse(userObject));
  };

  return (
    <OnBoardWrapper>
      <OnBoardContainer>
        <TopHolder>
          <ButtonNoColor onClick={routeToHome}>&lt;</ButtonNoColor>
          <ButtonNoColor onClick={routeToLogin}>Log In</ButtonNoColor>
        </TopHolder>
        <HeaderHolder>
          <Header>
            Create <br /> Account.
          </Header>
          <Cubes src={cubes} />
        </HeaderHolder>
        <FlexHolder>
          <FBButton onClick={fbAuth}>
            Sign up with Facebook <Logo src={fblogo} />{" "}
          </FBButton>
          <GoogleSignIn>
            Sign up with Google <Logo src={googlelogo} />
          </GoogleSignIn>
        </FlexHolder>
        <OnboardTxt>-------------------- OR ----------------</OnboardTxt>
        <FlexHolder>
          <Button>
            Sign up with Email <Logo src={emailogo} />
          </Button>
        </FlexHolder>
      </OnBoardContainer>
    </OnBoardWrapper>
  );
};

const OnBoardWrapper = styled.div`
  background-color: #3a3699;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
`;
const OnBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  font-family: "Catamaran", sans-serif;
  margin: auto;
  line-height: 1.5;
  background-color: #3a3699;
  color: #7f7cca;
`;

const Header = styled.h1`
  font-weight: bold;
  font-size: 5rem;
  line-height: 82px;
  letter-spacing: 3.5px;
  color: #ffffff;
`;
const HeaderHolder = styled.div`
  display: flex;
  margin: auto 4rem;
  padding-right: 5rem;
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
  padding: 2.5rem 4rem;
`;

const TopHolder = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto;
  padding: 2.5rem 0;
  align-items: flex-start;
  width: 100%;
`;

const Button = styled.a`
  display: flex;
  justify-content: space-evenly;
  border-radius: 0.5rem;
  padding: 1.5rem 0.8rem;
  width:100%;
  text-align:center;
  margin: auto;
  background: #6487ff;
  color: white;
  font-size:1.6rem;
  letter-spacing:0.1rem;
}
`;
const FBButton = styled.a`
display: flex;
justify-content: space-evenly;
  border-radius: 0.5rem;
  padding: 1.5rem 0.8rem;
  width:100%;
  text-align:center;
  margin: 2rem auto;
  background: #4A639E;
  color: white;
  font-size:1.6rem;
  letter-spacing:0.1rem;
}
`;

const ButtonNoColor = styled.a`
  margin: auto 4rem;
  font-size: 1.6rem;
  font-style: medium;
  color: #ccc9ff;
`;
const Cubes = styled.img`
  width: 100%;
  max-width: 50%;
  height: auto;
  margin: auto;
  padding-top: 5rem;
`;

const Logo = styled.img``;

export default CreateAccount;
