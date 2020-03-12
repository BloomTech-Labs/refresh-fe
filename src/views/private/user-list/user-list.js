import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllUsers } from '../actions/actions';

import styled from 'styled-components';

import UserCard from './user-card';

const List = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
`
const Body = styled.div`
display: flex;    
padding-left: 70px;
`

const UserList = props => {

    const [searchTerm, setSearchTerm] = useState("");
    const [showNulls, setShowNulls] = useState(false);
    const [update, setUpdate] = useState(false)

    const rerender = (change) => {
        setUpdate(change)
    }
    
    useEffect(() => {
        props.fetchAllUsers();
    }, [update])

    const changeHandler = event => {
        event.preventDefault();
        setSearchTerm(event.target.value);
    };

    const toggleUsers = event => {
        event.preventDefault();
        setShowNulls(!showNulls);
    }

    const routeToUserProfile = userId => {
        props.history.push(`/users/${userId}`)
    }

    if(props.allUsers.length === 0) { return <h1>Loading</h1> }

    
    const filteredUsers = props.allUsers.filter(employees => {
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
                    <UserCard 
                    info={employees} 
                    routeToUserProfile={routeToUserProfile}
                    update={update}
                    rerender={rerender}
                    />
                </div>
            </div>
        )
    })

    return (
        <div>
            <Body>
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
            </Body>
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