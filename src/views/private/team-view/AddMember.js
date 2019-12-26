//IMPORTS
//react
import React, { useState, useEffect } from "react";
//styled-components
import styled from "styled-components";
//axios with auth
import { axiosWithAuth } from "../../helpers/axiosWithAuth";
//images
import waves from "../../../images/Onboarding/waves.svg";
//atoms
import LoadingSpinner from "../../components/atoms/spinner/spinner";

const AddMember = props => {
  //hooks
  const [member, setMember] = useState({
    email: ""
  });
  const [emailList, setEmailList] = useState([]);
  const [icon, setIcon] = useState();

  const routeToTLView = e => {
    e.preventDefault();
    props.history.push("/team-view");
  };

  useEffect(() => {
    axiosWithAuth()
      .get("/icons")
      .then(res => {
        console.log("icons:", res.data);
        setIcon(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const handleSpaceBar = e => {
    if (e.keyCode === 32) {
      setEmailList([...emailList, member]);
      setMember({
        email: ""
      });
    }
  };

  //handle change for email input
  const handleChange = e => {
    setMember({
      [e.target.name]: e.target.value
    });
  };

  const addEmail = e => {
    e.preventDefault();
    setEmailList([...emailList, member]);
    setMember({
      email: ""
    });
  };

  //handle submit of user info to backend
  const handleSubmit = e => {
    e.preventDefault();
    console.log(member, emailList);

    //   axiosWithAuth()
    //     .post("/teammemberlist", { emailList})
    //     .then(res => {
    //      console.log(res)
    //       })
    //     .catch(err => {
    //       console.log(err);
    //     });
  };

  //render
  return icon ? (
    <TVContainer>
      <ButtonNoColor onClick={routeToTLView}>&lt;</ButtonNoColor>
      <Header>Invite Teammates</Header>
      <Form onSubmit={addEmail}>
        <FormHeader>Add By Email</FormHeader>
        <InputDiv onKeyDown={handleSpaceBar}>
          <i className={icon[616].icon} onClick={addEmail} />
          <Input
            type="text"
            name="email"
            placeholder="Enter email addresses"
            onChange={handleChange}
            value={member.email}
            width={100}
            border={"1px solid #3D3B91"}
            backgroundColor={"#3D3B91"}
            color={"#E6E6E6"}
          />
        </InputDiv>
        <FormTxt>Space to enter multiple email addresses</FormTxt>
        <EmailListDrop>
          {emailList &&
            emailList.map((info, i) => (
              <EmailButton key={i}>
                <i className={icon[836].icon} />
                <p>{info.email}</p>
                <i className={icon[793].icon} />
              </EmailButton>
            ))}
        </EmailListDrop>
        {emailList.length > 0 && (
          <Button onClick={handleSubmit}>Send Invitations</Button>
        )}
      </Form>
    </TVContainer>
  ) : (
    <TVContainer>
      <LoadingSpinner />
    </TVContainer>
  );
};

// STYLED COMPONENTS
const TVContainer = styled.div`
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
  &:nth-child(*) {
    background-color: green;
    margin-bottom: 5%;
  }
`;

const Header = styled.h1`
  margin-right: 3rem;
  font-weight: bold;
  font-size: calc(110% + 2vw);
  line-height: 6.6rem;
  letter-spacing: 3.5px;
  color: #ffffff;
`;

const FormTxt = styled.p`
  font-weight: 500;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.035em;
  color: #b8b7e1;
`;

const FormHeader = styled.p`
  font-size: calc(100% + 0.1vw);
  font-weight: bold;
  text-transform: uppercase;
  line-height: 2.6rem;
  letter-spacing: 2px;
  color: #b8b7e1;
`;

const Logo = styled.img`
  height: calc(100vh / 3.5);
  width: 100%;
  max-width: 100%;
  margin: auto;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 89%;
  input {
    font-size: calc(100% + 0.2vw);
    ::-webkit-input-placeholder {
      font-family: "Catamaran", sans-serif;
      color: #a6a6a6;
    }
  }

  .disabledColor {
    opacity: 30%;
  }
`;
const InputDiv = styled.div`
  display: flex;
  border: 1px solid #3d3b91;
  margin: 3% 0;
  padding: 5%;
  width: 100%;
  border-radius: 3px;
  box-shadow: 1px 1px 1px 1px #35347f;
  background: #3d3b91;
  color: #ffffff;
  i {
    padding-top: 2%;
    margin-right: 2%;
    font-weight: lighter;
    font-size: calc(81%);
  }
`;
const Input = styled.input`
  border: 1px solid #3d3b91;
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

const EmailListDrop = styled.div`
  display: flex;
  flex-direction: column;
`;

const EmailButton = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
  background: #5e5cbc;
  color: #ffffff;
  font-size: calc(100% + 0.2vw);
  height: calc(100vh / 18);
  p{
      width:90%;
  }
  .fa-user-circle{
      margin-left:2%
      margin-right:2%;
      color:#3d3b91;

  }
  .fa-times {
      color: #ff4d4d;
      font-weight: normal;
    font-size: calc(100% + 1vw);
    width: 10%;
  }
`;

const ButtonNoColor = styled.a`
  margin-right: 89%;
  font-size: 2rem;
  font-style: medium;
  color: #ccc9ff;
`;

//EXPORT
export default AddMember;
