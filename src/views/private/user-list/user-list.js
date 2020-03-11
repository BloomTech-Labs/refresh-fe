import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllUsers } from '../actions/actions';

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
    const [showNulls, setShowNulls] = useState(false);


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


    const changeHandler = event => {
        event.preventDefault();
        console.log('searchTerm: ', event.target.value)
        setSearchTerm(event.target.value);
    };

    const toggleUsers = event => {
        event.preventDefault();
        setShowNulls(!showNulls);
        console.log('toggled: ', showNulls)
    }

    if(users === undefined) { return <h1>Loading</h1> }

    
    const filteredUsers = users.filter(employees => {
        console.log(users);
        if(searchTerm === null) {
            return employees
        } else if(showNulls === true) {
            return employees.team_id === 'None'
        } else if(employees.first_name.toLowerCase().includes(searchTerm.toLowerCase()) || employees.last_name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return employees
        }
    }).map(employees => {
        return (
            <div key={employees.id}>
                <div>
                    <UserCard info={employees} />
                </div>
            </div>
        )
    })

    return (
        <div>
            <h1>Users Profiles</h1>
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
            <form onSubmit={toggleUsers}>
                <select>
                    <option value={showNulls}>All Users</option>
                    <option value={showNulls}>No Team</option>
                </select>
                <button>Toggle</button>
            </form>
            <List>
                {filteredUsers}
            </List>
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
    { fetchAllUsers }
)(UserList);