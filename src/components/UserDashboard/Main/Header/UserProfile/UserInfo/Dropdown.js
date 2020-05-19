import React, { useState } from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

import {connect} from 'react-redux'
import {logout} from '../../../../../../views/private/actions/actions-user'
import Logoutimg from './Logout.svg'


const Dropdown = (props) => {
  const [dropdownOpen, setOpen] = useState(false);

  const toggle = () => setOpen(!dropdownOpen);

  return (
    <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
      
      <DropdownToggle caret size='lg'></DropdownToggle>
      

      <DropdownMenu>
        {/* <DropdownItem>Edit Profile</DropdownItem>
        <DropdownItem divider /> */}
        <DropdownItem onClick={() => props.logout()}>
        <i class='bx bx-exit' styles='color:#ff4c00' ></i>
          {/* <img src={Logoutimg} alt="logout button" ></img> */}
        Logout</DropdownItem>
      </DropdownMenu>
    </ButtonDropdown>
  );
}

const mapStateToProps = state => {
  return {
      ...state
  }
}

export default connect (mapStateToProps, {logout})(Dropdown);