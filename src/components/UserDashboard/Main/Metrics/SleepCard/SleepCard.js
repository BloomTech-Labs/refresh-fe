import React from 'react'
import {connect} from 'react-redux'
import {addSleep, subtractSleep} from '../../../../../views/private/actions/actions-user'
import SleepImage from './sleep.svg'

class SleepCard extends React.Component{
    render(){
        return(
            <div className='water-card metric-card'>
                <h3 className='metrics-card-title'>Sleep</h3>
                <div className= 'metrics-card-content'>
                <img  src={SleepImage} alt="profile-pic"></img>
                </div>
                <div className='metric-card-input'>
                <button disabled={this.props.isFetching} onClick={() => this.props.subtractSleep(-1, this.props.userId, this.props.dailyPoints, this.props.totalPoints)}>-</button>
                <h1>{this.props.sleep}/8</h1>
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