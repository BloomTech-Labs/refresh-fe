import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const UserPage = styled.div`
display: flex;
align-content: center;
flex-direction: column;
`

const ProfileCard = styled.div`
background: white;
width: 250px;
padding: 30px;
border-radius: 3px;
`

const UserProfile = props => {

    const [userProfile, setUserProfile] = useState()
    const [editProfile, setEditProfile] = useState({ team_id: '' })
    const [dropdownItems, setDropdownItems] = useState({ listOpen: false, items: [] })
    const [isChange, setIsChange] = useState(false)

    const handleSubmit = event => {
        event.preventDefault();
        console.log('handleSubmit', editProfile)
        axios.put(`https://labs-refresh.herokuapp.com/users/${userProfile.id}`, editProfile)
            .then(response => {
                setIsChange(!isChange)
                console.log('UPDATE response: ', response)
            })
            .catch(error => {
                console.log('UPDATE error: ', error)
            })
    }

    const deleteUser = event => {
        event.preventDefault()
        axios.delete(`https://labs-refresh.herokuapp.com/users/${userProfile.id}`)
            .then(response => {
                console.log('DELETE response: ', response)
            })
            .catch(error => {
                console.log('DELETE error', error)
            })
    }

    useEffect(() => {
        axios.get('https://labs-refresh.herokuapp.com/users/1')
            .then((response) => {
                setUserProfile(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [isChange])




    const onChange = event => {
        setEditProfile({ team_id: event.target.value })
        console.log('editProfile team', editProfile)
    }


    if(userProfile === undefined) {
        return <h1>Loading</h1>
    } else {
        return (
            <UserPage>
                <h1>User Profile</h1>
                <ProfileCard>
                    <div className='profile'>
                        <h2>{`${userProfile.first_name} ${userProfile.last_name}`}</h2>
                        <h2>Team: {userProfile.team_id}</h2>
                        <h2>
                            {`${userProfile.points === null ? userProfile.points = 0 : userProfile.points} POINTS`}
                        </h2>
                        <h2>{userProfile.email}</h2>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <label>Edit team</label>
                        <select value={editProfile.team_id} onChange={onChange}>
                            <option value='1'>1</option>
                            <option value='2'>2</option>
                            <option value='3'>3</option>
                        </select>
                        <button>Submit Team Change</button>
                        <button onClick={deleteUser}>Delete User</button>
                    </form>
                </ProfileCard>
            </UserPage>
        )
    }
}



export default UserProfile;