import React, { useState } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { deleteTeam } from '../actions/actions';
import { ButtonContainer, CenterContainer, Words, ButtonStyle1, ButtonStyle2 } from '../styled-components/delete-button-styles';

Modal.setAppElement('#root')

const DeleteButton = props => {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    
    const modalStyle = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(128, 128, 128, 0.75)'
        },
        content: {
            position: 'fixed',
            left: '0',
            top: '25%',
            right: '25%',
            left: '25%',
            bottom: '25%',  
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '10px',
            outline: 'none',
            padding: '20px'
        },
        body: {
            font: '20px'
        }
    }

    const handleDelete = id => {
        setModalIsOpen(false);
        props.deleteTeam(props.id)
        setTimeout(() => {props.makeRender(!props.render)} , 100)
    }
    
    return (
        <div>
            <i class="fas fa-times fa-2x" onClick={() => setModalIsOpen(true)}></i>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} 
                style={modalStyle}
                >
                <CenterContainer>
                <Words>Are you sure you want to delete this team?</Words>
                <ButtonContainer>
                <ButtonStyle1 onClick={handleDelete}>
                <p>Yes</p>
                </ButtonStyle1>
                <ButtonStyle2 onClick={() => setModalIsOpen(false)}>
                <p>No</p>
                </ButtonStyle2>
                </ButtonContainer>
                </CenterContainer>
            </Modal>
        </div>
    );
}


const mapStatetoProps = state => {
    return {
        teams: state.team
    }
}

export default connect(
mapStatetoProps,
{deleteTeam}
)(DeleteButton);