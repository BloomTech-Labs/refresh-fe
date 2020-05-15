import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { createNewTeam } from '../actions/actions';

import styled from 'styled-components';

const ButtonContainer = styled.div`
margin: 2%;
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
font-family: "gopher",sans-serif;
`
const ButtonStyle1 = styled.div`
width: 4vw;
height: 3.5vh;
display: flex;
text-align: center;
color:white;
background: black;
font-size: 2rem;
font-family: "gopher",sans-serif;
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
width: 4vw;
height: 3.5vh;
display: flex;
text-align: center;
color: white;
background: #515257;
border-radius: 4px;
font-size: 2rem;
font-family: "gopher",sans-serif;
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

font-style: normal;
font-weight: normal;
font-size: 40px;
line-height: 47px;
color: #3B444B;
margin-bottom: 2.5vh;
font-family: "gopher",sans-serif;
`

const StyledInput = styled.input`
    text-align: center;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    margin-top: 2%;
    font-family: "gopher",sans-serif;
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
            <i className="fas fa-plus fa-lg plusButton" onClick={() => setModalIsOpen(true)}><p className='addTeam'>Add Team </p></i>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                style={modalStyle}
            >
                <CenterContainer>
                    <Words>Enter a team name</Words>
                    <SearchBox>
                        <form onSubmit={handleSubmit}>
                            <StyledInput
                                id="team"
                                type="text"
                                name="name"
                                placeholder="Team Name"
                                value={teamName.name}
                                onChange={handleChange}
                            />
                        </form>
                    </SearchBox>
                    <ButtonContainer>
                        <ButtonStyle1 onClick={handleSubmit}  ><p>Confirm</p></ButtonStyle1>
                        {/* <button onSubmit={handleSubmit}>Confirm</button> */}

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
    { createNewTeam }
)(AddTeam);

// text above
//add form for team name
//button to accept (with redux will add to the component)

