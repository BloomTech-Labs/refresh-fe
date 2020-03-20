import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchAllUsers, fetchTeams, fetchUserTeamName } from '../actions/actions';

import styled from 'styled-components';

import UserCard from './user-card';

const List = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
margin-right: 5%;
`
const Body = styled.div`
display: flex;  
flex-direction: column;  
height: 90vh;
width: auto;
margin-left: 120px;
padding-left: 5%;
@media (max-width: 768px) {
    padding-left: 0%;
  }

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

font-variant: small-caps;

color: #3B444B;
}
`


const SearchFlex = styled.div `
display: flex;
justify-content: space-around;
text-align: center;
padding-right: 15%;
padding-top: 2%;
padding-bottom: 3%;
@media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    margin-left: 0px;
    padding-left: 0px;
  }

`
const SearchFlex2 = styled.div `
display: flex;
justify-content: space-between;
margin-left: 50%;
@media (max-width: 768px) {
    justify-content: center;
    flex-direction: column;
    margin-left: 0px;
    padding-left: 0px;
    padding-top: 5%;
  }
.toggleButton {
    margin-left: 10%;
    @media (max-width: 768px) {
        margin-left: 0px;
        padding-top: 5%;
    }
}
.blueInput {
    border-radius: 5px;
    border: none;
    width: 175px;
    height: 50px;
    box-sizing: border-box;
    text-align: center;
    ::placeholder {
  color: blue;
}
}
`

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