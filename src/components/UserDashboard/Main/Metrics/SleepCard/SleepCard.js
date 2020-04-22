import React from 'react'


class SleepCard extends React.Component{
    render(){
        return(
            <div className='water-card metric-card'>
                <h3>Sleep</h3>
                <p>How many hours did you sleep last night?</p>
                <div className='metric-card-input'>
                <button>-</button>
                <h1>6</h1>
                <button>+</button>
                </div>
            </div>
        )
    }
}

export default SleepCard