import React, {useState} from "react";
import {connect} from 'react-redux';

function WaterGoal(props) {

    function setAddedPoints(props) {
        if (props.water * props.pointsPerMetric.water.points > props.pointsPerMetric.water.max) {
            return <h2>+ {props.pointsPerMetric.water.max} points </h2>
        }
        else {
            return <h2> + {props.water * props.pointsPerMetric.water.points} points </h2>
        }
    }


    return(
        <div className="metricFormGoal">
            <div className= "formGoalHeader">
                <h2>{props.water} glasses of water</h2>
                {setAddedPoints(props)}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        water: state.userReducer.water,
        pointsPerMetric: state.userReducer.pointsPerMetric
    }
}

export default connect(mapStateToProps, {})(WaterGoal)