import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { editTeamName } from "../actions/actions";
import styled from 'styled-components';
// import {
//   SearchBox,
//   ButtonStyle1,
//   ButtonStyle2,
//   Words,
//   CenterContainer,
//   ButtonContainer,
//   StyledInput,
// } from "../styled-components/edit-button-styles";

const ButtonContainer = styled.div`
display: flex;
width: 75%;
justify-content: space-evenly;
`
const CenterContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
width: 100%;
height: 100%;
`
const Words = styled.div`
font-size: 45px;
font-weight: 500;
color: black;
font-family: "gopher",sans-serif;
letter-spacing: 3px;
`
const ButtonStyle1 = styled.div`
text-align: center;
color: white;
background: #515257;
padding: 10px 20px;

:hover {
    cursor: pointer;
    opacity: 50%;
}
p {
    text-align: center;
    margin: auto;
    font-size: 25px ;
    font-family: "gopher",sans-serif;
    font-weight: 700;
    letter-spacing: 5px;
}
`
const ButtonStyle2 = styled.div`
text-align: center;
color: white;
background: black;
padding: 10px 20px;

:hover {
    cursor: pointer;
    opacity: 50%; 
}
p {
    text-align: center;
    margin: auto;
    font-size: 25px ;
    font-family: "gopher",sans-serif;
    font-weight: 700;
    letter-spacing: 5px;
}
`
const SearchBox = styled.div`
margin-bottom: 20px;
font-style: normal;
font-weight: normal;
width: 75%;
font-size: 40px;
line-height: 47px;
color: #3B444B;
font-family: "gopher",sans-serif;
`

const StyledInput = styled.input`
    text-align: center;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    margin-top: 2%;
    font-family: "gopher",sans-serif;
    border: solid black 3px;
    padding: 5px 20px;
    width: 100%;
`

Modal.setAppElement("#root");

function EditTeam(props) {
  const modalStyle = {
    overlay: {
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(128, 128, 128, 0.75)",
    },
    content: {
      position: "fixed",
      left: "0",
      top: "35%",
      right: "35%",
      left: "35%",
      bottom: "35%",
      background: "#fff",
      overflow: "auto",
      WebkitOverflowScrolling: "touch",
      outline: "none",
      padding: "20px",
      webkitBoxShadow: "10px 10px",
      borderRadius: "0px",
      border: "2px solid black",
    },
    body: {
      font: "20px",
    },
  };

  const [teamName, setTeamName, match] = useState({
    name: "",
  });
  const [updateTeam, setUpdateTeam] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleSubmit = () => {
    setModalIsOpen(false);
    props.editTeamName(props.id, teamName);
    setTimeout(() => {
      props.makeRender(!props.render);
    }, 150);
  };

  const handleChange = (event) => {
    event.stopPropagation();
    setTeamName({ name: event.target.value });
  };

  return (
    <div
      onClick={(e) => {
        e.stopPropagation();
      }}
    >
      <div
        onClick={() => {
          setModalIsOpen(true);
        }}
        style={{ padding: "12px" }}
      >
        <box-icon
          name="pencil"
          type="solid"
          color="#000000"
          size="lg"
        ></box-icon>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
        style={modalStyle}
      >
        <CenterContainer>
          <Words>Change Team Name</Words>
          <SearchBox>
            <form onSubmit={handleSubmit}>
              <StyledInput
                id="team"
                type="text"
                name="name"
                placeholder="Enter New Name"
                value={updateTeam.name}
                onChange={handleChange}
              />
            </form>
          </SearchBox>
          <ButtonContainer>
            <ButtonStyle1 onClick={handleSubmit}>
              <p>Confirm</p>
            </ButtonStyle1>

            <ButtonStyle2
              onClick={() => {
                setModalIsOpen(false);
              }}
            >
              <p>Cancel</p>
            </ButtonStyle2>
          </ButtonContainer>
        </CenterContainer>
      </Modal>
    </div>
  );
}

const mapStatetoProps = (state) => {
  return {
    teams: state.team,
  };
};

export default connect(mapStatetoProps, { editTeamName })(EditTeam);
