import React from 'react'
import {connect} from 'react-redux'
import {addSleep, subtractSleep} from '../../../../../views/private/actions/actions-user'


class SleepCard extends React.Component{
    render(){
        return(
            <div className='water-card metric-card'>
                <h3>Sleep</h3>
                <p>How many hours did you sleep last night?</p>
                <div className='metric-card-input'>
                <button onClick={() => this.props.subtractSleep(-1, this.props.userId)}>-</button>
                <h1>{this.props.sleep}</h1>
                <button onClick={() => this.props.addSleep(1, this.props.userId)}>+</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        sleep: state.userReducer.sleep,
        userId: state.userReducer.userId
    }
}

export default connect(mapStateToProps, {addSleep, subtractSleep})(SleepCard)