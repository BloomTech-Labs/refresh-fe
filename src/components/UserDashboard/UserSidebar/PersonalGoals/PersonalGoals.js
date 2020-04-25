import React from 'react'
import {connect} from 'react-redux'

//goals broken down into the # for the metric to meet the goal
const goals = {water: 8, exercise: 60, sleep: 8, breaks: 2}

class PersonalGoals extends React.Component{
    render(){
        return(
            <div className='personal-goals'>
                <h1  style={{fontSize: "25px"}}>Personal Goals</h1>
                <>
                <h2>Drink {goals.water} glasses of water<br></br> {(goals.water - this.props.water) > 0 ? (goals.water - this.props.water) + " more to go!" : "Complete"}</h2>
                <h2>Get {goals.sleep} hours of sleep <br></br> {(goals.sleep - this.props.sleep) > 0 ? (goals.sleep - this.props.sleep) + " more hours needed!" : "Complete"}</h2>
                <h2>Exercise for {goals.exercise} minutes<br></br> {(goals.exercise - this.props.exercise) > 0 ? (goals.exercise - this.props.exercise) + " more minutes to go!" : "Complete"}</h2>
                <h2>Take {goals.breaks} breaks<br></br>{(goals.breaks - this.props.breaks) > 0 ? (goals.breaks - this.props.breaks) + " more to go! " : "Complete"}</h2>
                </>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        water: state.userReducer.water,
        exercise: state.userReducer.exercise,
        sleep: state.userReducer.sleep,
        breaks: state.userReducer.breaks
    }
}

export default connect(mapStateToProps, {})(PersonalGoals)