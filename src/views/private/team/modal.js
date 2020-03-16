import React, { useState } from 'react';
import Modal from 'react-modal';
import { flex } from '../../../styles/global/Mixins';

Modal.setAppElement('#root')

function ModalButton () {
    
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
            padding: '20px'
        },
        body: {
            font: '20px'
        }
    }

    
    
    return (
        <div>
            <button onClick={() => setModalIsOpen(true)}>Modal Button</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} 
                style={modalStyle}
                >
                <p>Are you sure you want to delete this team?</p>
                <button>Yes</button>
                <button onClick={() => setModalIsOpen(false)}>No</button>
            </Modal>
        </div>
    );
}

export default ModalButton;