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
                
                    <div className= 'sidebar-content-categrories'>
                        <h3>Water</h3>
                        <h4>{(goals.water - this.props.water) > 0 ? (goals.water - this.props.water) + " more glasses!" : "Complete"}</h4>
                    </div>
                    
                    <div className= 'sidebar-content-categrories'>
                        <h3>Exercise</h3>
                        <h4>{(goals.exercise - this.props.exercise) > 0 ? (goals.exercise - this.props.exercise) + " more minutes" : "Complete"}</h4>
                    </div>

                    <div className= 'sidebar-content-categrories'>
                        <h3>Sleep</h3>
                        <h4>{(goals.sleep - this.props.sleep) > 0 ? (goals.sleep - this.props.sleep) + " more hours!" : "Complete"}</h4>
                    </div>

                    <div className= 'sidebar-content-categrories'>
                        <h3>Breaks</h3>
                        <h4>{(goals.breaks - this.props.breaks) > 0 ? (goals.breaks - this.props.breaks) + " more to go! " : "Complete"}</h4>
                    </div>
                
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