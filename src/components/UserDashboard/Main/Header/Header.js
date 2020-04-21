import React from 'react'

// Import Components
import UserProfile from './UserProfile/UserProfile.js'
import DailyPoints from './DailyPoints/DailyPoints.js'


class Header extends React.Component{
    render(){
        return(
            <div className='header'>
                <h1>Header</h1>
                <UserProfile />
                <DailyPoints />
            </div>
        )
    }
}

export default Header