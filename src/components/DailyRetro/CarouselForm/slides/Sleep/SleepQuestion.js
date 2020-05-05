import React from 'react';


class SleepQuestion extends React.Component{
  render() {
    return (
      <div>
        <button onClick={this.props.previous}>{"<---------"}</button>
        <h3>How did you sleep last night?</h3>
        <button onClick={this.props.next}>{"--------->"}</button>
      </div>
    )
  }
}

export default SleepQuestion;