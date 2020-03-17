import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { flex } from '../../../styles/global/Mixins';
import TeamCard from './teamCard';
import { connect } from 'react-redux';
import { createNewTeam } from '../actions/actions';

import styled from 'styled-components';


const Words = styled.div `
display: flex;
justify-conent: center;
float: center;

position: absolute;
margin-right: 203px;
margin-left: 303px;
margin-top: 84px;
margin-bottom: 195px;
text-align: center;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 40px;
line-height: 47px;
color: #3B444B;
`
const ButtonStyle1 = styled.div `
width: 113px;
height: 64px;

position: absolute;
margin-right: 500px;
margin-left: 336px;
margin-top: 242px;
margin-bottom: 83px;
text-align: center;
color: white;
background: #F0372B;
border-radius: 4px;
font-size: 28px;
font-margin-top: 16px;
:hover {
    cursor: pointer;
    opacity: 50%;
}
p {
    margin-top: 16px;
}

`
const ButtonStyle2 = styled.div `
width: 113px;
height: 64px;

position: absolute;
margin-right: 302px;
margin-left: 500px;
margin-top: 242px;
margin-bottom: 83px;
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
    margin-top: 16px;
}
`
const SearchBox = styled.div `
display: flex;
justify-conent: center;
float: center;

position: absolute;
margin-right: 203px;
margin-left: 380px;
margin-top: 150px;
margin-bottom: 195px;
text-align: center;

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 40px;
line-height: 47px;
color: #3B444B;
`

Modal.setAppElement('#root')

function AddTeam (props) {

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
            position: 'absolute',
            top: '25vh',
            left: '20vw',
            right: '20vw',
            bottom: '25vh',
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
        setTimeout(() => {props.makeRender(!props.render)} , 0)
    } 
        
        const handleChange = e => {
            setTeamName({
                ...teamName,
                [e.target.name]: e.target.value
            }); 
        };
    
    
    return (
        <div>
            <i class="fas fa-plus" onClick={() => setModalIsOpen(true)}> </i>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} 
                style={modalStyle}
                >
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
                <ButtonStyle1 ><p>Confirm</p></ButtonStyle1>
                {/* <button onSubmit={handleSubmit}>Confirm</button> */}
                
                <ButtonStyle2 onClick={() => setModalIsOpen(false)}><p>Cancel</p></ButtonStyle2>
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
    {createNewTeam}
  )(AddTeam);

// text above
//add form for team name
//button to accept (with redux will add to the component)

