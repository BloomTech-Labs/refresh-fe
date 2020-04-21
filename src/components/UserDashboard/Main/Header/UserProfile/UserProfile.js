import React from 'react'

// Import Components

import UserInfo from './UserInfo/UserInfo.js'

class UserProfile extends React.Component{
    render(){
        return(
            <div className='user-profile'>
                <h3>User Image</h3>
                <UserInfo />
            </div>
        )
    }
}

export default UserProfile