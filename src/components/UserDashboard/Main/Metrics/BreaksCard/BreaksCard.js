import React from 'react'
import {connect} from 'react-redux'
import {addBreaks} from '../../../../../views/private/actions/actions-user'

class BreaksCard extends React.Component{
    render(){
        return(
            <div className='water-card metric-card'>
                <h3>Breaks</h3>
                <p>How many 15+ minute breaks have you taken today?</p>
                <div className='metric-card-input'>
                <button>-</button>
                <h1>{this.props.breaks}</h1>
                <button onClick={() => this.props.addBreaks(1, this.props.userId)}>+</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        breaks: state.userReducer.breaks,
        userId: state.userReducer.userId
    }
}

export default connect(mapStateToProps, {addBreaks})(BreaksCard)