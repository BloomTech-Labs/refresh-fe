import React, { useState } from 'react';
import Modal from 'react-modal';
import { flex } from '../../../styles/global/Mixins';
import { connect } from 'react-redux';
import { deleteTeam } from '../actions/actions';

import styled from 'styled-components';


const Words = styled.div `
display: flex;
justify-conent: center;
float: center;

position: absolute;
margin-right: 203px;
margin-left: 203px;
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

Modal.setAppElement('#root')

//function DeleteButton (props) {
    const DeleteButton = props => {
    // console.log('Delete Button Props: ', props)

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

    const handleDelete = id => {
        setModalIsOpen(false);
        props.deleteTeam(props.id)
        setTimeout(() => {props.makeRender(!props.render)} , 1000)
        console.log('handleDelete', props.render)
    }
    
    return (
        <div>
            <i class="fas fa-times" onClick={() => setModalIsOpen(true)}></i>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} 
                style={modalStyle}
                >
                <Words>Are you sure you want to delete this team?</Words>
                <ButtonStyle1>
                <div onClick={handleDelete}><p>Yes</p></div>
                </ButtonStyle1>
                <ButtonStyle2>
                <div onClick={() => setModalIsOpen(false)}><p>No</p></div>
                </ButtonStyle2>
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