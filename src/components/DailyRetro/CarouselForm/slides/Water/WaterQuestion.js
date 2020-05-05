import React from 'react';


class WaterQuestion extends React.Component{
  render() {
    return (
      <div className='slide-nav'>
        <button onClick={this.props.previous}>{"<---------"}</button>
        <h3>How much water did you drink?</h3>
        <button onClick={this.props.next}>{"--------->"}</button>
      </div>
    )
  }
}

export default WaterQuestion;