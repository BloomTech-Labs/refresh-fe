import React from 'react';


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