import React, { useState } from 'react';
import Modal from 'react-modal';
import { flex } from '../../../styles/global/Mixins';

Modal.setAppElement('#root')

function AddTeam () {
    
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

    
    
    return (
        <div>
            <button onClick={() => setModalIsOpen(true)}>Add Team</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} 
                style={modalStyle}
                >
                <p>Enter a team name</p>
                <form>
                    <input
                    id="team"
                    type="text"
                    name="addTeam"
                    placeholder="Team Name"
                    // onChange={changeHandler}
                    // value={searchTerm}
                    />
            </form>
                <button>Confirm</button>
                <button onClick={() => setModalIsOpen(false)}>Cancel</button>
            </Modal>
        </div>
    );
}

export default AddTeam;
// text above
//add form for team name
//button to accept (with redux will add to the component)