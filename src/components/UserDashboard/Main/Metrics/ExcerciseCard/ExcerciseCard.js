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
                {/* <img  src={ExcerciseImage} alt="Woman Excercising"></img> */}
                <div class="ldBar label-center"
                    data-type="fill"
                    data-value={this.props.exercise / 60 * 100}
                    data-path="M90.5,23.2c0-12.5-10.2-22.7-22.7-22.7
                    c-13.6,0-20.9,8.6-22.3,13.8C44.3,8.9,
                    35.1,0.5,23.2,0.5C10.7,0.5,0.5,10.7,
                    0.5,23.2c0,22.2,36.5,45.3,45,55.9
                    C53.5,67.3,90.5,46.3,90.5,23.2z"
                    data-fill="red"
                    
                    data-fill-width="20">
                        <style></style>

                </div>
             
                </div>
                <div className='metric-card-input'>
                <button disabled={this.props.isFetching} onClick={() => this.props.subtractExercise(-15, this.props.userId, this.props.dailyPoints, this.props.totalPoints)}>-</button>
                <h3>{this.props.exercise}/60</h3>
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