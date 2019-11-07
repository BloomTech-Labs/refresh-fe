import React from 'react';
import Timer from './Timer';
import TimerControllers from './TimerControllers';

export default function ClockDisplay() {

    return (
        <div className="clock-display">
            <h1>Pomodoro Clock</h1>
            <Timer />
            <TimerControllers />
        </div>
    )

}