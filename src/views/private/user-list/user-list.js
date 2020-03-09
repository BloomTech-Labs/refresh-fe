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
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([])


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

    useEffect(() => {
        const results = usersInfo.filter(
        user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSearchResults(results);
    }, [searchTerm, users]);

    const changeHandler = event => {
        event.preventDefault();
        setSearchTerm(event.target.value);
    };

    
    if(users === undefined) {
        return <h1>Loading Users...</h1>
    } else {
        return (
            <div>
                <form>
                    <input
                    id="search"
                    type="text"
                    name="searchBar"
                    placeholder="Search"
                    onChange={changeHandler}
                    value={searchTerm}
                    />
                </form>
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


