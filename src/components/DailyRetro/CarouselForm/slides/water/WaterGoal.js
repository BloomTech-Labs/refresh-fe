import React, {useState} from "react";
import {connect} from 'react-redux';

function WaterGoal(props) {

    function setAddedPoints() {
        if (props.water * props.pointsPerMetric.water.points > props.pointsPerMetric.water.max) {
            return <h2>+ {props.pointsPerMetric.water.max} </h2>
        }
        else {
            return <h2> + {props.water * props.pointsPerMetric.water.points} </h2>
        }
    }


    return(
        <div className="metricFormGoal">
            <div className= "formGoalHeader">
                <h2>{props.water} glasses of water</h2>
                {setAddedPoints()}
                {/* {(props.water * props.pointsPerMetric.water.points > props.pointsPerMetric.water.max ? <h2>+{props.pointsPerMetric.water.max}</h2> : props.pointsPerMetric.water.points * props.water)} */}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        water: props.userReducer.water,
        pointsPerMetric: props.userReducer.propsPerMetric
    }
}

export default connect(mapStateToProps, {})(WaterGoal)