import React from 'react';


class SleepQuestion extends React.Component{
  render() {
    return (
      <div className='slide-nav'>
        <button onClick={this.props.previous}>{"<----PREVIOUS"}</button>
        <h2>How did you sleep last night?</h2>
        <button onClick={this.props.next}>{"NEXT---->"}</button>
      </div>
    )
  }
}

export default SleepQuestion;