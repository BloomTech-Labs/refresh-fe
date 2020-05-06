import React from 'react';
import {Link} from 'react-router-dom';

class WaterQuestion extends React.Component{
  render() {
    return (
      <div className='slide-nav'>
        <Link to="/UserDashboard">
        <button onClick={this.props.previous}>{"<----DASHBOARD"}</button>
        </Link>
        <h2>How much water did you drink?</h2>
        <button onClick={this.props.next}>{"NEXT---->"}</button>
      </div>
    )
  }
}

export default WaterQuestion;