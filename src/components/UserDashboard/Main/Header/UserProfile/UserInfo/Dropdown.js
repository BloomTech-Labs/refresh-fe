import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import styled from 'styled-components';
import {connect} from 'react-redux';
import {logout} from '../../../../../../views/private/actions/actions-user';
import Logoutimg from './logoutuser.png';
import {uploadAvatar} from '../../../../../../views/private/actions/actions';

// Modals
import Modal from 'react-modal';
Modal.setAppElement('#root')


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

      <DropdownMenu right>
        
     

        <DropdownItem> 
          <i className="image-container"  onClick={() => setModalIsOpen(true)}    > <img src={Logoutimg} height="50%"alt="logout button" ></img>Change<br/> Avatar</i>
        </DropdownItem>

        <Modal  isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}
                style={modalStyle}>
            <div className='content-parent-container'>
               
                <div className='avatar-modal-title'>Change Your Avatar</div>
                <div className='form-container'>
                    <form onSubmit={handleSubmit}>
                      <input
                        className="upload-avatar-input"
                        id="file"
                        type="file"
                        name="avatar"
                        value={avatar.avatarImage}
                        onChange={handleChanges}
                      />
                   <div className="button-container">
                  <button className='avatar-upload-button'><p>Upload</p></button>
                <button 
                  className='avatar-cancel-button' 
                  onClick={() => setModalIsOpen(false)}>
                  <p>Cancel</p></button>
                  </div>
                  </form>
                </div>
            </div>

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