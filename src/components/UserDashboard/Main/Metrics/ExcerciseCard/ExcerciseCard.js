import React from 'react'


class ExcerciseCard extends React.Component{
    render(){
        return(
            <div className='water-card metric-card'>
                <h3>Excercise</h3>
                <p>How many minutes of excercise have you done today?</p>
                <div className='metric-card-input'>
                <button>-</button>
                <h1>15</h1>
                <button>+</button>
                </div>
            </div>
        )
    }
}

export default ExcerciseCard