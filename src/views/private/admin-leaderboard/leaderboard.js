import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTeams, editTeamName } from '../actions/actions';
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
                <Title>Leaderboard</Title>
                <AddTeam>
                <AddTeamButton makeRender={makeRender} render={render}></AddTeamButton><p>Add Team</p>
                </AddTeam>
                <BlueFlex>
                <h2>Teams</h2>
                <h2>Points</h2>
                <div className='blank'>          </div>
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