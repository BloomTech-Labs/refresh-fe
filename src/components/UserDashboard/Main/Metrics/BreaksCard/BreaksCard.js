import React from 'react'
import {connect} from 'react-redux'


class BreaksCard extends React.Component{
    render(){
        return(
            <div className='water-card metric-card'>
                <h3>Breaks</h3>
                <p>How many 15+ minute breaks have you taken today?</p>
                <div className='metric-card-input'>
                <button>-</button>
                <h1>{this.props.breaks}</h1>
                <button>+</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        breaks: state.userReducer.breaks
    }
}

export default connect(mapStateToProps, {})(BreaksCard)