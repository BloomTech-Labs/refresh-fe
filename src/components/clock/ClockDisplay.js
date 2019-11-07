import React, { Component } from 'react';
import Timer from './Timer';
import TimerControllers from './TimerControllers';

export default class ClockDisplay extends Component {
    constructor() {
        super();
        this.state = {
            timerId: 0,
            timerRunning: false,
            currentTime: "25 : 00",
            cycle: "Work",
            workTime: 25,
            breakTime: 5
        }
    }

    incrementWorkTime = () => {
        this.setState({
            workTime: this.state.workTime + 1
        })
    };

    decrementWorkTime = () => {
        this.setState({
            workTime: this.state.workTime - 1
        })
    };

    incrementBreakTime = () => {
        this.setState({
            breakTime: this.state.breakTime + 1
        })
    };

    decrementBreakTime = () => {
        this.setState({
            breakTime: this.state.breakTime - 1
        })
    };

    setCurrentTime = () => {
        this.setState({
            // Confused about what to put here, may need help
        })
    }

    setTimerRunning = () => {
        this.setState({
            timerRunning: this.state.timerRunning.toggle
            // Same here, that's my best guess
            // (Tutorial skips over these two parts for some odd reason :-/ )
        })
    }

    render() {

        return (
            <div className="clock-display">
                <h1>Pomodoro Clock</h1>
                <Timer />
                <TimerControllers 
                    workTime={this.state.workTime}
                    breakTime={this.state.breakTime}
                    incrementWorkTime={this.incrementWorkTime}
                    decrementWorkTime={this.decrementWorkTime}
                    incrementBreakTime={this.incrementBreakTime}
                    decrementBreakTime={this.decrementBreakTime}
                />
            </div>
        )

    }
}