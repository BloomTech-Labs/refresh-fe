import React from 'react'

// Import Components
import WaterCard from './WaterCard/WaterCard.js'
import ExcerciseCard from './ExcerciseCard/ExcerciseCard.js'
import SleepCard from './SleepCard/SleepCard.js'
import BreaksCard from './BreaksCard/BreaksCard'

class Metrics extends React.Component{
    render(){
        return(
            <div className= 'metrics-container'>
                
                <div className='metrics-header'>
                <h1>Daily Trackers</h1>
                <h1>Daily Retro</h1>
                </div>

                <div className='metrics' >
                    <WaterCard />
                    <ExcerciseCard />
                    <SleepCard />
                    <BreaksCard />
                </div>
            </div>
        )
    }
}

export default Metrics