import React, { useState, useEffect } from 'react';
import axios from 'axios';



const UserProfile = props => {

    const [userProfile, setUserProfile] = useState()

    useEffect(async () => {
        const result = await axios(
            'https://labs-refresh.herokuapp.com/users/1'
        );
        console.log(result)
        setUserProfile(result.data)
    }, [])

    return ( 
        <div>
            <h1>User Profile Page</h1>
        </div>
    )
}

export default UserProfile;