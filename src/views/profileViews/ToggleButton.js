import React from 'react';


//this is the hamburger icon toggle button
const HamburgerToggleButton =(props)=>{
    return(
        <div>
            <button className='hamburger-btn'>
                <div className='hamburger-toggle-line'/>
                <div className='hamburger-toggle-line'/>
                <div className='hamburger-toggle-line'/>
            </button>
        </div>
    );
};

export default HamburgerToggleButton;