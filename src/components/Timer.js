import React, { useState, useEffect } from 'react';

export const Timer = () => {

    const [timer, setTimer] = useState(25.00);
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive)
    }

    function reset() {
        setTimer(25.00);
        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setTimer(timer => timer - 0.0166666667);
            }, 1000);
        } else if (!isActive && timer !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, timer]);

    return (
        <>
            <div className="timer">
                {timer.toFixed(2)}
            </div>
            <button className="start-button" onClick={toggle}>
                {isActive ? 'Pause' : 'Start'}
            </button>
            <button className="stop-button" onClick={reset}>
                Stop
            </button>
        </>
    )
}