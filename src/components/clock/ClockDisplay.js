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
    };

    setTimerRunning = () => {
        this.setState({
            timerRunning: this.state.timerRunning.toggle
            // Same here, that's my best guess
            // (Tutorial skips over these two parts for some odd reason :-/ )
        })
    };

    startTimer = (duration) => {
        this.setState({timerRunning: true})
        let time = duration * 60;
        let minutes;
        let seconds;
        let runningTimer = setInterval(() => {
            this.setState({
                timerId: runningTimer
            })
            minutes = Math.floor(time / 60);
            seconds = (time - minutes) * 60;
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            this.setState({currentTime : `${minutes} : ${seconds}`})
            if (time == 0) {
                if (this.state.cycle === "Sprint") {
                    this.setState({
                        cycle: "Break",
                        timerRunning: false
                    })
                    clearInterval(this.state.timerId)
                    this.startTimer(this.state.breakTime)
                } else {
                    this.setState({
                        cycle: "Sprint",
                        timerRunning: false
                    })
                    clearInterval(this.state.timerId)
                    this.startTimer(this.state.workTime)
                }
            }
        }, 1000);
    }

    render() {

        return (
            <div className="clock-display">
                <h1>Pomodoro Clock</h1>
                <Timer 
                    startTimer={this.startTimer}
                />
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