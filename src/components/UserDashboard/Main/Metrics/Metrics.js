import React from 'react'
import {Link} from 'react-router-dom';

// Import Components
import WaterCard from './WaterCard/WaterCard.js'
import ExcerciseCard from './ExcerciseCard/ExcerciseCard.js'
import SleepCard from './SleepCard/SleepCard.js'
import BreaksCard from './BreaksCard/BreaksCard'

import Form from '../../../../components/DailyRetro/Form/Form'

class Metrics extends React.Component{
    render(){
        return(
            <div className= 'metrics-container'>
                
                <div className='metrics-header'>
                <h2>Daily Trackers</h2>
                <a><Link to="/Form"> Daily Retro</Link></a>
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