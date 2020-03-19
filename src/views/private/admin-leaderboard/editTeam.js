import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { editTeamName } from '../actions/actions';

import styled from 'styled-components';

const ButtonContainer = styled.div`
position: absolute: 
left: 50%;
margin: 5%;
display: flex;
justify-content: center;
`
const CenterContainer = styled.div`
position: absolute;
left: 0;
top: 25%;
width: 100%;
text-align: center;
font-size: 18px;
`
const Words = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 40px;
line-height: 47px;
color: #3B444B;
`
const ButtonStyle1 = styled.div`
width: 125px;
height: 75px;
display: flex;
text-align: center;
color: white;
background: #F0372B;
border-radius: 4px;
font-size: 28px;
font-margin-top: 16px;
margin-right: 5%;
:hover {
    cursor: pointer;
    opacity: 50%;
}
p {
    text-align: center;
    margin: auto;
    font-family: Roboto;
}
`
const ButtonStyle2 = styled.div`
width: 125px;
height: 75px;
display: flex;
text-align: center;
color: white;
background: #515257;
border-radius: 4px;
font-size: 28px;
font-margin-top: 16px;
:hover {
    cursor: pointer;
    opacity: 50%; 
}
p {
    text-align: center;
    margin: auto;
    font-family: Roboto;
}
`
const SearchBox = styled.div`
font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 40px;
line-height: 47px;
color: #3B444B;
`



Modal.setAppElement('#root')

function EditTeam(props) {
    console.log(props)


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

    const [teamName, setTeamName, match] = useState({
        name: ''
    });

    const [updateTeam, setUpdateTeam] = useState({})

    const [modalIsOpen, setModalIsOpen] = useState(false);


    // const handleUpdate = (event, changes) => {
    //     event.preventDefault();
    //     const payload = {
    //         name: changes.name
    //     }
    //     editTeamName(match.params.id,payload)
    // }


    const handleSubmit = (event) => {
        event.preventDefault();
        setModalIsOpen(false); 
            props.editTeamName(props.id, teamName)
            setTimeout(() => {props.makeRender(!props.render)}, 100)
    } 

    // const onChange = event => {
    //     setEditTeamName({ team: event.target.value })
    //     console.log('editProfile team', editUserTeam)
    // }

    const handleChange = event => {
        setTeamName({name: event.target.value})
    }


    return (
        <div>
            <i class="fas fa-pencil-alt fa-2x" onClick={() => setModalIsOpen(true)}> </i>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                style={modalStyle}
            >
                <CenterContainer>
                    <Words>Edit the team name</Words>
                    <SearchBox>
                        <form onSubmit={handleSubmit}>
                            <input
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