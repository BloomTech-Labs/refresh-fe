import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTeams, editTeamName } from '../actions/actions';
import styled from 'styled-components';

import TeamCard from './teamCard';
import AddTeamButton from './addTeam';

import { Container, Title, BlueFlex, AddTeam } from '../styled-components/leaderboard-styles';

const Leaderboard = (props) => {
    const [render, setRender] = useState(false)


    useEffect(() => {
        props.fetchTeams()
    }, [render])

    const makeRender = (change) => {
        console.log('makeRender', change)
        setRender(change)
        
    }


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