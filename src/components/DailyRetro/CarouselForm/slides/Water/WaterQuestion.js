import React from 'react';


class WaterQuestion extends React.Component{
  render() {
    return (
      <div className='slide-nav'>
        <button onClick={this.props.previous}>{"<----DASHBOARD"}</button>
        <h2>How much water did you drink?</h2>
        <button onClick={this.props.next}>{"NEXT---->"}</button>
      </div>
    )
  }
}

export default WaterQuestion;