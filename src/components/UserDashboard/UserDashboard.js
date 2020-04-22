import React from 'react'

// Import Components
import Main from './Main/Main.js'
import UserSidebar from './UserSidebar/UserSidebar.js'


class UserDashboard extends React.Component{
    render(){
        return(
            <div className='user-dashboard'>
                <Main />
                <UserSidebar />
            </div>
        )
    }
}

export default UserDashboard