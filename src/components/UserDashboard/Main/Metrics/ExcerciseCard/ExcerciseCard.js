import React from 'react'
import {connect} from 'react-redux'
import {addExercise} from '../../../../../views/private/actions/actions-user'

class ExcerciseCard extends React.Component{
    render(){
        return(
            <div className='water-card metric-card'>
                <h3>Excercise</h3>
                <p>How many minutes of excercise have you done today?</p>
                <div className='metric-card-input'>
                <button>-</button>
                <h1>{this.props.exercise}</h1>
                <button onClick={() => this.props.addExercise(15, this.props.userId)}>+</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        exercise: state.userReducer.exercise,
        userId: state.userReducer.userId
    }
}

export default connect(mapStateToProps, {addExercise})(ExcerciseCard)