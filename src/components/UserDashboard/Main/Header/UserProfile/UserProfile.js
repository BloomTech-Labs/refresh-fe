import React from 'react'
import profilepic from './ProfilePic.svg'

// Import Components
import Dropdown from './UserInfo/Dropdown'

import UserInfo from './UserInfo/UserInfo.js'

class UserProfile extends React.Component{
    render(){
        return(
            <div className='user-profile'>
                <img className='profile-pic' src={profilepic} alt="profile-pic" width="70px"></img>
                <UserInfo />
                <Dropdown />

            </div>
        )
    }
}

export default UserProfile