import React from 'react'


class BreaksCard extends React.Component{
    render(){
        return(
            <div className='water-card metric-card'>
                <h3>Breaks</h3>
                <p>How many 15+ minute breaks have you taken today?</p>
                <div className='metric-card-input'>
                <button>-</button>
                <h1>2</h1>
                <button>+</button>
                </div>
            </div>
        )
    }
}

export default BreaksCard