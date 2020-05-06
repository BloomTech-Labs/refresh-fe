import React from 'react'
import {connect} from 'react-redux';

class DailyPoints extends React.Component{
    render(){
        return(
            <div className='daily-points'>
                <h2>{this.props.dailyPoints}/32</h2>
                <h3>Daily Points</h3>
                <div className="ldBar" 
                data-precision='1' 
                data-preset="stripe"
                data-value={this.props.dailyPoints / 32 * 100}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        dailyPoints: state.userReducer.dailyPoints
    }
}

export default connect(mapStateToProps, {})(DailyPoints)