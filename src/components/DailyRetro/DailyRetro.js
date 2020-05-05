import React from 'react'

// Import Components
import Header from '../UserDashboard/Main/Header/Header'
import Form from './Form/Form'


class DailyRetro extends React.Component{
    render(){
        return(
            <div className='daily-retro'>
                <Header />
                <Form />
            </div>
        )
    }
}

export default DailyRetro