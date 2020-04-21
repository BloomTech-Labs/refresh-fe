import React from 'react'

// Import Components
import WaterCard from './WaterCard/WaterCard.js'
// import ExcerciseCard from './ExcerciseCard/ExcerciseCard.js'
// import SleepCard from './SleepCard/SleepCard.js'
// import BreaksCard from './BreaksCard/BreaksCard.js'

class Metrics extends React.Component{
    render(){
        return(
            <div className='metrics' >
                <h1>Metrics</h1>
                <WaterCard />
                {/* <ExcerciseCard />
                <SleepCard />
                <BreaksCard /> */}
            </div>
        )
    }
}

export default Metrics