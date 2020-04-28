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
                <h2>Daily Trackers</h2>
                <h2>Daily Retro</h2>
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