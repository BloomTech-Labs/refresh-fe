import React from 'react';


class BreaksQuestion extends React.Component{
  render() {
    return (
      <div>
        <button onClick={this.props.previous}>{"<---------"}</button>
        <h3>How many breaks did you take today?</h3>
        <button onClick={this.props.next}>{"--------->"}</button>
      </div>
    )
  }
}

export default BreaksQuestion;