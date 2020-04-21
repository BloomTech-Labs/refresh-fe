import React from 'react'

// Import Components
import Header from './Header/Header.js'
import Metrics from './Metrics/Metrics.js'


class Main extends React.Component{
    render(){
        return(
            <div className='main' >
                <h1>Main</h1>
                <Header />
                <Metrics />
            </div>
        )
    }
}

export default Main