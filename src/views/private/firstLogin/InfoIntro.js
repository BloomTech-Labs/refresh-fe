//IMPORTS
//react
import React, { useState } from "react";
// styled components
import styled from "styled-components";
//images
import waves from "../../../images/Onboarding/waves.svg";
import slogan from "../../../images/Onboarding/need_to_know_more.svg";

const InfoIntro = props => {
  console.log(props)
  const {url} = props.match
  //hooks
  const [consent, setConsent] = useState(false);

  //route
  const routeToRoles = e => {
    e.preventDefault();
    props.history.push(`${url}/userrole`)
  }

return(
  <OnBoardContainer>
  <Logo src={slogan} />
  <Button onClick={routeToRoles}>Continue</Button>
</OnBoardContainer>
)
};

// STYLED COMPONENTS
//Onboarding Reusable Styles

const OnBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  font-family: "Catamaran", sans-serif;
  line-height: 1.5;
  color: #7f7cca;
  background-color: #4742bc;
  background-image: url(${waves});
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
`;

const Button = styled.a`
  display: inline-block;
  border-radius: 0.5rem;
  padding: 1.5rem 0.8rem;
  width: 70%;
  text-align: center;
  margin: auto;
  background: #e05cb3;
  color: white;
  font-size: 1.6rem;
`;

const Logo = styled.img`
  width: 85%;
  max-width: 100%;
  height: calc(100vh / 2);
  margin: auto;
`;

// const FlexHolder = styled.div`
//   display: flex;
//   flex-direction: column;
//   justify-content: space-around;
//   margin: auto;
//   align-items: flex-start;
//   width: 100%;
//   padding: 2.5rem 4rem;
// `;
export default InfoIntro;
