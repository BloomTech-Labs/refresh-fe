//Sign in Canvas
import React from "react";
import styled from "styled-components";
import googlelogo from "../../images/google-icon.jpg";
import Image from "../../components/atoms/image/image";


const GoogleSignInButton = () => {
  console.log("googleCalled");
  //Auth and Auth Success can be thought of like Fire and Air
  const auth = () => {
    window.open(
      "https://apidevnow.com/googleAuth",
      "Sign In With googlehub ;)",
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

  return <Button onClick={auth}>Sign up with Google <Image src={googlelogo} alt={"google image"} height={2} width={2}  /></Button>;
};

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
letter-spacing:0.1rem;`


export default GoogleSignInButton;

