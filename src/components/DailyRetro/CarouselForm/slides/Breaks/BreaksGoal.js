import React from "react";
import {connect} from 'react-redux';

function BreaksGoal(props) {

    function setAddedPoints(props) {
        if (props.breaks * props.pointsPerMetric.breaks.points > props.pointsPerMetric.breaks.max) {
            return <h2>+ {props.pointsPerMetric.breaks.max} points </h2>
        }
        else {
            return <h2> + {props.breaks * props.pointsPerMetric.breaks.points} points </h2>
        }
    }


    return(
        <div className="metricFormGoal">
            <div className="formGoalHeader">
                <h2>{props.breaks} 15+ minute breaks taken</h2>
                {setAddedPoints(props)}
            </div>
            <div className="formGoalReasoningText">
                <p>Try to take at least two 15+ minute breaks per day. Breaks through your day are essential in helping you to recharge yourself, and stay motivated and productive. </p>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        breaks: state.userReducer.breaks,
        pointsPerMetric: state.userReducer.pointsPerMetric
    }
}

export default connect(mapStateToProps, {})(BreaksGoal)