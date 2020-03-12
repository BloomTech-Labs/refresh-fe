import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateUserTeam, deleteUser, fetchUser } from '../actions/actions';
import styled from 'styled-components';


const UserPage = styled.div`
display: flex;
align-content: center;
flex-direction: column;
margin-left: 20%;
`

const Changes = styled.div`
margin-left: 20%;
`

const ProfileCard = styled.div`
background: white;
width: 250px;
padding: 30px;
border-radius: 3px;
`

const UserProfile = props => {
    console.log('UserProfile props: ', props)

    const [editUserTeam, setEditUserTeam] = useState({ team_id: '' })
    const [changing, setChanging] = useState(false)

    const handleSubmit = event => {
        event.preventDefault();
        if(editUserTeam.team_id) {
            console.log('userId: ', props.match.params.id, 'teamId: ', editUserTeam)
            props.updateUserTeam(props.match.params.id, editUserTeam)
            setChanging(!changing)
        } else {
            alert('Select team before submitting edit')
        }
    }

    const deleteUser = event => {
        event.preventDefault();
        props.deleteUser(props.match.params.id)
        setChanging(!changing)
    }


    useEffect(() => {
        props.fetchUser(props.match.params.id)
    }, [changing])




    const onChange = event => {
        setEditUserTeam({ team_id: event.target.value })
        // console.log('editProfile team', editUserTeam)
    }

    if(changing === true) {
        return <Changes>Changes submitted</Changes>
    }

    if(props.singleUser === undefined) {
        return <h1>Loading</h1>
    } else {
        return (
            <UserPage>
                <h1>User Profile</h1>
                <ProfileCard>
                    <div className='profile'>
                        <h2>{`${props.singleUser.first_name} ${props.singleUser.last_name}`}</h2>
                        <h2>{`Team: ${props.singleUser.team_id === null ? props.singleUser.team_id = 'None' : props.singleUser.team_id}`}</h2>
                        <h2>
                            {`${props.singleUser.points === null ? props.singleUser.points = 0 : props.singleUser.points} POINTS`}
                        </h2>
                        <h2>{props.singleUser.email}</h2>
                    </div>
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
                        <button onClick={deleteUser}>Delete User</button>
                    </form>
                </ProfileCard>
            </UserPage>
        )
    }
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
    { updateUserTeam, deleteUser, fetchUser }
)(UserProfile);

