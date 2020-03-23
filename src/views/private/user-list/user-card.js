import React from 'react';
import { connect } from 'react-redux';
import { updateUserTeam, deleteUser, fetchTeams, fetchUserTeamName } from '../actions/actions';
import { Blue, Name, ButtonX, Dropdown, ProfileCard } from '../styled-components/user-card-styles.js';


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

    const deleteUser = event => {
        event.preventDefault();
        props.deleteUser(props.info.id)
        setTimeout(() => {props.rerender(!props.update)}, 100)
    }


    return (
        <div>
            <ProfileCard>
                <ButtonX>
                    <i class="fas fa-times fa-2x" onClick={deleteUser}></i>
                </ButtonX>
                <Name>
                <h2 onClick={passId}>{`${props.info.first_name} ${props.info.last_name}`}</h2>
                </Name>
                <h3>{props.info.email}</h3>
                <Blue>
                <h2>
                    {`${props.info.points === null ? props.info.points = 0 : props.info.points} POINTS`}
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
            teamName: state.teamName,
            teams: state.teams,
            allUsers: state.allUsers,
            singleUser: state.singleUser,
            isFetching: state.isFetching,
            error: state.error
        }
    },
    { updateUserTeam, deleteUser, fetchTeams, fetchUserTeamName}
)(UserCard);