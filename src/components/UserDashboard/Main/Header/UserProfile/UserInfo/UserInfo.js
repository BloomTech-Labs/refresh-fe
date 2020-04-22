import React from 'react'
import {connect} from 'react-redux';


class UserInfo extends React.Component{
    render(){
        return(
            <div className='user-info'>
                <h3>{this.props.fullName}</h3>
                <h3>User Team</h3>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        fullName: state.fullName,
    }
}
export default connect(mapStateToProps, {})(UserInfo)