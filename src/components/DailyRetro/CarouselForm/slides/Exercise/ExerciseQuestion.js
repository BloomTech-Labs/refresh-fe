import React from 'react';


class ExerciseQuestion extends React.Component{
  render() {
    return (
      <div className='slide-nav'>
        <button onClick={this.props.previous}>{"<----PREVIOUS"}</button>
        <h2>How much exercise did you get today?</h2>
        <button onClick={this.props.next}>{"NEXT---->"}</button>
      </div>
    )
  }
}

export default ExerciseQuestion;