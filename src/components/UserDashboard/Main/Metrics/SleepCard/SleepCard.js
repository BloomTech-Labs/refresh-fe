import React from 'react'
import {connect} from 'react-redux'

class SleepCard extends React.Component{
    render(){
        return(
            <div className='water-card metric-card'>
                <h3>Sleep</h3>
                <p>How many hours did you sleep last night?</p>
                <div className='metric-card-input'>
                <button>-</button>
                <h1>{this.props.sleep}</h1>
                <button>+</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        sleep: state.userReducer.sleep
    }
}

export default connect(mapStateToProps, {})(SleepCard)