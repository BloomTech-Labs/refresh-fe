import React from 'react';
import {Link} from 'react-router-dom';

class BreaksQuestion extends React.Component{
  render() {
    return (
      <div>
        <button onClick={this.props.previous}>{"<---------"}</button>
        <h3>How many breaks did you take today?</h3>
        <Link to="/UserDashboard">
          <button onClick={this.props.next}>{"Complete"}</button>
        </Link>
        
      </div>
    )
  }
}

export default BreaksQuestion;