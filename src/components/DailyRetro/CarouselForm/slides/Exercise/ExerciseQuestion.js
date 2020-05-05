import React from 'react';


class ExerciseQuestion extends React.Component{
  render() {
    return (
      <div>
        <button onClick={this.props.previous}>{"<---------"}</button>
        <h3>How much exercise did you get today?</h3>
        <button onClick={this.props.next}>{"--------->"}</button>
      </div>
    )
  }
}

export default ExerciseQuestion;