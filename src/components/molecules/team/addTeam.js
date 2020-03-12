import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { flex } from '../../../styles/global/Mixins';
import TeamCard from './teamCard';
import { connect } from 'react-redux';
import {createNewTeam} from '../../../views/private/actions/actions';

Modal.setAppElement('#root')

function AddTeam (props) {
    console.log(props)

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
            top: '150px',
            left: '250px',
            right: '250px',
            bottom: '150px',
            background: '#fff',
            overflow: 'auto',
            WebkitOverflowScrolling: 'touch',
            borderRadius: '10px',
            outline: 'none',
            padding: '20px',
            
        },
        body: {
            font: '20px'
        }
    }

    
        
        
        const handleSubmit = e => {
            e.preventDefault();
            console.log(teamName, 'add team')
          props.createNewTeam(teamName)
        } 
        
        const handleChange = e => {
            setTeamName({
                ...teamName,
                [e.target.name]: e.target.value
            }); 
        };
    
    
    return (
        <div>
            <button onClick={() => setModalIsOpen(true)}>Add Team</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} 
                style={modalStyle}
                >
                <p>Enter a team name</p>
                
                <form onSubmit={handleSubmit}>
                    <input
                    id="team"
                    type="text"
                    name="name"
                    placeholder="Team Name"
                    value={teamName.name}
                    onChange={handleChange}
                    />
                <button onSubmit={handleSubmit}>Confirm</button>
                </form>
                <button onClick={() => setModalIsOpen(false)}>Cancel</button>
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

