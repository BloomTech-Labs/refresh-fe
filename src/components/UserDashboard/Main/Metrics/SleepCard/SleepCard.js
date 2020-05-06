import React from 'react'
import {connect} from 'react-redux'
import {addSleep, subtractSleep} from '../../../../../views/private/actions/actions-user'
import '../styles.css';
import SleepImage from './sleep.svg'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { easeQuadInOut } from 'd3-ease';
import AnimatedProgressProvider from "../AnimatedProgressProvider"
class SleepCard extends React.Component{
    render(){
        return(
            <div className='water-card metric-card'>
                <h3 className='metrics-card-title'>Sleep</h3>
                <div className= 'metrics-card-content'>
                <AnimatedProgressProvider
                    valueStart={0}
                    valueEnd={this.props.sleep / 8 * 100}
                    duration={.75}
                    easingFunction={easeQuadInOut}
                    >
                        {value=>{
                            const roundedValue=Math.round(value)
                            if(this.props.sleep===8){
                                return(
                                    <CircularProgressbarWithChildren styles={buildStyles({ pathTransition: "none" })} value={value}>
                                    <img style={{ width: 175}} src={SleepImage} alt="Sleep" />
                                    <div style={{ fontSize: 15, marginTop: 35 }}> <header>{`${roundedValue}%`}</header></div>
                                    </CircularProgressbarWithChildren>
                                )
                            } else{
                                return(
                                    <CircularProgressbarWithChildren styles={buildStyles({ 
                                        pathColor: `salmon`, pathTransition: "none" })} value={value}>
                                    <img style={{ width: 175}} src={SleepImage} alt="Sleep" />
                                    <div style={{ fontSize: 15, marginTop: 35 }}> <header>{`${roundedValue}%`}</header></div>
                                    </CircularProgressbarWithChildren>
                                )
                            }
                            
                        }}
               
                </AnimatedProgressProvider>
                </div>
                <div className='metric-card-input'>
                <button disabled={this.props.isFetching} onClick={() => this.props.subtractSleep(-1, this.props.userId, this.props.dailyPoints, this.props.totalPoints)}>-</button>
                <h3>{this.props.sleep}/8</h3>
                <button disabled={this.props.isFetching} onClick={() => this.props.addSleep(1, this.props.userId, this.props.dailyPoints, this.props.totalPoints)}>+</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        sleep: state.userReducer.sleep,
        userId: state.userReducer.userId,
        dailyPoints: state.userReducer.dailyPoints,
        totalPoints: state.userReducer.totalPoints,
        isFetching: state.userReducer.isFetching
    }
}

export default connect(mapStateToProps, {addSleep, subtractSleep})(SleepCard)