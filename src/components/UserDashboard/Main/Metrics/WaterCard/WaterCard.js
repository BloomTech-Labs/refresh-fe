import React from 'react'


class WaterCard extends React.Component{
    render(){
        return(
            <div className='water-card metric-card'>
                <h3>Water</h3>
                <p>How many 8 OZ glasses of water have you consumed today?</p>
                <div className='metric-card-input'>
                <button>-</button>
                <h1>4</h1>
                <button>+</button>
                </div>
            </div>
        )
    }
}

export default WaterCard