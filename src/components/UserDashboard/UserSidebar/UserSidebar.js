import React from 'react'

// Import Components
import PersonalGoals from './PersonalGoals/PersonalGoals.js'
import LeaderBoard from './LeaderBoard/LeaderBoard.js'
import Integrations from './Integrations/Integrations.js'


class UserSidebar extends React.Component{
    render(){
        return(
            <div className='user-sidebar'>
                <h1>User sidebar</h1>
                <PersonalGoals />
                <LeaderBoard />
                <Integrations />
            </div>
        )
    }
}

export default UserSidebar