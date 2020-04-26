import React from 'react'


class LeaderBoard extends React.Component{
    render(){
        return(
            <div className='leader-board'>

                <div className ='sidebar-title'>
                    <h1>Leaderboard</h1>
                </div>
                
                <div className='sidebar-content'>
                <h2>Cybersecurity <br></br> 5000 Points</h2>
                <h2>Expericeces <br></br> 4965 Points</h2>
                <h2>Development <br></br> 4500 Points</h2>
                <h2>Customer Support <br></br> 4350 Points</h2>
                </div>
            </div>
        )
    }
}

export default LeaderBoard