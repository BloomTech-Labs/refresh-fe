import React from 'react'

// Import Components
import PersonalGoals from './PersonalGoals/PersonalGoals.js'
import LeaderBoard from './LeaderBoard/LeaderBoard.js'


// For future release
// import Integrations from './Integrations/Integrations.js'


class UserSidebar extends React.Component{
    render(){
        return(
            <div className='user-sidebar'>
                <PersonalGoals />
                <LeaderBoard />
                {/* <Integrations /> */}
            </div>
        )
    }
}

export default UserSidebar