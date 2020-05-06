import React from 'react';
import {Link} from 'react-router-dom';

class BreaksQuestion extends React.Component{
  render() {
    return (
      <div className='slide-nav'>
        <button onClick={this.props.previous}>{"<----PREVIOUS"}</button>
        <h2>How many breaks did you take today?</h2>
        <Link to="/UserDashboard">
          <button onClick={this.props.next}>{"COMPLETE---->"}</button>
        </Link>
        
      </div>
    )
  }
}

export default BreaksQuestion;