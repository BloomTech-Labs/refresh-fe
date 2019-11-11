import React,{useState} from 'react';
import styled from 'styled-components';
import fblogo from '../../images/facebook-icon.png';
import googlelogo from '../../images/flat-color-icons_google.png';
import emailogo from '../../images/email.png';
const CreateAccount = (props) => {
    const [user,setUser] = useState()
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
        localStorage.setItem('token', userObject.token);
        props.history.push('/dashboard');
      };
      user && console.log('Logged in as:',user)

    return(
        <OnBoardWrapper>
            <OnBoardContainer>
                <FlexHolder>
                <ButtonNoColor>&lt;</ButtonNoColor>
                <ButtonNoColor>Log In</ButtonNoColor>
                </FlexHolder>
                <Header>Create <br /> Account</Header>
                <FlexHolder>
                <FBButton name="facebookAuth" onClick={auth}>Sign up with Facebook <img src={fblogo} /> </FBButton>
                <Button name="googleAuth" onClick={auth}>Sign up with Google <img src={googlelogo} /></Button>
                </FlexHolder>
                <OnboardTxt>OR</OnboardTxt>
                <FlexHolder>
                <Button>Sign up with Email <img src={emailogo} /></Button>
                </FlexHolder>
            </OnBoardContainer>
        </OnBoardWrapper>
    );
}

const OnBoardWrapper = styled.div`
background-color: #3a3699;
width: 100vw;
height:100vh;
max-height:100vh;
`
const OnBoardContainer = styled.div`
display:flex;
flex-direction:column;
align-items:flex-start;
font-family: 'Catamaran', sans-serif;
margin:auto;
line-height:1.5;
background-color: #3a3699;
color: #7f7cca;
`

const Header = styled.h1`
font-weight: bold;
font-size: 5rem;
line-height: 82px;
letter-spacing: 3.5px;
color: #FFFFFF;
`
const OnboardTxt = styled.p`
font-size: 2rem;
line-height: 33px;
letter-spacing: 0.035em;
color: #CCC9FF;
`
const FlexHolder = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin:auto;
align-items: flex-start;
width:100%;
padding: 2.5rem 4rem;
`

const Button = styled.a`
  display: inline-block;
  border-radius: 0.5rem;
  padding: 1.5rem 0.8rem;
  width:100%;
  text-align:center;
  margin: auto;
  background: #6487ff;
  color: white;
  font-size:1.6rem;
}
`
const FBButton = styled.a`
  display: inline-block;
  border-radius: 0.5rem;
  padding: 1.5rem 0.8rem;
  width:100%;
  text-align:center;
  margin: auto;
  background: #4A639E;
  color: white;
  font-size:1.6rem;
}
`

const ButtonNoColor = styled.a`
    margin:auto;
    font-size:1.6rem;
`

export default CreateAccount;