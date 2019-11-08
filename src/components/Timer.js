import React, { useState, useEffect } from 'react';

export const Timer = () => {

    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [isActive, setIsActive] = useState(false);

    function toggle() {
        setIsActive(!isActive)
    }

    function reset() {
        setSeconds(0);
        setMinutes(0);
        setIsActive(false);
    }

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <>
            <div className="seconds">
                {seconds}s
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