import React, { useState, useEffect } from 'react';

export const Minutes = () => {

    const [minutes, setMinutes] = useState(25);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        setInterval(() => {
                setMinutes(minutes => minutes - 1);
            }, 60000);
    }, [minutes]);

    return (
        <>
           
            <div className="minutes">
                {minutes}
            </div>
        </>
    )
}