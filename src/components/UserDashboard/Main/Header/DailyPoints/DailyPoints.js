import React from 'react'
import {connect} from 'react-redux';

class DailyPoints extends React.Component{
    render(){
        return(
            <div className='daily-points'>
                <h1 style={{fontSize: "35px"}}>{this.props.points}/40</h1>
                <h1 style={{fontSize: "15px"}}>Daily Points</h1>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        points: state.userReducer.points
    }
}

export default connect(mapStateToProps, {})(DailyPoints)