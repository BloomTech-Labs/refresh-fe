import React from 'react'
import profilepic from './profilepic.png'
// Import Components

import UserInfo from './UserInfo/UserInfo.js'

class UserProfile extends React.Component{
    render(){
        return(
            <div className='user-profile'>
                <img  src={profilepic} alt="profile-pic" width="100"></img>
                <UserInfo />
            </div>
        )
    }
}

export default UserProfile