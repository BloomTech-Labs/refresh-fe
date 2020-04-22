import React from 'react'
import {addWater} from '../../../../../views/private/actions/actions-user'
import {connect} from 'react-redux'

class WaterCard extends React.Component{
    render(){
        return(
            <div className='water-card metric-card'>
                <h3>Water</h3>
                <p>How many 8 OZ glasses of water have you consumed today?</p>
                <div className='metric-card-input'>
                <button>-</button>
                <h1>{this.props.water}</h1>
                <button onClick={() => this.props.addWater(1, this.props.userId)}>+</button>
                </div>
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        water: state.userReducer.water,
        userId: state.userReducer.userId
    }
}
export default connect(mapStateToProps, {addWater})(WaterCard)