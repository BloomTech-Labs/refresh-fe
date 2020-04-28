import React from 'react'
import profilepic from './ProfilePic.svg'
// Import Components

import UserInfo from './UserInfo/UserInfo.js'

class UserProfile extends React.Component{
    render(){
        return(
            <div className='user-profile'>
                <img  src={profilepic} alt="profile-pic" width="70px"></img>
                <UserInfo />
            </div>
        )
    }
}

export default UserProfile