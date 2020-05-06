import React from 'react'
import {connect} from 'react-redux'
import {addSleep, subtractSleep} from '../../../../../views/private/actions/actions-user'


class SleepCard extends React.Component{
    render(){
        return(
            <div className='water-card metric-card'>
                <h3 className='metrics-card-title'>Sleep</h3>
                <div className= 'metrics-card-content'>
                <div
                    data-value={this.props.sleep / 8 * 100}
                    class="ldBar"
                    data-preset="energy"
                    style={{width: '200px', height: '200px'}}
                    data-precision='1' 
                    ></div>
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