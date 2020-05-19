import React, { useState } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { deleteTeam } from "../actions/actions";
import {
  ButtonContainer,
  CenterContainer,
  Words,
  ButtonStyle1,
  ButtonStyle2,
} from "../styled-components/delete-button-styles";

import "boxicons";

Modal.setAppElement("#root");

const DeleteTeamButton = (props) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

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
      webkitBoxShadow: "10px 10px",
      outline: "none",
      padding: "20px",
      borderRadius: "0px",
      border: "2px solid black",
    },
    body: {
      font: "20px",
    },
  };

  const handleDelete = (id) => {
    setModalIsOpen(false);
    props.deleteTeam(props.id);
    setTimeout(() => {
      props.makeRender(!props.render);
    }, 100);
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
        <box-icon name="x" color="#000000" size="lg"></box-icon>
      </div>

      <Modal
        className="Modal"
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        style={modalStyle}
      >
        <CenterContainer>
          <Words>
            Are you sure you want to
            <br /> delete this team?
          </Words>
          <ButtonContainer>
            <ButtonStyle1 onClick={handleDelete}>
              <p>Yes</p>
            </ButtonStyle1>
            <ButtonStyle2
              onClick={() => {
                setModalIsOpen(false);
              }}
            >
              <p>No</p>
            </ButtonStyle2>
          </ButtonContainer>
        </CenterContainer>
      </Modal>
    </div>
  );
};

const mapStatetoProps = (state) => {
  return {
    teams: state.team,
  };
};

export default connect(mapStatetoProps, { deleteTeam })(DeleteTeamButton);
