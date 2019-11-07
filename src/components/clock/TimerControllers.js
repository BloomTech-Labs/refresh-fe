import React from 'react';
import WorkController from './WorkController';
import BreakController from './BreakController';

export default function TimerControllers () {
    return (
        <div className="timer-controllers">
            <WorkController />
            <BreakController />
        </div>
    )
}