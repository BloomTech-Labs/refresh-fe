import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTeams, editTeamName } from '../actions/actions';
import styled from 'styled-components';

import TeamCard from './teamCard';
import AddTeamButton from './addTeam';
import DeleteTeamButton from './deleteButton';
import EditTeamButton from './editTeam';

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-left: 120px;
    margin-right: 20px;
    @media (max-width: 768px) {
        margin-left: 101px;
        margin-right: 1px;
    }
.teamCardFlex {
    display: flex;
    width: 100%;
}
.addTeam {
    align-content: right;
    padding: 500%;
}
`
const Title = styled.h1 ` 
    padding-top: 2%;
    padding-bottom: 2%;
    text-align: center;
    overflow: hidden;
    white-space: nowrap;
    padding-right: 15%;
    padding-left: 12.5%;    
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: auto;
    
    font-variant: small-caps;
    
    color: #3B444B;
    `
const BlueFlex = styled.div `
text-align: center;
overflow: hidden;
white-space: nowrap;
display: flex;
justify-content: space-between;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 15.2138px;
letter-spacing: 0.035em;
margin-top: 2%;
margin-bottom: 2%;
color: #3DA2ED;
`
const AddTeam = styled.i `
float: right;
margin-right: fixed;
text-align: right;
color: #3DA2ED;
font-variant: small-caps;
font-family: Roboto;
font-size: 15.2138px;
letter-spacing: 0.035em;
@media (max-width: 768px) {
        text-align: center;
    }
.fas{
:hover {
    cursor: pointer;
}
}
`

const Leaderboard = (props) => {
    const [render, setRender] = useState(false)
    const [teamsData, setTeamsData] = useState()


    useEffect(() => {
        props.fetchTeams()
    }, [render])

    const makeRender = (change) => {
        console.log('makeRender', change)
        setRender(change)
        
    }

    // const sortedTeams = props.teams.map(team => {
    //     return (
    //         <div>
    //             <TeamCard 
    //                 team={team} 
    //             />
    //         </div>
    //     )
    // })


        return (
            <Container>
                <Title>LEADERBOARD</Title>
                <AddTeam>
                <AddTeamButton makeRender={makeRender} render={render} />
                </AddTeam>
                <BlueFlex>
                <h2>TEAMS</h2>
                <h2>POINTS</h2>
                <h2>DELETE TEAM</h2>
                </BlueFlex>
                <div>
                    {props.teams.sort((a, b) => {
                        return b.points - a.points
                    }).map(team => {
                        return (
                            <div className='teamCardFlex'>
                                <TeamCard 
                                    team={team}
                                    makeRender={makeRender}
                                    render={render}
                                />
                            </div>
                        )
                    })
                    }
                </div>
            </Container>
        )
    }

export default connect(
    state => {
        return {
            teams: state.teams,
            allUsers: state.allUsers,
            singleUser: state.singleUser,
            isFetching: state.isFetching,
            error: state.error
        }
    },
    { fetchTeams, editTeamName }
)(Leaderboard);