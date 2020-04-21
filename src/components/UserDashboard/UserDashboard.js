import React from 'react'

// Import Components
import Main from './Main/Main.js'
// import Sidebar from './Sidebar/Sidebar.js'


class UserDashboard extends React.Component{
    render(){
        return(
            <div className='user-dashboard'>
                <h1>User Dashboard</h1>
                <Main />
                {/* <Sidebar /> */}
            </div>
        )
    }
}

export default UserDashboard