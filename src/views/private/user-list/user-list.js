import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import UserCard from './user-card';

const List = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`

const UserList = props => {
    const [users, setUsers] = useState();

    useEffect(() => {
        axios.get('https://labs-refresh.herokuapp.com/users/')
            .then((response) => {
                const usersInfo = response.data;
                setUsers(usersInfo);
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
                <h1>All Users</h1>
                <List>
                    {users.map((user, key) => {
                        return (
                            <div key={user.id}>
                                <UserCard info={user} />
                            </div>
                        )
                    })}
                </List>
            </div>
        )
    }
}

export default UserList;