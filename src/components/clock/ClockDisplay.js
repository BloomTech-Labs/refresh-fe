import React, { Component } from 'react';
import Timer from './Timer';
import TimerControllers from './TimerControllers';

export default class ClockDisplay extends Component {
    constructor() {
        super();
        this.state = {
            cycle: "Work",
            workTime: 25,
            breakTime: 5
        }
    }

    render() {

        return (
            <div className="clock-display">
                <h1>Pomodoro Clock</h1>
                <Timer />
                <TimerControllers />
            </div>
        )

    }
}