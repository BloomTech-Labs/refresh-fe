import React from 'react'
import {addWater, subtractWater} from '../../../../../views/private/actions/actions-user'
import {connect} from 'react-redux'

class WaterCard extends React.Component{
    render(){
        return(
            <div className='water-card metric-card'>
                <h3>Water</h3>
                <p>How many 8 OZ glasses of water have you consumed today?</p>
                <div className='metric-card-input'>
                <button onClick={() => this.props.subtractWater(-1, this.props.userId, this.props.dailyPoints, this.props.totalPoints)}>-</button>
                <h1>{this.props.water}</h1>
                <button onClick={() => this.props.addWater(1, this.props.userId, this.props.dailyPoints, this.props.totalPoints)}>+</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        water: state.userReducer.water,
        userId: state.userReducer.userId,
        dailyPoints: state.userReducer.dailyPoints,
        totalPoints: state.userReducer.totalPoints
    }
}
export default connect(mapStateToProps, {addWater, subtractWater})(WaterCard)
