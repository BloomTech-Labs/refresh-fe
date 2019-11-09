import React, { useState, useEffect } from 'react';

export const Seconds = () => {

    const [seconds, setSeconds] = useState(60);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000);
        }, [seconds]);

    return (
        <>
           
            <div className="seconds">
                {seconds}
            </div>
        </>
    )
}