import React from 'react'
import {connect} from 'react-redux'

class ExcerciseCard extends React.Component{
    render(){
        return(
            <div className='water-card metric-card'>
                <h3>Excercise</h3>
                <p>How many minutes of excercise have you done today?</p>
                <div className='metric-card-input'>
                <button>-</button>
                <h1>{this.props.exercise}</h1>
                <button>+</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        exercise: state.userReducer.exercise
    }
}

export default connect(mapStateToProps, {})(ExcerciseCard)