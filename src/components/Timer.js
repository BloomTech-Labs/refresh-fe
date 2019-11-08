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
        let intervalMin = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
            // intervalMin = setTimeout(() => {
            //     setMinutes(minutes => minutes + 1)
            // }, 10 * 1000)
        } else if (isActive && seconds === 10) {
            setSeconds(seconds => seconds === 0);
        } else if (!isActive && seconds !== 0 && minutes !== 0) {
            clearInterval(interval, intervalMin);
        }
        return () => clearInterval(interval, intervalMin);
    }, [isActive, seconds, minutes]);

    return (
        <>
            <div className="milliseconds">
                {seconds * 60}ms :
            </div>
            <div className="seconds">
                {seconds}s :
            </div>
            <div className="minutes">
                {seconds / 60}m
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