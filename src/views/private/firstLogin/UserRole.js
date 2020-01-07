//IMPORTS
//react
import React, { useState, useEffect } from "react";
//axios with auth
import { axiosWithAuth } from "../../../helpers/axiosWithAuth";
//styled components
import styled from "styled-components";
//images
import waves from "../../../images/Onboarding/waves.svg";

const UserRole = props => {
  const [userRoles, setUserRoles] = useState([]);
  const [selectedRole, setSelectedRole] = useState();

  useEffect(() => {
    axiosWithAuth()
      .get("/roles")
      .then(res => setUserRoles(res.data.user_roles))
      .catch(err => console.log(err));
  }, []);

const handleSubmit = e =>{
    console.log(selectedRole)
    e.preventDefault(); 
       return axiosWithAuth()
        .post("/roles/userroles", {role_id: selectedRole})
        .then(res => {console.log(res)})
        .catch(err => {console.log(err)});
    props.history.push(`questions`)
    
}

  return (
    <OnBoardContainer>
        <QuestionForm onSubmit={handleSubmit} >
      <Question>What best describes your role on the team?</Question>
      <RolesHolder>
        {userRoles.map(roles => {
          const { role, id } = roles;
          return (
            <Option onClick={() => setSelectedRole(id)} key={id}>
              <label htmlFor={`option${id}`}>
                {role}
                <input
                  type="radio"
                  name="userRoles"
                  value={id}
                  id={`option${id}`}
                />
                <div className="check"></div>
              </label>
            </Option>
          );
        })}
      </RolesHolder>
      <Button
        onClick={handleSubmit}
      >
        Continue
      </Button>
      </QuestionForm>
    </OnBoardContainer>
  );
};

//STYLED COMPONENTS
const OnBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  font-family: "Catamaran", sans-serif;
  margin: auto;
  background-color: #4742bc;
  background-image: url(${waves});
  color: #7f7cca;
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
`;

const QuestionForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-height: 100vh
  &:nth-child(*) {
    margin: auto;
  }
`;
const Question = styled.h1`
  font-weight: 600;
  font-size: calc(100% + 5.5vw);
  height: calc(100vh / 6);
  letter-spacing: 3.5px;
  text-align: center;
  color: #ffffff;
`;

const RolesHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: auto;
`;

const Option = styled.a`
  display: flex;
  font-size: 2.5rem;
  line-height: 41px;
  letter-spacing: 2px;
  margin-bottom: calc(100vh / 50);
  color: #e6e6e6;
  cursor: pointer;
  input {
    position: absolute;
    visibility: hidden;
  }
  label {
    display: flex;
    flex-direction:row-reverse;
    position: relative;
    font-size: calc(100% + 0.1vw);
    padding-left: 4rem;
    cursor: pointer;
    -webkit-transition: all 0.25s linear;
    &:hover,
    &:focus,
    &:active {
      color: #e05cb3;
    }
  }
  .check {
    display: flex;
    position: relative;
    border: 5px solid #e05cb3;
    border-radius: 100%;
    height: 40px;
    width: 40px;
    margin-right: 2rem;
    transition: border 0.25s linear;
    -webkit-transition: border 0.25s linear;
  }
  .check::before {
    position: relative;
    content: "";
    border-radius: 100%;
    height: 20px;
    width: 20px;
    margin: auto;
    transition: background 0.25s linear;
    -webkit-transition: background 0.25s linear;
  }
  input[type="radio"]:checked ~ .check {
    border: 5px solid #e05cb3;
  }
  input[type="radio"]:checked ~ .check::before {
    background: #e05cb3;
  }
  input[type="radio"]:checked ~ label {
    color: #e05cb3;
  }
`;

const Button = styled.a`
  display: flex;
  justify-content: space-evenly;
  border-radius: 0.5rem;
  padding: 1.5rem 0.8rem;
  width: 65%;
  text-align: center;
  margin: 8% auto;
  background: #e05cb3;
  color: white;
  font-size: calc(100% + 0.5vw);
  letter-spacing: 0.1rem;
`;

export default UserRole;
