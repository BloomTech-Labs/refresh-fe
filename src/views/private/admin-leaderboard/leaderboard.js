import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTeams } from '../actions/actions';
import styled from 'styled-components';

import TeamCard from './teamCard';
import AddTeamButton from './addTeam';
import DeleteTeamButton from './deleteButton';

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-left: 10vw;
    margin-right: 5vw;


.teamCardFlex{
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

const ButtonX = styled.i `

position: relative;
right: 4%;
margin-top: 2%;
color: red;
:hover {
    cursor: pointer;

}
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
const AddTeam = styled.div `
display: inline-block;
float: right;
margin-right: fixed;
text-align: right;
color: #3DA2ED;
font-variant: small-caps;
font-family: Roboto;
font-size: 15.2138px;
letter-spacing: 0.035em;
:hover {
    cursor: pointer;
    text-decoration: underline;
}
`


const Leaderboard = (props) => {
    const [render, setRender] = useState(false)


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
                    {props.teams.map(team => {
                        return (
                            <div className='teamCardFlex'>
                                <TeamCard 
                                    team={team}
                                />
                                <ButtonX>
                                <DeleteTeamButton 
                                    makeRender={makeRender} 
                                    render={render}
                                    id={team.id}
                                />
                                </ButtonX>
                            </div>
                        )
                    })}
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
    { fetchTeams }
)(Leaderboard);