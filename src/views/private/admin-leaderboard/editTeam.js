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

export const ButtonContainer = styled.div`
margin: 5%;
display: flex;
justify-content: center;
`
export const CenterContainer = styled.div`
position: absolute;
left: 0;
top: 25%;
width: 100%;
text-align: center;
font-size: 18px;
`
export const Words = styled.div`
font-family: "gopher",sans-serif;
font-style: normal;
font-weight: normal;
font-size: 40px;
line-height: 47px;
color: #3B444B;
`
export const ButtonStyle1 = styled.div`
width: 4vw;
height: 3.5vh;
display: flex;
text-align: center;
color: white;
background: black;

font-size: 2rem;
margin-right: 5%;
:hover {
    cursor: pointer;
    opacity: 50%;
}
p {
    text-align: center;
    margin: auto;
    font-family: "gopher",sans-serif;
}
`
export const ButtonStyle2 = styled.div`
width: 4vw;
height: 3.5vh;
display: flex;
text-align: center;
color: white;
background: #515257;

font-size: 2rem;
:hover {
    cursor: pointer;
    opacity: 50%; 
}
p {
    text-align: center;
    margin: auto;
     font-family: "gopher",sans-serif;
}
`
export const SearchBox = styled.div`
 font-family: "gopher",sans-serif;
font-style: normal;
font-weight: normal;
font-size: 40px;
line-height: 47px;
color: #3B444B;
`
export const StyledInput = styled.input`
    text-align: center;
     font-family: "gopher",sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    margin-top: 2%;
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
      <i
        className="fas fa-pencil-alt fa-2x"
        onClick={() => {
          setModalIsOpen(true);
        }}
      >
        {" "}
      </i>
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
