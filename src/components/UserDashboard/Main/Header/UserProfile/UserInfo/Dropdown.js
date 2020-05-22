import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import styled from 'styled-components';
import {connect} from 'react-redux';
import {logout} from '../../../../../../views/private/actions/actions-user';
import Logoutimg from './logoutuser.png';
import {uploadAvatar} from '../../../../../../views/private/actions/actions';

import Modal from 'react-modal';
Modal.setAppElement('#root')

const CenterContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: center;
width: 100%;
height: 100%
`
const ButtonContainer = styled.div`
display: flex;
width: 100%;
margin-top:15px;
justify-content: space-evenly;
margin-bottom: 20px;
`
const ButtonStyle1 = styled.button`
text-align: center;
color: black;
background: white;
padding: 5px 20px;
border: solid black 5px;

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
    letter-spacing: 3px;
}
`
const ButtonStyle2 = styled.button`
text-align: center;
color: white;
background: black;
padding: 5px 20px;
border: solid black 5px;

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
    letter-spacing: 3px;
}
`
const Words = styled.div`
font-size: 45px;
color: black;
font-family: "gopher",sans-serif;
`
const FileBox = styled.div`

font-style: normal;
font-weight: normal;
width: 75%;
font-size: 40px;
line-height: 47px;
color: #3B444B;
font-family: "gopher",sans-serif;
margin-bottom: 20px;
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
const Dropdown = (props) => {
  const [dropdownOpen, setOpen] = useState(false);
  const [avatar, setAvatar] = useState({
    avatarImage: null
  })
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

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
        borderRadius:'0px',
        webkitBoxShadow: '10px 10px',
        border:'2px solid black'
    },
    body: {
        font: '20px'
    }
    
}
const handleSubmit = e => {
  e.preventDefault();

  const fd = new FormData();
  fd.append('avatar', avatar.avatar)

  props.uploadAvatar(props.userId, fd)

  setModalIsOpen(false);

}
const handleChanges = e =>{
  setAvatar({
    ...avatar,
    [e.target.name]: e.target.files[0]
  })
  
}

  return (
    
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      
      <DropdownToggle caret size='lg'></DropdownToggle>
      

      <DropdownMenu>
        
     

        <DropdownItem> 
          <i className="add-team-button" onClick={() => setModalIsOpen(true)}    >Change Avatar</i>
        </DropdownItem>
        <Modal  isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                style={modalStyle}>
            <CenterContainer>
                <Words className='add-team-title'>Change Your Avatar</Words>
                <FileBox className='add-team-input'>
                    <form 
                
                    onSubmit={handleSubmit}>
                      <StyledInput
                        id="file"
                        type="file"
                        name="avatar"
                        value={avatar.avatarImage}
                        onChange={handleChanges}
                      />
                   <ButtonContainer>
                  <ButtonStyle1
                      className='add-team-submit' 
                      ><p>Upload</p>
                </ButtonStyle1>
                <ButtonStyle2 
                className='add-team-cancel' 
                onClick={() => setModalIsOpen(false)}>
                  <p>Cancel</p>
                  </ButtonStyle2>

              </ButtonContainer>

                    </form>
                
                </FileBox>
              

          </CenterContainer>

      </Modal>
      <DropdownItem onClick={() => props.logout()}>
          <img src={Logoutimg} alt="logout button" ></img>
        Logout</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

const mapStateToProps = state => {
  return {
      ...state,
      avatar: state.userReducer.avatar,
      userId: state.userReducer.userId,
  }
}

export default connect (mapStateToProps, {uploadAvatar, logout})(Dropdown);