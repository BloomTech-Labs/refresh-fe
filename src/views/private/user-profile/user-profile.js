import React, { useState, useEffect } from 'react';
import axios from 'axios';



const UserProfile = props => {

    const [userProfile, setUserProfile] = useState()
    const [editProfile, setEditProfile] = useState({team_id: ''})

    const handleSubmit = event => {
        event.preventDefault();
        axios.put(`https://labs-refresh.herokuapp.com/users/${userProfile.id}`, editProfile)
            .then(response => {
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
        axios.get('https://labs-refresh.herokuapp.com/users/11')
            .then((response) => {
                setUserProfile(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [handleSubmit, deleteUser])

    const handleChange = event => {
        setEditProfile({ ...editProfile, [event.target.name]: event.target.value })
        console.log('editProfile team', editProfile)
    }


    if(userProfile === undefined) {
        return <h1>Loading</h1>
    } else {
        return ( 
            <div>
                <h1>User Profile Page</h1>
                <div className='profile'>
                    <h2>Team: {userProfile.team_id}</h2>
                    <h2>{`${userProfile.first_name} ${userProfile.last_name} 
                    has ${userProfile.points === null ? userProfile.points = 0 : userProfile.points} points!`}
                    </h2>
                    <h2>{userProfile.email}</h2>
                </div>
                <form onSubmit={handleSubmit}>
                    <label>Team: </label>
                    <input 
                        name='team_id'
                        placeholder='Change Team'
                        value={editProfile.team_id}
                        onChange={handleChange}
                    /> 
                    <button>Submit Team Change</button>
                    <button onClick={deleteUser}>Delete User</button>
                </form>
            </div>
        )
    }
}


export default UserProfile;