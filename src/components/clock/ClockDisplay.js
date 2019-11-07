import React from 'react';

export default function ClockDisplay() {

    return (
        <div className="clock-display">
            <h1>Pomodoro Clock</h1>
            <Timer />
            <TimerControllers />
        </div>
    )

}