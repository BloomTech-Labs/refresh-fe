import React from "react";
import {connect} from 'react-redux';

function SleepGoal(props) {

    function setAddedPoints(props) {
        if (props.sleep * props.pointsPerMetric.sleep.points > props.pointsPerMetric.sleep.max) {
            return <h2>+ {props.pointsPerMetric.sleep.max} points </h2>
        }
        else {
            return <h2> + {props.sleep * props.pointsPerMetric.sleep.points} points </h2>
        }
    }


    return(
        <div className="metricFormGoal">
            <div className="formGoalHeader">
                <h2>{props.sleep} hours of sleep</h2>
                {setAddedPoints(props)}
            </div>
            <div className="formGoalReasoningText">
                <p>.</p>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        sleep: state.userReducer.sleep,
        pointsPerMetric: state.userReducer.pointsPerMetric
    }
}

export default connect(mapStateToProps, {})(SleepGoal)