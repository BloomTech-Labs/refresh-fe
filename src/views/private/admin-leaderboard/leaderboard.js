import React, { useState } from 'react';
import { connect } from 'react-redux';
import { fetchTeams } from '../actions/actions';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`

const Leaderboard = () => {

    return (
        <Container>
            <h1>Leaderboard</h1>
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
)(LeaderBoard);