import React, { useState } from 'react';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import { deleteUser } from '../actions/actions';
import styled from 'styled-components';
// import { ButtonContainer, CenterContainer, Words, ButtonStyle1, ButtonStyle2 } from '../styled-components/delete-button-styles';

const ButtonContainer = styled.div`
display: flex;
width: 75%;
justify-content: space-evenly;
`
const CenterContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
width: 100%;
height: 100%
`
const Words = styled.div`
font-size: 35px;
font-weight: 500;
color: black;
font-family: "gopher",sans-serif;
letter-spacing: 3px;
margin-bottom: 20px;
text-align: center;
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
margin-bottom: 20px;
font-style: normal;
font-weight: normal;
width: 75%;
font-size: 40px;
line-height: 47px;
color: #3B444B;
font-family: "gopher",sans-serif;
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

const DeleteUserButton = props => {

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
            webkitBoxShadow: '10px 10px',
            borderRadius: '0px',
            outline: 'none',
            padding: '20px',
            border:'2px solid black'
        },
        body: {
            font: '20px'
        }
    }

    const handleDelete = id => {
        setModalIsOpen(false);
        props.deleteUser(props.id)
        setTimeout(() => {props.makeRender(!props.render)} , 100)
    }
    
    return (
        <div>
           <box-icon name="x" color="#000000" size="lg"  onClick={() => setModalIsOpen(true)}>></box-icon>
            <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)} 
                style={modalStyle}
                >
                <CenterContainer>
                <Words>Are you sure you want to<br /> delete this user?</Words>
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
{deleteUser}
)(DeleteUserButton);