import React from 'react'
import profilepic from './ProfilePic.svg'
import {connect} from 'react-redux';


// Import Components
import Dropdown from './UserInfo/Dropdown'

import UserInfo from './UserInfo/UserInfo.js'

class UserProfile extends React.Component{
    render(){
        return(
            <div className='user-profile'>
                <img className='profile-pic' src={`https://lab23-refresh-be.herokuapp.com/${this.props.avatar}`} alt="profile-pic" width="70px"></img>
                <UserInfo />
                <Dropdown />

            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        avatar: state.userReducer.avatar
    }
  }


  export default connect (mapStateToProps, {})(UserProfile);