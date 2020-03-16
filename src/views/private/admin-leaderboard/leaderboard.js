import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchTeams } from '../actions/actions';
import styled from 'styled-components';

import TeamCard from './teamCard';

const Container = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    margin-left: 5%;
`


const Leaderboard = (props) => {

    console.log('Leaderboard Props: ', props.teams)

    useEffect(() => {
        props.fetchTeams()
    }, [])

    const sortedTeams = props.teams.map(team => {
        return (
            <div>
                <TeamCard team={team} />
            </div>
        )
    })



    return (
        <Container>
            <h1>Leaderboard</h1>
            <div>
                {sortedTeams}
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