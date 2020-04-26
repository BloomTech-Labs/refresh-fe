import React from 'react'
import {connect} from 'react-redux'
import {addExercise, subtractExercise} from '../../../../../views/private/actions/actions-user'
import ExcerciseImage from './excercise.svg'


class ExcerciseCard extends React.Component{
    render(){
        return(
            <div className='water-card metric-card'>
                <h3 className='metrics-card-title'>Excercise</h3>
                <div className= 'metrics-card-content'>
                <img  src={ExcerciseImage} alt="Woman Excercising"></img>
                </div>
                <div className='metric-card-input'>
                <button disabled={this.props.isFetching} onClick={() => this.props.subtractExercise(-15, this.props.userId, this.props.dailyPoints, this.props.totalPoints)}>-</button>
                <h1>{this.props.exercise}/60</h1>
                <button disabled={this.props.isFetching} onClick={() => this.props.addExercise(15, this.props.userId, this.props.dailyPoints, this.props.totalPoints)}>+</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        exercise: state.userReducer.exercise,
        userId: state.userReducer.userId,
        dailyPoints: state.userReducer.dailyPoints,
        totalPoints: state.userReducer.totalPoints,
        isFetching: state.userReducer.isFetching
    }
}

export default connect(mapStateToProps, {addExercise, subtractExercise})(ExcerciseCard)