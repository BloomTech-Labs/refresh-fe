import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { createNewTeam } from '../actions/actions';

import styled from 'styled-components';

const ButtonContainer = styled.div`
display: flex;
width: 75%;
justify-content: space-evenly;
margin-bottom: 20px;
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
margin-bottom: 20px;
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

font-style: normal;
font-weight: normal;
width: 75%;
font-size: 40px;
line-height: 47px;
color: #3B444B;
font-family: "gopher",sans-serif;
margin-bottom: 40px;
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


Modal.setAppElement('#root')

function AddTeam(props) {

    const [teamName, setTeamName] = useState({
        name: ''
    });

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
            top: '35%',
            right: '35%',
            left: '35%',
            bottom: '35%',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            outline: 'none',
            padding: '20px',
            borderRadius:'0px',
            webkitBoxShadow: '10px 10px',
            border:'2px solid black'
        },
        body: {
            font: '20px'
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        setModalIsOpen(false);
        props.createNewTeam(teamName)
        setTimeout(() => { props.makeRender(!props.render) }, 0)
    }

    const handleChange = e => {
        setTeamName({
            ...teamName,
            [e.target.name]: e.target.value
        });
    };



    return (
        <div>
            <i className="add-team-button" onClick={() => setModalIsOpen(true)}>+ Add Team</i>
            <Modal  isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                style={modalStyle}
            >
                <CenterContainer className="add-team-modal">
                    <Words className='add-team-title'>Add Team</Words>
                    <SearchBox className='add-team-input'>
                        <form onSubmit={handleSubmit}>
                            <StyledInput
                                id="team"
                                type="text"
                                name="name"
                                placeholder="Enter Team Name"
                                value={teamName.name}
                                onChange={handleChange}
                            />
                        </form>
                    </SearchBox>
                    <ButtonContainer className='add-team-button-section'>
                        <ButtonStyle1 className='add-team-submit' onClick={handleSubmit}  ><p>Confirm</p></ButtonStyle1>
                        {/* <button onSubmit={handleSubmit}>Confirm</button> */}

                        <ButtonStyle2 className='add-team-cancel' onClick={() => setModalIsOpen(false)}><p>Cancel</p></ButtonStyle2>
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
    { createNewTeam }
)(AddTeam);

// text above
//add form for team name
//button to accept (with redux will add to the component)

