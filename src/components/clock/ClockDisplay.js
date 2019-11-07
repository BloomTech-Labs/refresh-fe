import React, { Component } from 'react';

return (
    <div className="clock-display">
        <h1>Pomodoro Clock</h1>
        <div className="timer">
            <span> /TIMER/ </span>
            <span> /CURRENT SESSION/ </span>
        </div>
        <div className="timer-controls">
            <WorkController />
                <div className="work-buttons">
                    <button> + </button>
                    <span> /WORKTIME/ </span>
                    <button> - </button>
                </div>
            <BreakController />
                <div className="break-buttons">
                    <button> + </button>
                    <span> /BREAKTIME/ </span>
                    <button> - </button> 
                </div>
        </div>
    </div>
)