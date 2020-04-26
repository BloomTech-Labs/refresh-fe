import React from 'react'
import {connect} from 'react-redux'
import {addBreaks, subtractBreaks} from '../../../../../views/private/actions/actions-user'
import BreakImage from './breaks.svg'
class BreaksCard extends React.Component{
    render(){
        return(
            <div className='water-card metric-card'>

                <h3 className='metrics-card-title'>Breaks</h3>

                <div className= 'metrics-card-content'>
                <img  src={BreakImage} alt="Woman Medetaing"></img>
                </div>

                <div className='metric-card-input'>

                <button disabled={this.props.isFetching} onClick={() => this.props.subtractBreaks(-1, this.props.userId, this.props.dailyPoints, this.props.totalPoints)}>-</button>
                
                <h1>{this.props.breaks}/2</h1>
                
                <button disabled={this.props.isFetching} onClick={() => this.props.addBreaks(1, this.props.userId, this.props.dailyPoints, this.props.totalPoints)}>+</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        breaks: state.userReducer.breaks,
        userId: state.userReducer.userId,
        dailyPoints: state.userReducer.dailyPoints,
        totalPoints: state.userReducer.totalPoints,
        isFetching: state.userReducer.isFetching
    }
}

export default connect(mapStateToProps, {addBreaks, subtractBreaks})(BreaksCard)