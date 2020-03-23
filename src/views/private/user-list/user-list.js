import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllUsers, fetchTeams, fetchUserTeamName } from '../actions/actions';

import { Body, Title, SearchFlex, SearchFlex2, List } from '../styled-components/user-styles'

import UserCard from './user-card';


const UserList = props => {
    const [searchTerm, setSearchTerm] = useState("");
    const [showNulls, setShowNulls] = useState(false);
    const [update, setUpdate] = useState(false)

    
    useEffect(() => {
        props.fetchAllUsers();
        props.fetchTeams()
    }, [update])

    const rerender = (change) => {
        console.log('rerender change: ', change)
        setUpdate(change)
    }


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

    
    const filteredUsers = props.allUsers.sort((a, b) => {
        return a.id - b.id
    }).filter(employees => {
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
                    teams={props.teams} 
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
                <Title>
            <h1>USER PROFILES</h1>
            </Title>
            <SearchFlex>
            <h2 className='ALLUSERS'>{showNulls === true ? 'NO TEAM' : 'ALL USERS'}</h2>
            <SearchFlex2>
                <form>
                    <input className='blueInput'
                    id="search"
                    type="text"
                    name="searchBar"
                    placeholder="Search Users"
                    onChange={changeHandler}
                    value={searchTerm}
                    />
            </form>
            <form className='toggleButton' onSubmit={toggleUsers}>
                <button>{showNulls ? 'All Users' : 'Teamless Users'}</button>
            </form>
            </SearchFlex2>
            </SearchFlex>
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
            teams: state.teams,
            allUsers: state.allUsers,
            singleUser: state.singleUser,
            isFetching: state.isFetching,
            error: state.error
        }
    },
    { fetchAllUsers, fetchTeams, fetchUserTeamName }
)(UserList);