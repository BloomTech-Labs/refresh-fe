import React, { Component } from 'react';

export default class Timer extends Component {

    timer = () => {
        if (this.props.timerRunning === true) {
            clearInterval(this.props.timerId)
            this.props.setCurrentTime("25 : 00")
            this.props.setTimerRunning()
        } else {
            this.props.cycle === "Session" ?
            this.props.startTimer(this.props.workTime) :
            this.props.startTimer(this.props.breakTime)
        }
    }

    render() {

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
}