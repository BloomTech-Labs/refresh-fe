import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const UserList = props => {
    const [users, setUsers] = useState();

    useEffect(() => {
        axios.get('https://labs-refresh.herokuapp.com/users/')
            .then((response) => {
                const users = response.data;
                setUsers(users);
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])

    
    if(users === undefined) {
        return <h1>Loading Users...</h1>
    } else {
        return (
            <div>
                <h1>User Profiles</h1>
                
            </div>
        )
    }
}

export default UserList;