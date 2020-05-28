import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAllUsers, fetchTeams, fetchUserTeamName } from '../actions/actions';
import UserCard from './user-card';
import Search from './search.svg'

const UserList = props => {
    const [searchTerm, setSearchTerm] = useState("");
    const [showNulls, setShowNulls] = useState(false);
    const [update, setUpdate] = useState(false)
    const [display, setDisplay] = useState(false)
    
    useEffect(() => {
        props.fetchAllUsers();
        props.fetchTeams()
    }, [update])

    const rerender = (change) => {
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
            return employees.team_id === null
        } else if(employees.full_name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return employees
        }
    }).map(employees => {
        return (
            <div  className='user-cards-list' key={employees.id}>
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
            // UserList Body
            <div className='user-list'>

            {/* Search Bar and Team Dropdown*/}
            <div className='user-search-menu'>

                <div className='user-list-title'> 
                <div><h1>Users</h1></div>
                </div>

                <div className='user-search-menu-end'>
                <div className='user-list-search-bar'>
                    <input
                    id="search"
                    type="text"
                    name="searchBar"
                    placeholder="Search"
                    onChange={changeHandler}
                    value={searchTerm}
                    />
                    <img className='search-img' src={Search}></img>
                </div>
            <form className='toggleButton'>
            <select className='user-list-team-dropdown' onChange={toggleUsers}>
                    <option>All Users</option>
                    <option>No Team</option>
                </select>
            </form>
            </div>

            </div>

            {/* User Cards */}
            <div className='user-list-list'>
                {filteredUsers}
            </div>
            </div>
    )
}



export default connect(
    state => {
        return {
            teams: state.reducer.teams,
            allUsers: state.reducer.allUsers,
            singleUser: state.reducer.singleUser,
            isFetching: state.reducer.isFetching,
            error: state.reducer.error
        }
    },
    { fetchAllUsers, fetchTeams, fetchUserTeamName }
)(UserList);