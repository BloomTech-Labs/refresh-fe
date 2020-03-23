import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateUserTeam, deleteUser, fetchUser, fetchTeams, fetchUserTeamName } from '../actions/actions';
import { ProfileCard2, Title, Dropdown, ButtonX, Name, Blue, UserPage } from '../styled-components/user-profile-styles'


const UserProfile = props => {
    const [changing, setChanging] = useState(false)

    const handleSubmit = event => {
        let editedTeam = { team_id: event.target.value }
        event.preventDefault();
        if(editedTeam) {
            props.updateUserTeam(props.match.params.id, editedTeam)
            setTimeout(() => {setChanging(!changing)}, 100)
        } 
    }

    const deleteUser = event => {
        event.preventDefault();
        props.deleteUser(props.match.params.id)
        setChanging(!changing)
        setTimeout(() => {props.history.push('/users')}, 100)
    }


    useEffect(() => {
        props.fetchUser(props.match.params.id)
        props.fetchTeams()
    }, [changing])

    
    if(props.singleUser === undefined) {
        return <h1>Loading</h1>
    } else {
        return (
            <UserPage>
                <Title>
                <h1>USER PROFILE</h1>
                </Title>
                <ProfileCard2>
                    <ButtonX>
                    <i class="fas fa-times fa-2x" onClick={deleteUser}></i>
                    </ButtonX>
                    
                    <div className='profile'>
                    <Name>
                        <h2>{`${props.singleUser.first_name} ${props.singleUser.last_name}`}</h2>
                        
                        </Name>
                        <h3>{props.singleUser.email}</h3>
                        <Blue>
                        
                        <h2>
                            {`${props.singleUser.points === null ? props.singleUser.points = 0 : props.singleUser.points} POINTS`}
                        </h2>
                        </Blue>
                    </div>
                    
                    <form>
                        <Dropdown onChange={handleSubmit}>
                        <option>
                            {`${props.singleUser.name === null ? props.singleUser.name = 'None' : props.singleUser.name}`}
                        </option>
                        {props.teams.map((name, index) => {
                            return (
                                <option key={index} value={name.id}>{name.name}</option>
                            )
                        })}
                        </Dropdown>
                    </form>
                </ProfileCard2>
            </UserPage>
        )
    }
}

export default connect(
    state => {
        return {
            teamName: {},
            teams: state.teams,
            allUsers: state.allUsers,
            singleUser: state.singleUser,
            isFetching: state.isFetching,
            error: state.error
        }
    },
    { updateUserTeam, deleteUser, fetchUser, fetchTeams, fetchUserTeamName }
)(UserProfile);

