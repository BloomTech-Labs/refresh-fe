import React from 'react';
import './timer-styles.scss';
import TimerOne from './TimerOne';
import TimerTwo from './TimerTwo';
import TimerThree from './TimerThree';
import TimerFour from './TimerFour';
import TimerShortBreak from './TimerShortBreak';
import TimerLongBreak from './TimerLongBreak';

const Timer = (props) => {
    return (
        <div className="mainTimer">
            <TimerOne/>
            { props.extendTimer && 
            <>
            <TimerTwo/>
            <TimerThree/>
            <TimerFour/>
            <TimerShortBreak/>
            <TimerLongBreak/>
            </>
            }  
        </div>
    )
}

export default Timer;