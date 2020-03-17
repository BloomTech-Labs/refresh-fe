import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { flex } from '../../../styles/global/Mixins';
import TeamCard from './teamCard';
import { connect } from 'react-redux';
import { createNewTeam } from '../actions/actions';

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
            <i class="fas fa-plus fa-2x" onClick={() => setModalIsOpen(true)}> </i>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                style={modalStyle}
            >
                <CenterContainer>
                    <Words>Enter a team name</Words>
                    <SearchBox>
                        <form onSubmit={handleSubmit}>
                            <input
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
                        <ButtonStyle1 onClick={handleSubmit} ><p>Confirm</p></ButtonStyle1>
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

