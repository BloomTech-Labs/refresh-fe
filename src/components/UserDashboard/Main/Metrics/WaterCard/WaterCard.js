import React from 'react'


class WaterCard extends React.Component{
    render(){
        return(
            <div className='water-card' >
                <h3>WaterCard</h3>
                <p>How many glasses of water have you consumed today?</p>
                <button>-</button>
                <h1>0</h1>
                <button>+</button>
            </div>
        )
    }
}

export default WaterCard