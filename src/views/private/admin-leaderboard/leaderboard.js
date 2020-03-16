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
    margin-left: 5%;
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
                <h1>Leaderboard</h1>
                <AddTeamButton makeRender={makeRender} render={render} />
                <div>
                    {props.teams.map(team => {
                        return (
                            <div>
                                <TeamCard 
                                    team={team}
                                />
                                <DeleteTeamButton 
                                    makeRender={makeRender} 
                                    render={render}
                                    id={team.id}
                                />
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