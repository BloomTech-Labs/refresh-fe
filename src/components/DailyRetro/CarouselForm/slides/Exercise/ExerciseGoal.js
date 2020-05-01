import React from "react";
import {connect} from 'react-redux';

function ExerciseGoal(props) {

    function setAddedPoints(props) {

        //adjusting here the metric num we are comparing points/points max to, since exercise is measured in intervals of 15 minutes. 
        //dividing props.exercise by 15 gives us the amount of times a user has taken exercise in 15 minute intervals, instead of the minutes themselves. 
        const adjustedExerciseMetric = props.exercise / 15;

        if (adjustedExerciseMetric * props.pointsPerMetric.exercise.points > props.pointsPerMetric.exercise.max) {
            return <h2>+ {props.pointsPerMetric.exercise.max} points </h2>
        }
        else {
            return <h2> + {adjustedExerciseMetric * props.pointsPerMetric.exercise.points} points </h2>
        }
    }


    return(
        <div className="metricFormGoal">
            <div className="formGoalHeader">
                <h2>{props.exercise} minutes of exercise</h2>
                {setAddedPoints(props)}
            </div>
            <div className="formGoalReasoningText">
                <p>Try to get at least 60 minutes of light to moderate exercise per day. Getting enough exercise regularly helps you improve your brain health, maintain your weight goals, and reduce your risk of certain diseases such as Cardiovascular disease. </p>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        exercise: state.userReducer.exercise,
        pointsPerMetric: state.userReducer.pointsPerMetric
    }
}

export default connect(mapStateToProps, {})(ExerciseGoal)