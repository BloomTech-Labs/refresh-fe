import React from 'react'
import {connect} from 'react-redux';


class UserInfo extends React.Component{
    render(){
        return(
            <div className='user-info'>
                <h3>{this.props.fullName}</h3>
                <h3>{this.props.teamName}</h3>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        ...state,
        fullName: state.userReducer.fullName,
        teamName: state.userReducer.teamName
    }
}
export default connect(mapStateToProps, {})(UserInfo)