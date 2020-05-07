import React from 'react'
import {connect} from 'react-redux'
import {addExercise, subtractExercise} from '../../../../../views/private/actions/actions-user'
import '../styles.css';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { easeQuadInOut } from 'd3-ease';
import AnimatedProgressProvider from "../AnimatedProgressProvider"
import ExcerciseImage from './excercise.svg'

class ExcerciseCard extends React.Component{
    render(){
        return(
            <div className='water-card metric-card'>
                <h3 className='metrics-card-title'>Excercise</h3>
                <div className= 'metrics-card-content'>
                <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={this.props.exercise / 60 * 100}
                    duration={.75}
                    easingFunction={easeQuadInOut}
                    >
                    {value=>{
                        const roundedValue=Math.round(value)
                        if(this.props.exercise>=60){
                            return(
                                <CircularProgressbarWithChildren styles={buildStyles({ pathTransition: "none" })}  value={value}>
                                <img style={{ width: 135 }} src={ExcerciseImage} alt="Exercise" />
                                <div className='progress-bar-text-complete'> <header>{`${roundedValue}%`}</header></div>
                                </CircularProgressbarWithChildren>
                                    )
                        } else {
                            return(
                                <CircularProgressbarWithChildren styles={buildStyles({ 
                                    pathColor: `salmon`, pathTransition: "none" })}  value={value}>
                                <img style={{ width: 135 }} src={ExcerciseImage} alt="Exercise" />
                                <div className='progress-bar-text-incomplete'> <header>{`${roundedValue}%`}</header></div>
                                </CircularProgressbarWithChildren>
                                    )
                        }
                        
                    }}
                    
                    </AnimatedProgressProvider>
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