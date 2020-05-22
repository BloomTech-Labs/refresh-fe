import React from 'react';
import { connect } from 'react-redux';
import { updateUserTeam, fetchTeams, fetchUserTeamName } from '../actions/actions';
// import { Blue, Name, ButtonX, Dropdown, ProfileCard } from '../styled-components/user-card-styles.js';
import UserAvatar from './useravatar.svg'
import DeleteUserButton from './deleteUserButton';


const UserCard = props => {

    const passId = () => {
        props.routeToUserProfile(props.info.id)
    }

    const handleSubmit = (oldTeamID, totalPoints) => event => {
        
        let editedTeam = { team_id: event.target.value }
        event.preventDefault();
        if(editedTeam) {
            props.updateUserTeam(props.info.id, editedTeam, oldTeamID, totalPoints)
            setTimeout(() => {props.rerender(!props.update)}, 100)
        } 
    }

    return (
        <div className='profile-card'>

            {/* Delete Button */}
            <div className=' delete-button'>
            <DeleteUserButton/>
            </div>
            

            {/* User Avatar */}
            <div className='user-avatar'>
            {(props.info.avatar ? <img  src={`https://lab23-refresh-be.herokuapp.com/${props.info.avatar}`}></img> : <img src={UserAvatar}></img>)}
            </div>
            {/*Test Merge Bug Comment */}
            {/* User Name */}
            <h2 className='user-name' onClick={passId}>{`${props.info.full_name}`}</h2>

            {/* User Email */}
            
            <h3 className='user-email'>{props.info.email}</h3>

            {/* User Points */}
            <h2 className='user-points'>
                {`${props.info.total_points === null ? props.info.total_points = 0 : props.info.total_points} Points`}
            </h2>

            {/* User Team Dropdown */}
            <select className='user-team-dropdown'  onChange={handleSubmit(props.info.team_id, props.info.total_points)}>
                <option>
                    {`${props.info.name === null ? props.info.name = 'None' : props.info.name}`}
                </option>
                {props.teams.map((name, index) => {
                    return (
                        <option key={index} value={name.id}>{name.name}</option>
                    )
                })}
            </select>

        </div>
    )}
    

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