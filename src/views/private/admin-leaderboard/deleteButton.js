import React, { useState } from 'react';
import Modal from 'react-modal';
import { flex } from '../../../styles/global/Mixins';
import { connect } from 'react-redux';
import { deleteTeam } from '../actions/actions';

Modal.setAppElement('#root')

//function DeleteButton (props) {
    const DeleteButton = props => {
        const [ history ] = useState([])
    console.log(props)
    

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

    // const deleteThisTeam = event => {
    //     event.preventDefault();
    //     console.log(teamName, 'delete team')
    //     props.deleteTeam(props.team)
    //     setTimeout(() => {props.rerender(!props.update)}, 100)
    // }
    const handleDelete = id => {
        console.log('click', id)
        props.deleteTeam(props.id)
        setModalIsOpen(false);
        setTimeout(() => {props.makeRender(!props.render)} , 100)
        //setTimeout(()=> {history.push('/teams')} , 1000)
    }
    
    return (
        <div>
            <button onClick={() => setModalIsOpen(true)}>Delete Button</button>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} 
                style={modalStyle}
                >
                <p>Are you sure you want to delete this team?</p>
                <button onClick={handleDelete}>Yes</button>
                <button onClick={() => setModalIsOpen(false)}>No</button>
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