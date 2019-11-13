import React from "react";
import styled from "styled-components";
import fblogo from "../../images/facebook-logo.png";
import emailogo from "../../images/Onboarding/email.png";
import cubes from "../../images/two_cubes.png";
import Row  from '../../components/atoms/row/row';
import Col from '../../components/atoms/col/col';
import googlelogo from "../../images/google-icon.jpg";
import Image from "../../components/atoms/image/image";

const Login = (props) => {
    const routeToHome = e => {
        e.preventDefault();
        props.history.push("/");
      };
    
      const routeToLogin = e => {
        e.preventDefault();
        props.history.push("/login");
      };
      
    const auth = (e) => {
        //Open Popup and declare Size
        window.open(
          `https://apidevnow.com/${e.target.name}`,
          "Sign In With Facebook ;)",
          "width=400,height=500"
        );
        window.addEventListener("message", response => {
          authSuccess(response.data); // e.data hold the message
        },false);
      };

      const authSuccess = userObject => {
        userObject = JSON.parse(userObject)
        console.log(userObject)
        localStorage.setItem('token', userObject.token);
        {userObject.newUser ? props.history.push('/firstlogin') : props.history.push('/dashboard'); }
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
                Welcome <br /> Back.
              </Header>
              <Cubes src={cubes} />
            </HeaderHolder>
            <FlexHolder>
              <FBButton name="facebookAuth" onClick={auth}>
                Login with Facebook <Image src={fblogo} height={2} width={2} borderRadius={100} />{" "}
              </FBButton>
              <GoogleSignIn name="googleAuth" onClick={auth}>
              Login with Google <Image src={googlelogo} alt={"google image"} height={2} width={2} borderRadius={100}  />
            </GoogleSignIn>
            </FlexHolder>
            <Row>
            <OnboardTxt>
            <Col width={50}>OR</Col>
            <Col width={50}><LineTime/></Col>
            </OnboardTxt>
            </Row>
            <FlexHolder>
              <Button>
                Login with Email <Image src={emailogo} height={2} width={2} />
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

const LineTime = styled.hr`
width:100%;
`

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

const GoogleSignIn = styled.a`
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

const Logo = styled.img`
`;

const GoogleLogo = styled(Logo)`
border-radius:50%;
`;

export default Login;
