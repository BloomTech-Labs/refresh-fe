import React, { useState } from 'react';
import { connect } from 'react-redux';
import { updateUserTeam } from '../actions/actions';

import styled from 'styled-components';

const ProfileCard = styled.div`
background: white;
width: 250px;
padding: 30px;
border-radius: 3px;
margin: 30px;
`


const UserCard = props => {
    console.log('UserCard Props: ', props)
    const [editUserTeam, setEditUserTeam] = useState({ team_id: '' })

    const passId = () => {
        props.routeToUserProfile(props.info.id)
    }

    const handleSubmit = event => {
        event.preventDefault();
        if(editUserTeam.team_id) {
            console.log('userId: ', props.info.id, 'teamId: ', editUserTeam)
            props.editUserTeam(props.info.id, editUserTeam)
        } else {
            alert('Select team before submitting edit')
        }
    }

    const onChange = event => {
        setEditUserTeam({ team_id: event.target.value })
        // console.log('editProfile team', editUserTeam)
    }

    return (
        <div>
            <ProfileCard>
                <h2 onClick={passId}>{`${props.info.first_name} ${props.info.last_name}`}</h2>
                <h2>{`Team: ${props.info.team_id === null ? props.info.team_id = 'None' : props.info.team_id}`}</h2>
                <h2>
                    {`${props.info.points === null ? props.info.points = 0 : props.info.points} POINTS`}
                </h2>
                <h2>{props.info.email}</h2>
                <form onSubmit={handleSubmit}>
                    <label>Edit team</label>
                    <select value={editUserTeam.team_id} onChange={onChange}>
                        <option></option>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                        <option value='6'>6</option>
                        <option value='7'>7</option>
                    </select>
                    <button>Submit Team Change</button>
                </form>
            </ProfileCard>
        </div>
    )
}

export default connect(
    state => {
        return {
            allUsers: state.allUsers,
            singleUser: state.singleUser,
            isFetching: state.isFetching,
            error: state.error
        }
    },
    { updateUserTeam }
)(UserCard);


