import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { editTeamName } from '../actions/actions';
import { SearchBox, ButtonStyle1, ButtonStyle2, Words, CenterContainer, ButtonContainer, StyledInput } from '../styled-components/edit-button-styles';

Modal.setAppElement('#root')

function EditTeam(props) {
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
            top: '35%',
            right: '35%',
            left: '35%',
            bottom: '35%',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            outline: 'none',
            padding: '20px',
            webkitBoxShadow: '10px 10px',
            borderRadius: '0px'
        },
        body: {
            font: '20px'
        }
    }

    const [teamName, setTeamName, match] = useState({
        name: ''
    });
    const [updateTeam, setUpdateTeam] = useState({})
    const [modalIsOpen, setModalIsOpen] = useState(false);


    const handleSubmit = (event) => {
        event.preventDefault();
        setModalIsOpen(false); 
            props.editTeamName(props.id, teamName)
            setTimeout(() => {props.makeRender(!props.render)}, 150)
    }

    const handleChange = event => {
        setTeamName({name: event.target.value})
    }

    return (
        <div>
            <i className="fas fa-pencil-alt fa-2x" onClick={() => setModalIsOpen(true)}> </i>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                style={modalStyle}
            >
                <CenterContainer>
                    <Words>Edit the team name</Words>
                    <SearchBox>
                        <form onSubmit={handleSubmit}>
                            <StyledInput
                                id="team"
                                type="text"
                                name="name"
                                placeholder="Team Name"
                                value={updateTeam.name}
                                onChange={handleChange}
                            />
                        </form>
                    </SearchBox>
                    <ButtonContainer>
                        <ButtonStyle1 onClick={handleSubmit} ><p>Confirm</p></ButtonStyle1>
                        

                        <ButtonStyle2 onClick={() => setModalIsOpen(false)}><p>Cancel</p></ButtonStyle2>
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
    { editTeamName }
)(EditTeam);