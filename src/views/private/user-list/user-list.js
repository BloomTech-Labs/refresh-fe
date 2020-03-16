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
flex-direction: column;  
height: 90vh;
width: 100vw;
padding-left: 15%;

.ALLUSERS {
text-decoration: underline;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 25px;
line-height: 29px;
font-variant: small-caps;
}
`

/* x */

const Title = styled.h1`
h1 { 
padding-top: 2%;
padding-bottom: 2%;
text-align: center;
overflow: hidden;
white-space: nowrap;
padding-right: 15%;
font-family: Roboto;
font-style: normal;
font-weight: bold;
font-size: 40px;
line-height: auto;
/* identical to box height */

font-variant: small-caps;

color: #3B444B;
}
`


const x = styled.div`
width: 16px;
height: 35px;
left: 387px;
top: 206px;

font-family: Roboto;
font-style: normal;
font-weight: 200;
font-size: 30px;
line-height: 35px;
font-variant: small-caps;

color: #4F5254;
`

const SearchFlex = styled.div `
display: flex;
justify-content: space-around;
text-align: center;
padding-right: 15%;
padding-top 2%;
`
const SearchFlex2 = styled.div `
display: flex;
justify-content: space-between;
::placeholder,
::-webkit-input-placeholder {
  color: blue;
}
:-ms-input-placeholder {
   color: blue;
}
`

const UserList = props => {
    
    const [searchTerm, setSearchTerm] = useState("");
    const [showNulls, setShowNulls] = useState(false);
    const [update, setUpdate] = useState(false)

    
    useEffect(() => {
        props.fetchAllUsers();
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
                    // onReload={ () => {setReload() }}
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
            <h2 className='ALLUSERS'>ALL USERS</h2>
            <SearchFlex2>
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
            allUsers: state.allUsers,
            singleUser: state.singleUser,
            isFetching: state.isFetching,
            error: state.error
        }
    },
    { fetchAllUsers }
)(UserList);