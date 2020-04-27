import React from 'react'
import {connect} from 'react-redux'

//goals broken down into the # for the metric to meet the goal
const goals = {water: 8, exercise: 60, sleep: 8, breaks: 2}

class PersonalGoals extends React.Component{
    render(){
        return(
            <div className='personal-goals'>

                <div className ='sidebar-title'>
                    <h1>Personal Goals</h1>
                </div>
                
                <div className= 'sidebar-content'>
                
                
                <h3>Water</h3>
                <h4>{(goals.water - this.props.water) > 0 ? (goals.water - this.props.water) + " more glasses!" : "Complete"}</h4>
                <h4>Get {goals.sleep} hours of sleep <br></br> {(goals.sleep - this.props.sleep) > 0 ? (goals.sleep - this.props.sleep) + " more hours needed!" : "Complete"}</h4>
                <h4>Exercise for {goals.exercise} minutes<br></br> {(goals.exercise - this.props.exercise) > 0 ? (goals.exercise - this.props.exercise) + " more minutes to go!" : "Complete"}</h4>
                <h4>Take {goals.breaks} breaks<br></br>{(goals.breaks - this.props.breaks) > 0 ? (goals.breaks - this.props.breaks) + " more to go! " : "Complete"}</h4>
                </div>
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