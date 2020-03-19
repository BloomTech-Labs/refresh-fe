import React, { useState } from 'react';
import Modal from 'react-modal';
import { flex } from '../../../styles/global/Mixins';
import { connect } from 'react-redux';
import { deleteTeam } from '../actions/actions';

import styled from 'styled-components';


const ButtonContainer = styled.div`
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

    const handleDelete = id => {
        setModalIsOpen(false);
        props.deleteTeam(props.id)
        setTimeout(() => {props.makeRender(!props.render)} , 1000)
        console.log('handleDelete', props.render)
    }
    
    return (
        <div>
            <i class="fas fa-times fa-2x" onClick={() => setModalIsOpen(true)}></i>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} 
                style={modalStyle}
                >
                    <CenterContainer>
                <Words>Are you sure you want to delete this team?</Words>
                <ButtonContainer>
                <ButtonStyle1 onClick={handleDelete}>
                <p>Yes</p>
                </ButtonStyle1>
                <ButtonStyle2 onClick={() => setModalIsOpen(false)}>
                <p>No</p>
                </ButtonStyle2>
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
{deleteTeam}
)(DeleteButton);