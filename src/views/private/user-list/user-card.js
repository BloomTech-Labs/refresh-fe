import React from 'react';
import { connect } from 'react-redux';
import { updateUserTeam, fetchTeams, fetchUserTeamName } from '../actions/actions';
import { Blue, Name, ButtonX, Dropdown, ProfileCard } from '../styled-components/user-card-styles.js';
import DeleteUserButton from './deleteUserButton';


const UserCard = props => {

    const passId = () => {
        props.routeToUserProfile(props.info.id)
    }

    const handleSubmit = event => {
        let editedTeam = { team_id: event.target.value }
        event.preventDefault();
        if(editedTeam) {
            props.updateUserTeam(props.info.id, editedTeam)
            setTimeout(() => {props.rerender(!props.update)}, 100)
        } 
    }

    return (
        <div>
            <ProfileCard>
                <DeleteUserButton/>
                <Name>
                <h2 onClick={passId}>{`${props.info.full_name}`}</h2>
                </Name>
                <h3>{props.info.email}</h3>
                <Blue>
                <h2>
                    {`${props.info.total_points === null ? props.info.total_points = 0 : props.info.total_points} POINTS`}
                </h2>
                </Blue>
                <Dropdown onChange={handleSubmit}>
                    <option>
                        {`${props.info.name === null ? props.info.name = 'None' : props.info.name}`}
                    </option>
                    {props.teams.map((name, index) => {
                        return (
                            <option key={index} value={name.id}>{name.name}</option>
                        )
                    })}
                </Dropdown>
            </ProfileCard>
        </div>
    )
}

export default connect(
    state => {
        return {
            teamName: state.reducer.teamName,
            teams: state.reducer.teams,
            allUsers: state.reducer.allUsers,
            singleUser: state.reducer.singleUser,
            isFetching: state.reducer.isFetching,
            error: state.reducer.error
        }
    },
    { updateUserTeam, fetchTeams, fetchUserTeamName}
)(UserCard);