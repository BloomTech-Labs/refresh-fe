import React from 'react'
import refreshpic from './refresh.svg'
import refreshlogo from './refreshlogo.svg'

function Marketing(){

    return(
        <div className='marketing'>
            <h1>Feeling Burnt Out?</h1>
            <img  src={refreshpic} alt="profile-pic" ></img>
            <div className='refresh-logo'>
            <h1>Refresh</h1>
            <img src={refreshlogo}></img>
            </div>
            
        </div>
    )
}

export default Marketing