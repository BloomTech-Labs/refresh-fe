import React, {useState} from "react";
import {connect} from 'react-redux';

function WaterGoal() {

    return(
        <div className="metricFormGoal">

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