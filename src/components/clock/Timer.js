import React from 'react';

export default function Timer () {
    return (
        <div className="timer">
            <span className="count-down" // toggles timerRunning from false/true
                  onClick={this.timer}>
                  {this.props.currentTime}
            </span>
            <span>{this.props.cycle}</span>
        </div>
    )
    
}